import KanbanBoard from '@/components/KanbanBoard';
import { getSession } from '@/lib/auth/auth'
import connectDB from '@/lib/db';
import { Board } from '@/lib/models';
import { redirect } from 'next/navigation';
import React from 'react'

const DashBoard = async () => {

  const session = await getSession();

  if (!session?.user) {

    redirect("/sign-in");
    
 
  }
  // console.log(session.user.email);

 await connectDB();

  const board = await Board.findOne({
    userId : session.user.id,
    name : "Job Hunt",

  }).populate({
    path : "columns" ,
  })

 

  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto p-6'>
        <div className='mb-6'>
          <h1 className='text-3xl font-bold text-black'>{board.name}</h1>
          <p className='text-gray-600'>Track your job Applications </p>
        </div>
        <KanbanBoard board={JSON.parse(JSON.stringify(board))} userId={session.user.id}/>
      </div>
    </div>
  )
}

export default DashBoard