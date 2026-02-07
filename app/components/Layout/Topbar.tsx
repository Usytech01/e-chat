import Link from "next/link";
import {Person, Search, Chat, Notifications} from '@mui/icons-material'
import Image from 'next/image'

const Topbar: React.FC = () => {
    return(
        <header className="h-[67px] bg-[#1877F2] font-semibold sticky top-0 z-50">
            <nav className="h-full w-full flex justify-between items-center p-4 text-white">
                <Link href="/">
                    <h1 className="text-white text-2xl">eCHAT</h1>
                </Link>
                <div className="w-[30vw]">
                    <div className="h-[40px] hidden md:flex bg-white px-4 rounded-full flex items-center">
                        <Search className="mr-2 text-black"/>
                        <input type="text" name="" placeholder="Search for friends and posts" 
                        className="h-full w-full px-2 focus-outline:none text-black bg-transparent"/>
                    </div>
                </div>
                <div className="flex gap-6">
                        <div className="flex gap-4">
                            <Link href="/">
                            <h2>HOME</h2>
                            </Link>
                            <Link href="/">
                            <h2>PROFILE</h2>
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 hidden md:flex">
                            <div className="relative cursor-pointer">
                                <Person sx={({fontSize: 30})}/>
                                <span className="text-xs flex items-center justify-center absolute bg-[red] w-[15px] h-[15px] -top-[5px] -right-[5px] rounded-full">2</span>
                            </div>
                            <div className="relative cursor-pointer">
                                <Chat />
                                <span className="text-xs flex items-center justify-center absolute bg-[red] w-[15px] h-[15px] -top-[5px] -right-[5px] rounded-full">2</span>
                            </div>
                            <div className="relative cursor-pointer">
                                <Notifications/>
                                <span className="text-xs flex items-center justify-center absolute bg-[red] w-[15px] h-[15px] -top-[5px] -right-[5px] rounded-full">2</span>
                            </div>
                            <Link href="/">
                            <Image src="/assets/team/girl.png" alt="profile log" width={30} height={30}
                            className="w-[30] h-[30] rounded-full object-cover ml-2"
                            />
                            </Link>
                        </div>
                    </div>
            </nav>
        </header>
    )
}

export default Topbar;