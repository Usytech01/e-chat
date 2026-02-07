import Feed from "@/app/components/Layout/Feed";
import Rightbar from "@/app/components/Layout/Rightbar";
import Sidebar from "@/app/components/Layout/sidebar/Sidebar";
import Topbar from "@/app/components/Layout/Topbar";

const Home: React.FC = () => {
  return(
    <>
      <Topbar />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Rightbar />
      </main>
    </>
  )
}

export default Home;