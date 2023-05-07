import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

export default function UserHome({ userData }) {
  return (
    <div className="">
      <div className="">
        <div style={{display: 'flex'}}>
          <Sidebar/>
          <Dashboard/>
          {/* Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button> */}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
