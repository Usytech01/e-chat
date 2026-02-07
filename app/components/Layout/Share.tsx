import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import Image from "next/image";

const Share: React.FC = () => {
    return(
        <div className="w-[100%] h-[170px] rounded-md shadow-md">
            <div className="p-10px">
                <div className="pt-4 flex items-center">
                    <Image
                    src="/assets/team/girl.png"
                    alt="lady pics"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] object-cover rounded-full mr-10"
                    />
                    
                    <input type="text" placeholder="Post for your friends to see." id="" className="font-semibold focus:outline-none" />
                </div>

                <hr className="mt-4 border" />

                <div className="flex items-center justify-between m-5">
                    <label htmlFor="file" className="flex items-center cursor-pointer ">
                        <PermMedia htmlColor="tomato" className="font-bold mr-3"/>
                        <span className="text-[14px] font-bold">Photo or Video</span>
                        <input 
                            type="file"
                            style={{display: "none"}}
                            id="file"
                            accept=".png, .jpeg, .jpg" 
                        />
                    </label>

                    <button className="border-none text-[12px] p-[8px] rounded-md text-white cursor-pointer bg-[green]" type="button">Share</button>

                    <div className="hidden sm:flex">
                        <Label htmlColor="green"/>
                        <span className="">Tag</span>
                    </div>
                    <div className="hidden sm:flex">
                        <Room htmlColor="blue"/>
                        <span className="">Tag</span>
                    </div>
                    <div className="hidden sm:flex">
                        <EmojiEmotions htmlColor="goldenrod"/>
                        <span className="">Feelings</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Share;