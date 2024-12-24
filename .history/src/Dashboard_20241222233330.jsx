import Navvbar  from "./navbar";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navvbar/>
      <div children>
              <Sidebar/>

      </div>
    </div>
  )
}

export default Dashboard
