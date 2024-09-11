import myImage from '../../../assets/images/demoImages/demo.png';
import DemoComponent from './DemoComponent';
import DemoHeader from './DemoHeader';

const Demo = () => {
  const demoDesc = (
    <>
      <p>
        This demo is a collection of some of the work done by Indexnine which we
        are proud of.
      </p>

      <p>
        The demos showcase our front-end and backend seed projects part of
        <b>(snap.core)</b>. The front end seed showcases all the widgets and
        components readily available including a best-practice web application
        ready for deployment.
      </p>

      <p>
        The backend seed consists of commonly used modules that are necessary
        for any SaaS application, including but not limited to: authentication,
        fine-grained authorization, notifications, logging, integrations and
        many more.
      </p>
    </>
  );

  return (
    <>
    <DemoHeader
    heading="Demos"
    documentlink="http://demos.indexnine.com"
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

export default Demo;
