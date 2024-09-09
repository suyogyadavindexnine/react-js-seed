import myImage from "../../../assets/images/demoImages/fintech.png";
import DemoComponent from "./DemoComponent";

const Travel = () => {
  const demoDesc = (
    <>
      <p>
        This is a demo based on kafka that demonstrates how to detect and use
        user intervention for smooth transactions in a fintech environment.
      </p>

      <p>
        The demo displays a stream of transactions being performed (Generate
        transactions). The system showcases identifying anomalies (Different
        location, Larger transaction amount) derived from a user profile
        (boundaries of transactions performed regularly by the customer)
      </p>

      <p>
        Anomalies identified are rejected and an immediate notification is sent
        to the customer (demonstrated by SMS). The customer can Accept or Reject
        and set up a temporary approval for the transaction or for a time
        period.
      </p>
      <p>
        This demo showcases a real-time stream processing use case for Fintech
        to combat fraudulent transactions by involving the customer directly.
      </p>
    </>
  );

  return (
    <>
      <DemoComponent
        image={myImage}
        heading="Data in Motion: Fintech demo"
        demoDesc={demoDesc}
        demoLink={"https://dim-fintech-demo.indexnine.com/"}
      />
    </>
  );
};

export default Travel;