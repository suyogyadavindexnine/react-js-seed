import myImage from "../../../assets/images/demoImages/travelDemo.png";
import DemoComponent from "./DemoComponent";

const Travel = () => {
  const demoDesc = (
    <>
      <p>
        This is a demo based on kafka that demonstrates how to detect and react
        to real-time activity by users in a travel environment.
      </p>

      <p>
        The demo displays results for a search performed by a travel agent. The
        travel agent profile (shown on the right hand side) determines the kind
        of loyalty strategy to be used by the system.
      </p>

      <p>
        Based on the loyalty strategy, the appropriate kind of discounting or
        cashback reward is applied. This strategy could be rule-based or decided
        by an AI model trained on user behaviour.
      </p>
      <p>
        This strategy can be used to perform real-time decision making to
        maximize user retention, find competitor pricing, evaluate strategies by
        targeting specific personas, run campaigns and many other real-time
        interventions.
      </p>
    </>
  );

  return (
    <>
      <DemoComponent
        image={myImage}
        heading="Data in Motion: Travel Demo"
        demoDesc={demoDesc}
        demoLink={"https://dim-travel-demo.indexnine.com/"}
      />
    </>
  );
};

export default Travel;
