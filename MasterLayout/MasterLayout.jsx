import SideBar from "../Components/Dashboard/Dashboard/SideBar";
import Sidebar_2 from "../Components/Dashboard/Dashboard/Sidebar_2";

const MasterLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      <div>{children}</div>
    </>
  );
};

export default MasterLayout;
