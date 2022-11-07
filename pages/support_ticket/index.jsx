import MenuBar from "../../Components/Dashboard/Dashboard/MenuBar";
import Support_ticket_part from "../../Components/Dashboard/Support_ticket/Support_ticket_part";
import MasterLayout from "../../MasterLayout/MasterLayout";

const index = () => {
  return (
    <>
      <MasterLayout>
        <MenuBar name='Support Ticket' />
        <Support_ticket_part />
      </MasterLayout>
    </>
  );
};

export default index;
