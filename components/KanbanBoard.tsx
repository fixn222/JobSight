
"use client"

import { Board, Column } from '@/lib/models/models.types'
import { Award, Calendar, CheckCircle2, Mic, MoreVertical, Trash2, XCircle } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
// import {  } from 'radix-ui'
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { Button } from './ui/button'
import CreateJobApplicationDialog from './create-job-dialog'
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
    color: "bg-blue-500",
    icon: <Calendar className='h-4 w-4' />
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className='h-4 w-4' />
  },
  {
    color: "bg-green-500",
    icon: <Mic className='h-4 w-4' />
  },
  {
    color: "bg-yellow-500",
    icon: <Award className='h-4 w-4' />
  },
  {
    color: "bg-red-500",
    icon: <XCircle className='h-4 w-4' />
  },
]

function DroppableColumn({ column, config, boardId }: { column: Column, config: colConfig, boardId: string }) {
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
        <CreateJobApplicationDialog columnId={column._id} boardId={boardId} />
      </CardContent>
    </Card>
  )
}

const KanbanBoard = ({ board, userId }: kanbanBoardProps) => {
  const columns = board.columns;
  return (
    <div>
      <div>
        {columns.map((col, key) => {
          const config = COLUMN_CONIFIG[key] || {
            color: "bg-gray-500",
            icon: <Calendar className='h-4 w-4' />
          };
          return <DroppableColumn key={key} column={col} config={config} boardId={board._id} />
        })}
      </div>
    </div>
  )
}

export default KanbanBoard