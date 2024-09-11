import { Helmet } from 'react-helmet-async';
import { PageTitleWrapper, PageTitle } from '../../../shared/components/index';

export const DemoHeader = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.titlename}</title>
      </Helmet>{' '}
      <div style={{ position: 'sticky', top: '62px', zIndex: 10 }}>
        <PageTitleWrapper>
          <PageTitle
            heading={props.heading}
            subHeading={props.subHeading}
            docs={props.documentlink}
            showDocumentationText={props.showDocumentationText}
            demoButton={props.demoButton}
            showButton={props.showButton}
          />
        </PageTitleWrapper>
      </div>
    </>
  );
};

export default DemoHeader;
