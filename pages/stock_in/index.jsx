import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import Stock_in_part from "../../Components/Dashboard/Stock_in/Stock_in_part";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Stock' />
        <Stock_in_part />
      </MasterLayout>
    </>
  );
};

export default index;
