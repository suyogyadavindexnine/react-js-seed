import myImage from "../../../assets/images/demoImages/networkThreat.png";
import DemoComponent from "./DemoComponent";
import DemoHeader from './DemoHeader';
const NetworkThreatDemo = () => {
  const demoDesc = (
    <>
     <p>
      Indexnine worked closely with customer experts to perform UX research,
      secondary research, UX Design, UI development and consulting on APIs for
      this product.
    </p>
      <p>
        This demonstration showcases a visual analysis of network threats that
        are propagating in an geographically diverse environment.
      </p>

      <p>
        The UI is targeted towards a specific persona, the network analyst
        responsible for global communications for enterprise companies. This is
        a role that has to analyze network connections that were identified as
        threats and blocked.
      </p>

      <p>
        In most cases these activities are done as the threat is propagating so
        it is a very time sensitive workflow.
      </p>

      <p>
        The UI showcases an opinionated workflow to identify the threats as they
        progress and remediate them using the same interface. This UI saves
        incident responders hours of analysis time by visually representing the
        data from various log files. The ability to segment network activity by
        locations, departments and other criteria is critical to identify risky
        players and arrest the threat.
      </p>
    </>
  );

  const idxRole = (
    <p>
      Indexnine worked closely with customer experts to perform UX research,
      secondary research, UX Design, UI development and consulting on APIs for
      this product.
    </p>
  );

  return (
    <>
    <DemoHeader
    heading="Network threat identification and remediation"
    documentlink="http://cns-demo.indexnine.com/"
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

export default NetworkThreatDemo;
