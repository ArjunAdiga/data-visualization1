import NavBar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import MainDashboard from "./MainDashboard"


const Dashboard = () => {
  return (
    <>
    <div>
      <NavBar/>                    
      <div className="flex items-start flex-row ">

      <Sidebar/>
      <MainDashboard/>
      </div>
    </div>
    </>
  )
}

export default Dashboard