import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import Product_return from "../../Components/Dashboard/Product_return/Product_return";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Product Return' />
        <Product_return />
      </MasterLayout>
    </>
  );
};

export default index;
