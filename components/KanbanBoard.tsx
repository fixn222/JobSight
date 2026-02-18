
"use client"

import { Board, JobApplication,  } from '@/lib/models/models.types'
import { Award, Calendar, CheckCircle2, Mic, MoreVertical, Trash2, XCircle } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
// import {  } from 'radix-ui'
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { Button } from './ui/button'
import CreateJobApplicationDialog from './create-job-dialog'
import { Column } from '@/lib/models/models.types'
import JobApplicationCard from './Job-applicationCard'

interface kanbanBoardProps {
  board: Board,
  userId: string

}

interface colConfig {
  color: string;
  icon: React.ReactNode

}
const COLUMN_CONIFIG: Array<colConfig> = [
  {
    color: "bg-black",
    icon: <Calendar className='h-4 w-4' />
  },
  {
    color: "bg-black",
    icon: <CheckCircle2 className='h-4 w-4' />
  },
  {
    color: "bg-black",
    icon: <Mic className='h-4 w-4' />
  },
  {
    color: "bg-black",
    icon: <Award className='h-4 w-4' />
  },
  {
    color: "bg-black",
    icon: <XCircle className='h-4 w-4' />
  },
]

function DroppableColumn({ column, config, boardId  , sortedColumns }: 
  { column: Column, config: colConfig, boardId: string  , sortedColumns : Column[]}) {
  
  const sortedJobs = column.jobApplications?.sort((a,b)=> a.order - b.order) || [];
  
  return (
    <Card className='min-w-[300px] shrink-0 shadow-md p-9'>
      <CardHeader className={`${config.color} text-white rounded-t-lg pb-3 pt-3`} >

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            {config.icon}
            <CardTitle className='text-white text-base font-semibold' >{column.name}</CardTitle>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild >
              <Button variant={"ghost"}
              size={"icon"}
              className='h-6 w-6 text-white hover:bg-white/20'>
                <MoreVertical className='h-4 w-4' />

              </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem >
              
              <Trash2 className='mr-2 h-2 w-4' />
              Delete Column

              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className='space-y-2 pt-4 bg-gray50/50 min-h-[400px] rounded-b-lg'>

      {sortedJobs.map((job , key)=>(
        <SortableJobCard key={key} job={{...job , columnId : job.columnId || column._id}}
         columns={sortedColumns} />
      ))}
        <CreateJobApplicationDialog columnId={column._id} boardId={boardId} />
      </CardContent>
    </Card>
  )
}

 function SortableJobCard ({job , columns}  : {job  : JobApplication; columns : Column[]}) {

  return (
  <div>

    <JobApplicationCard job={job} columns={columns} />

  </div>)

 }

const KanbanBoard = ({ board, userId }: kanbanBoardProps) => {
  const columns = board.columns;
    const sortedColumns = columns?.sort((a,b)=> a.order - b.order) || [];


  // console.log(columns[0].jobApplications);
  return (
    <div>
      <div>
        {columns.map((col, key) => {
          const config = COLUMN_CONIFIG[key] || {
            color: "bg-gray-500",
            icon: <Calendar className='h-4 w-4' />
          };
          return <DroppableColumn key={key} column={col} config={config} boardId={board._id}  sortedColumns={sortedColumns}/>
        })}
      </div>
    </div>
  )
}

export default KanbanBoard