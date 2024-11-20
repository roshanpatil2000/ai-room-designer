import { Textarea } from "@/components/ui/textarea"
import React from 'react'

function AdditionalReq({additionalRequirtementInput}) {
  return (
    <div className="mt-5">
      <label className='text-slate-600'>Add Additional Requirements (optional)</label>
      <Textarea className='mt-2' placeholder="Type your message here." onChange={(e) => additionalRequirtementInput(e.target.value)} />
    </div>
  )
}

export default AdditionalReq