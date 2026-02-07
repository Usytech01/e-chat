import { Users } from "@/app/interfaces";
import { MoreVert } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";
import type { Post, } from "@/app/interfaces";




type PostProps = {
    post: Post;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false)
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked);
    };
    return (
        <div className="w-full rounded-md shadow-md hover:scale-[1.025]">
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image
                            src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
                            alt="user picture"
                            width={32}
                            height={32}
                            className="w-[32px] h-[32px] rounded-full object-cover"
                        />

                        <span className="text-[15px] font-semibold mx-3">
                            {Users.filter((u) => u.id === post.userId)[0].username}{" "}
                        </span>
                        <span className="text-[12px]">{post.date}</span>
                    </div>
                    <div className="">
                        <MoreVert />
                    </div>
                </div>

                <div className="my-5">
                    <span className="">{post?.desc}</span>
                    <Image
                        src={post.photo}
                        alt="lagos_rail"
                        width={500}
                        height={500}
                    />

                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image
                            src="/assets/team/like.png"
                            onClick={likeHandler}
                            alt="like_image"
                            width={40}
                            height={40}
                            className="cursor-pointer w-[24px] w-[24px] mr-[5px]"
                        />
                        <Image
                            src="/assets/team/heart.jpg"
                            onClick={likeHandler}
                            alt="heart_image"
                            width={40}
                            height={40}
                            className="cursor-pointer w-[24px] w-[24px] mr-[5px]"
                        />
                        <span className="text [15px]">{like} People like it</span>
                    </div>
                    <div className="">
                        <span className="text-[15px]">{post.comment} comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;