import { Helmet } from 'react-helmet-async';
import { PageTitleWrapper, PageTitle } from '../../../shared/components/index';

export const DemoHeader = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.titlename}</title>
      </Helmet>{' '}
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
    </>
  );
};

export default DemoHeader;