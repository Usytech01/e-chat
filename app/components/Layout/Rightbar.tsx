import Image from "next/image";
import Online from "./Online";
import { Users } from "@/app/interfaces";


const Rightbar: React.FC = () => {
    return(
        <div className="hidden lg:block w-[30vw] font-semibold overflow-hidden">
            <div className="pt-5 pr-5">
                <div className="flex items-center">
                    <Image
                    src="/assets/team/hennessyad.jpg"
                    alt="hennessyad"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] mr-[10px]"
                    />
                    <span className="text-[15px]">
                        <b>Agwabuma Owo</b> and <b>3 other friend</b> like this 
                    </span>
                </div>
                <div className="overflow-hidden rounded-md my-[30px]">
                    <Image
                    src="/assets/team/hennessyad.jpg"
                    alt="hennessyad"
                    width={500}
                    height={500}
                    className="w-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                </div>

                <h4 className="mb-[20px]">Online Friends</h4>
                <ul className="">
                    {Users.map((u) => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Rightbar;