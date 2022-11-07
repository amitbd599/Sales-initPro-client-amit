import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import Plugins_part from "../../Components/Dashboard/Plugin_details/Plugins_part";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Orders' />
        <Plugins_part />
      </MasterLayout>
    </>
  );
};

export default index;
