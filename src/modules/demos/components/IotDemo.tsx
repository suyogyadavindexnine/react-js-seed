import myImage from '../../../assets/images/demoImages/iotDemo.png';
import DemoComponent from './DemoComponent';

const IotDemo = () => {
  const demoDesc = (
    <>
      <p>
        This demonstration showcases an admin interface for an air purifier
        product that is deployed in different locations. Indexnine built the IOT
        data collector, integrations, the analytics engine and the admin
        interface for this product. The product is a commercial air purifier
        targeted towards large spaces such as schools, hotels and convention
        centers. The product has various features including cleaning wildfire
        smoke, detecting vaping in schools.
      </p>
    </>
  );

  const idxRole = (
    <p>
      Indexnine is the sole technical partner for this customer. The demo
      showcases our ability to imagine, architect and build digital products on
      the cloud in an IOT environment.
    </p>
  );

  return (
    <>
      <DemoComponent
        image={myImage}
        heading="IOT Dashboard"
        demoDesc={demoDesc}
        idxRole={idxRole}
        demoLink={'http://iot-demo.indexnine.com/'}
      />
    </>
  );
};

export default IotDemo;
