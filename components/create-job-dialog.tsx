
'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface CreateJobApplicationDialogProp {
  columnId: string;
  boardId: string
}

const CreateJobApplicationDialog = ({ columnId, boardId }: CreateJobApplicationDialogProp) => {

  const [open, setOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    location: "",
    salary: "",
    notes: "",
    jobUrl: "",
    tags: "",
    description: "",
  });


  async function handleSubmit(e : React.FormEvent) {

    e.preventDefault();

    try{

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
        <form className="space-y-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor='company'>Company *</Label>
                <Input id='company' onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })}
                  required />
              </div >
              <div className="space-y-2">
                <Label htmlFor='position'>Position *</Label>
                <Input id='position' required
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })}

                />

              </div>
              <div className="space-y-2">
                <Label htmlFor='location'>location </Label>
                <Input id='location' required
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })}
                />

              </div>
              <div className="space-y-2">
                <Label htmlFor='salary'>Salary </Label>
                <Input placeholder="e.g., $100k - $150k" id='salary' required
                  onChange={(e) =>
                    setFormData({ ...formData, salary: e.target.value })}
                />

              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor='jobUrl'>job URL </Label>
              <Input placeholder="https://...." id='jobUrl'
                onChange={(e) =>
                  setFormData({ ...formData, jobUrl: e.target.value })}

              />
            </div>
            <div className="space-y-2">
              <Label htmlFor='tags'>Tags (coma-seperated) </Label>
              <Input placeholder="e.g., $100k - $150k" id='tags'
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })}

              />
            </div>
            <div className="space-y-2">
              <Label htmlFor='description'>Description </Label>
              <Textarea rows={3} placeholder="Brief description of the role" id='description'

                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })}

              />
            </div>
            <div className="space-y-2">
              <Label htmlFor='notes'>Notes </Label>
              <Textarea rows={4} placeholder="" id='notes'

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