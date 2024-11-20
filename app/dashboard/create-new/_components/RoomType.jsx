import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function RoomType({selectedRoomvalue}) {
    return (
        <div className='flex  flex-col gap-3'>
            <label className='text-slate-600 '>Select Room Type *</label>
            <Select onValueChange={(Value) => selectedRoomvalue(Value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Room Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Room Type</SelectLabel>
                        <SelectItem value="Living Room">Living Room</SelectItem>
                        <SelectItem value="Bedroom">Bedroom</SelectItem>
                        <SelectItem value="Kitchen">Kitchen</SelectItem>
                        <SelectItem value="Office">Office</SelectItem>
                        <SelectItem value="Bathroom">Bathroom</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default RoomType