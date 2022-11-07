import { Fragment } from "react";
import AdminBanner from "../Components/Dashboard/Dashboard/AdminBanner";
import MenuBar from "../Components/Dashboard/Dashboard/MenuBar";
import TotalLead from "../Components/Dashboard/Dashboard/TotalLead";
import MasterLayout from "../MasterLayout/MasterLayout";

const index = () => {
  return (
    <Fragment>
      <MasterLayout>
        <MenuBar name='Admin Dashboard' />
        <AdminBanner />
        <TotalLead />
        {/* <ChartJs /> */}
      </MasterLayout>
    </Fragment>
  );
};

export default index;
