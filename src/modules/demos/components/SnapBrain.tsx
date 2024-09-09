import myImage from "../../../assets/images/demoImages/snapRecruit.png";
import DemoComponent from "./DemoComponent";

const SnapBrain = () => {
  const demoDesc = (
    <>
      <p>
        <b>snap.recruit</b> is a recruitment automation solution that showcases
        a multi-tenant product with complex workflows across the organization.
      </p>

      <p>
        <b>snap.recruit</b> showcases our frontend and backend accelerator
        projects which are part of <b>(snap.core). snap.core</b> contains
        ready-made productized SaaS application modules for modern SaaS
        applications. These modules are tested and ready for use. Being
        pluggable, they can be turned on or off depending on need. However, the
        advantage of using <b>snap.core</b> is a best-practice led SaaS
        application out of the box which can greatly improve time-to-market.
      </p>

      <p>
        <b>snap.core</b> is available as a value add to all our customers
        (either completely or module-wise). <b>snap.core</b> represents years of
        experience building SaaS products that scale and more than 12 man months
        of engineering efforts.
      </p>
    </>
  );

  return (
    <>
      <DemoComponent
        image={myImage}
        heading="(snap.recruit) Recruitment Automation"
        demoDesc={demoDesc}
      />
    </>
  );
};

export default SnapBrain;
