import { Posts } from "@/app/interfaces";
import Share from "./Share";
import Post from "./PostCard";


const Feed: React.FC = () => {
    return(
        <div className="w-[100vw] md:w-[75vw] lg:w-[45vw] px-5 py-6">
            <Share />
            {Posts.map(p => (
                <Post key={p.id} post={p}/>
            ))}
        </div>
    );
}

export default Feed;