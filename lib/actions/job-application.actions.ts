"use server";

import { error } from "console";
import { getSession } from "../auth/auth";
import connectDB from "../db";
import { Board, Column, JobApplication } from "../models";

interface JobApplicationData {
    company: string;
    position?: string;
    location?: string;
    notes?: string;
    salary?: string;
    jobUrl?: string;
    columnId: string;
    boardId: string;
    tags?: string[];
    description?: string;
}

export async function createJobApplication(data: JobApplicationData) {

    const session = await getSession();

    if (!session?.user) return { error: "Unauthorized" };

    await connectDB();

    const {
        company,
        position,
        location,
        salary,
        notes,
        jobUrl,
        columnId,
        boardId,
        tags,
        description
    } = data;

    if (!company || !position || !columnId || !boardId) {
        return { error: "Missing required fields" }

    }

    const board = Board.findOne({
        _id: boardId,
        userId: session.user.id,
    })


    if (!board) return { error: "Board not found" };

    //verify columns belongs to board 

    const column = Column.findOne({
        _id: columnId,
        boardId: boardId,
    })


    if (!column) return { error: "Column  not found" };


    const maxOrder = (await JobApplication.findOne({ columnId })
        .sort({ order: -1 })
        .select("order")
        .lean()) as { order: number } | null;


    const jobApplication = await JobApplication.create({
        company,
        position,
        location,
        notes,
        salary,
        jobUrl,
        columnId,
        boardId,
        userId : session.user.id ,
        tags: tags || [],
        description,
        status: "applied",
        order: maxOrder ? maxOrder.order + 1 : 0,
    });


     await Column.findByIdAndUpdate(columnId, {
    $push: { jobApplications: jobApplication._id },
  });
        console.log(jobApplication);


    return {data : JSON.parse(JSON.stringify(jobApplication))};



}