import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import Product_main from "../../Components/Dashboard/Product/Product_main";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Products' />
        <Product_main />
      </MasterLayout>
    </>
  );
};

export default index;
