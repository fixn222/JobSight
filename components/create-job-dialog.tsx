
'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { createJobApplication } from '@/lib/actions/job-application.actions';
import { error } from 'node:console';
// import { error } from 'console';

interface CreateJobApplicationDialogProp {
  columnId: string;
  boardId: string
}

const DEFAULT_FORM_DATA = {
  company: "",
  position: "",
  location: "",
  notes: "",
  salary: "",
  jobUrl: "",
  tags: "",
  description: "",

}

const CreateJobApplicationDialog = ({ columnId, boardId }: CreateJobApplicationDialogProp) => {

  const [open, setOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  

  async function handleSubmit(e : React.FormEvent) {

    e.preventDefault();

    try{

    const result = await createJobApplication({
      ...formData,
      columnId,
      boardId,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
      
    });

    if (!result.error) {
     
      setFormData(DEFAULT_FORM_DATA);
      setOpen(false);
      
    }else{
      console.error("failed to create a job application" , result.error)
    }

    }catch (err){
      console.log(err);
    }
    
  } 

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger >
        <Button variant={"outline"} className="w-full mb-4 justify-start text-muted-foreground border-dashed border-2 hover:border-solid hover:bg-muted/50" >
          <Plus className="mr-2 h-4 w-4" />
          Add Job
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-2xl' >
        <DialogHeader>
          <DialogTitle>Add job Application</DialogTitle>
          <DialogDescription >
            Track a new job application
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor='company'>Company *</Label>
                <Input id='company'
                value={formData.company} 
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })}
                   />
              </div >
              <div className="space-y-2">
                <Label htmlFor='position'>Position *</Label>
                <Input id='position' 
                value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })}

                />

              </div>
              <div className="space-y-2">
                <Label htmlFor='location'>location </Label>
                <Input id='location' 
                value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })}
                />

              </div>
              <div className="space-y-2">
                <Label htmlFor='salary'>Salary </Label>
                <Input placeholder="e.g., $100k - $150k" id='salary' 
                value={formData.salary}
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })}
                />

              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor='jobUrl'>job URL </Label>
              <Input placeholder="https://...." id='jobUrl'
              value={formData.jobUrl}
                onChange={(e) =>
                  setFormData({ ...formData, jobUrl: e.target.value })}

              />
            </div>
            <div className="space-y-2">
              <Label htmlFor='tags'>Tags (coma-seperated) </Label>
              <Input placeholder="" id='tags'
              value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData , tags: e.target.value })}

              />
            </div>
            <div className="space-y-2">
              <Label htmlFor='description'>Description </Label>
              <Textarea rows={3} placeholder="Brief description of the role" id='description'
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })}

              />
            </div>
            <div className="space-y-2">
              <Label htmlFor='notes'>Notes </Label>
              <Textarea rows={4} placeholder="" id='notes'
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })}

              />
            </div>
          </div>
          <DialogFooter>
            <Button type='button' onClick={() => setOpen(false)} variant={"outline"}>cancel</Button>
            <Button type='submit' >Add Application</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateJobApplicationDialog