import Navvbar  from "./navbar";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navvbar/>
      <div className="m">
              <Sidebar/>

      </div>
    </div>
  )
}

export default Dashboard
