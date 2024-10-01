import myImage from '../../../assets/images/demoImages/cyberSecurityDemo.png';
import DemoComponent from './DemoComponent';
import DemoHeader from './DemoHeader';
const CyberSecurityDemo = () => {
  const demoDesc = (
    <>
     <p>    The demo showcases our ability to perform UX research, secondary research
      and build an interface that targets user personas, looks and feels like
      the imagined visual design.</p>
      <p>
        This demonstration shows a single dashboard for all members in an
        organization. The dashboard is centered around cybersecurity test cases
        that are run across assets of the enterprise once every 48 hours. The
        specialty of this application is the ability to segment the data by
        categories and grouping that are configurable and flexible. It showcases
        a tag based approach to simplify reporting of cyber security threats and
        vulnerabilities across the enterprise.
      </p>
     
    </>
  );

  const idxRole = (
    <p>
      The demo showcases our ability to perform UX research, secondary research
      and build an interface that targets user personas, looks and feels like
      the imagined visual design.
    </p>
  );

  return (
    <> 
    <DemoHeader
    heading="Cybersecurity dashboard demo"
    documentlink="http://demo1.indexnine.com"
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

export default CyberSecurityDemo;
