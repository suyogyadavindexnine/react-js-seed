import myImage from "../../../assets/images/demoImages/snapBrain.png";
import DemoComponent from "./DemoComponent";
import DemoHeader from './DemoHeader';
const SnapBrain = () => {
  const demoDesc = (
    <>
      <p>snap.<b>brain</b> makes it easy for end users in any organization to create their own AI assistants. It takes the complexity out of utilizing AI for productivity improvements.</p>

      <p>Using snap.<b>brain</b>, relevant information for an assistant can be fed into the model, allowing the AI to become a thought partner and provide valuable assistance to end users.</p>

      <p>snap.<b>brain</b> works with a variety of models (commercial as well as open source), making it a fast, cost-effective and seamless way to bring AI into your environments.</p>

      <p>snap.<b>brain</b> keeps data private and stores secrets securely, enabling end users to use company data safely to enhance the experience of the teams.</p>

      <p>Using snap.<b>brain</b>, you can do the following easily, no coding needed:</p>
      <ol>
        <li>Create chat assistants that know your context.</li>
        <li>Create Data analytics widgets you can ask questions to.</li>
        <li>Build an API over the model to expose your data for other systems to use.</li>
      </ol>

    </>
  );

  return (
    <>
    <DemoHeader
    heading="snap.brain: ProgressSelf Service AI"
    documentlink="https://snap-brain.indexnine.com/"
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

export default SnapBrain;
