import myImage from "../../../assets/images/demoImages/snapBrain.png";
import DemoComponent from "./DemoComponent";

const SnapBrain = () => {
  const demoDesc = (
    <>
      <p><b>snap.brain</b> makes it easy for end users in any organization to create their own AI assistants. It takes the complexity out of utilizing AI for productivity improvements.</p>

      <p>Using <b>snap.brain</b>, relevant information for an assistant can be fed into the model, allowing the AI to become a thought partner and provide valuable assistance to end users.</p>

      <p><b>snap.brain</b> works with a variety of models (commercial as well as open source), making it a fast, cost-effective and seamless way to bring AI into your environments.</p>

      <p><b>snap.brain</b> keeps data private and stores secrets securely, enabling end users to use company data safely to enhance the experience of the teams.</p>

      <p>Using <b>snap.brain</b>, you can do the following easily, no coding needed:</p>
      <ul>
        <li>Create chat assistants that know your context.</li>
        <li>Create Data analytics widgets you can ask questions to.</li>
        <li>Build an API over the model to expose your data for other systems to use.</li>
      </ul>

    </>
  );

  return (
    <>
      <DemoComponent
        image={myImage}
        heading="snap.brain: ProgressSelf Service AI"
        demoDesc={demoDesc}
        demoLink={"https://snap-brain.indexnine.com/"}
      />
    </>
  );
};

export default SnapBrain;
