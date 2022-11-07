import Bulk_SMS from "../../Components/Dashboard/Bulk_sms/Bulk_SMS";
import Product_Information from "../../Components/Dashboard/Bulk_sms/Product_Information";
import STARTSend_SMS from "../../Components/Dashboard/Bulk_sms/STARTSend_SMS";
import Total_Lead from "../../Components/Dashboard/Bulk_sms/Total_Lead";
import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Bulk SMS' />
        <Bulk_SMS />
        <Total_Lead />
        <STARTSend_SMS />
        <Product_Information />
      </MasterLayout>
    </>
  );
};

export default index;
