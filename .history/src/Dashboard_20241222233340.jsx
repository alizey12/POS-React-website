import Navvbar  from "./navbar";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navvbar/>
      <div className="mt-10">
              <Sidebar/>

      </div>
    </div>
  )
}

export default Dashboard
