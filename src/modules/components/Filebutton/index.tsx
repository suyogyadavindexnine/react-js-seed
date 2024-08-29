import { FILE_TYPES } from './../../../shared/components/file-button/FileButton';
import {
  Commonstructure,
  Cardstructure,
  FileButton
} from '../../../shared/components/index';

const Filebutton = () => {
  return (
    <>
      <Commonstructure
        titlename="File button-Component"
        heading="File button"
        subHeading="File button Components with different types of properties"
        documentlink="https://mui.com/material-ui/react-button/"
      />
      <Cardstructure
        cardheader="Upload file button"
        component={
          <>
            <FileButton
              fileType={FILE_TYPES}
              variant="contained"
              onChange={(files) => {
                console.log(files);
              }}
              label="upload"
              isMultipleFile={false}
            />
          </>
        }
      />
    </>
  );
};

export default Filebutton;
