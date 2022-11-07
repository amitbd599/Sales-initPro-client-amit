import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import Plugin_main from "../../Components/Dashboard/Plugin/Plugin_main";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Plugins' />
        <Plugin_main />
      </MasterLayout>
    </>
  );
};

export default index;
