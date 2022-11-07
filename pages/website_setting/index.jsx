import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import Website_setting_part from "../../Components/Dashboard/Website_setting/website_setting_part";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Website Setting' />
        <Website_setting_part />
      </MasterLayout>
    </>
  );
};

export default index;
