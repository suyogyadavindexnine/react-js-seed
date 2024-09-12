import myImage from "../../../assets/images/demoImages/snapRecruit.png";
import DemoComponent from "./DemoComponent";
import DemoHeader from './DemoHeader';
const SnapRecruit = () => {
  const demoDesc = (
    <>
      <p>
        snap.<b>recruit</b> is a recruitment automation solution that showcases
        a multi-tenant product with complex workflows across the organization.
      </p>

      <p>snap.<b>recruit</b> showcases our frontend and backend accelerator
        projects which are part of (snap.<b>core</b>). snap.<b>core</b> contains
        ready-made productized SaaS application modules for modern SaaS
        applications. These modules are tested and ready for use. Being
        pluggable, they can be turned on or off depending on need. However, the
        advantage of using snap.<b>core</b> is a best-practice led SaaS
        application out of the box which can greatly improve time-to-market.
      </p>

      <p>
        snap.<b>core</b> is available as a value add to all our customers
        (either completely or module-wise). snap.<b>core</b> represents years of
        experience building SaaS products that scale and more than 12 man months
        of engineering efforts.
      </p>
    </>
  );

  return (
    <>
     <DemoHeader
    heading="snap.recruit: Recruitment Automation"
    documentlink="https://snap-recruit-demo.indexnine.com"
    showDocumentationText={false}
    showButton={false}
    demoButton={true}
    />
      <DemoComponent
        image={myImage}
        demoDesc={demoDesc}
      />
    </>
  );
};

export default SnapRecruit;
