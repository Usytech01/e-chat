import { User } from "@/app/interfaces";
import Image from "next/image"
import React from "react"

type FriendProps = {
    user: User;
}
const Friends: React.FC<FriendProps> = ({user}) => {
    return(
        <li className="flex items-center gap-3 my-4">
            <Image
                src={user.profilePicture}
                alt='user picture'
                width={32}
                height={32}
                className="rounded-full cursor-pointer w-[32px] h-[32px] object-cover"
            />
            <span className="font-semibold">{user.username}</span>
        </li>
    )
}

export default Friends;