import { Helmet } from 'react-helmet-async';
import { PageTitleWrapper, PageTitle } from '../index';

export const Commonstructure = (props) => {
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
        />
      </PageTitleWrapper>
    </>
  );
};

export default Commonstructure;
