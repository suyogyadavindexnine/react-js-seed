import myImage from '../../../assets/images/demoImages/cyberIncident.png';
import DemoComponent from './DemoComponent';
import DemoHeader from './DemoHeader';

const IotDemo = () => {
  const demoDesc = (
    <>
     <p>
      Indexnine worked closely with customer experts to perform UX research,
      secondary research, UX Design, UI development and consulting on APIs for
      this product.
    </p>
      <p>
        This demonstration showcases a workflow that greatly simplifies the
        detection and identification of threats propagating in an enterprise
        environment.
      </p>

      <p>
        The UI is targeted towards a specific persona, the cybersecurity
        incident responder. This is a role that has to analyze alerts raised by
        end point products and identify propagation across the enterprise. In
        most cases these activities are done as the threat is propagating so it
        is a very time sensitive workflow.
      </p>

      <p>
        The UI showcases an opinionated workflow to identify threats within
        endpoints as they progress and remediate them using the same interface.
        This UI saves incident responders hours of analysis time by visually
        representing the data from various log files.
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
    heading="Cyber incident response"
    documentlink="http://qh-internal.indexnine.com/"
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

export default IotDemo;
