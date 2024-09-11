import myImage from "../../../assets/images/demoImages/snapAssess.png";
import DemoComponent from "./DemoComponent";
import DemoHeader from './DemoHeader';
const SnapAssess = () => {
  const demoDesc = (
    <>
      <p className="mt-0">
        <b>snap.assesst</b> is an AI based assessments platform that can be
        integrated into any learning management system or used in a standalone
        manner.
      </p>

      <div>
        <b>snap.assess</b> allows creation and administration of assessments for
        any topic. The workflow is as follows:
        <ol>
          <li>
            Gather content on which assessments should take place (Chapter)
          </li>
          <li>
            Build Units (sections) and Topics(concepts) out of the content.{" "}
          </li>
          <li>
            Design an assessment for units with questions about the topics.
            Create the assessment with this content.
          </li>
          <li>Generate a unique URL for the assessment.</li>
          <li>Use the URL to launch the assessment from any site.</li>
        </ol>
      </div>

      <div>
        <b>snap.assess</b> helps assessments in various scenarios:
        <ol>
          <li>Training Sales associates.</li>
          <li>Grading of understanding in colleges and schools.</li>
          <li>Training staff on tools and techniques.</li>
        </ol>
      </div>
      <div>
        With its <b>multimodal assessment capabiltiy</b>, snap.assess is unique
        in <b>providing feedback on audio, video and text</b> using video
        responses to questions.
      </div>
    </>
  );

  return (
    <>
    <DemoHeader
    heading="snap.assess: AI based assessments"
    documentlink="https://snap-assess-demo.indexnine.com/"
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

export default SnapAssess;
