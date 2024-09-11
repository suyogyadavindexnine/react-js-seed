import myImage from "../../../assets/images/demoImages/cyberThreat.png";
import DemoComponent from "./DemoComponent";
import DemoHeader from './DemoHeader';
const CyberThreat = () => {
  const demoDesc = (
    <>
     <p>
      Indexnine worked closely with customer experts to learn the domain,
      perform UX research, secondary research, UX Design, UI development and
      consulting on APIs for this product.
    </p>
      <p>
        This demonstration showcases a dashboard with data collated from various
        sources to form a cyber security dashboard.
      </p>

      <p>
        The product showcases an Extended Detection and Response (XDR) dashboard
        for cybersecurity. The dashboard helps organizations detect and respond
        to threats across their IT environment.
      </p>

      <p>
        The dashboard is a collation of different identified incidents and
        specific analysis of the incidents against public and private security
        databases. E.g malicious URLs or identified Phishing URLs.
      </p>

      <p>
        The ability of the user to view important security information and drill
        down with timelines and playbooks for remediation is a valuable resource
        in security.
      </p>
    </>
  );

  const idxRole = (
    <p>
      Indexnine worked closely with customer experts to learn the domain,
      perform UX research, secondary research, UX Design, UI development and
      consulting on APIs for this product.
    </p>
  );

  return (
    <>
      <DemoHeader
    heading="Cyber threat dashboard"
    documentlink="http://qh-xdr-internal.indexnine.com"
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

export default CyberThreat;
