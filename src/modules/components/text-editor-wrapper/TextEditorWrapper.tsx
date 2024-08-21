import { useMemo } from 'react';
import { Box } from '@mui/material';
import {
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';
import TextEditor from 'src/shared/components/text-editor/TextEditor';

const TextEditorWrapper = () => {
  //Constants
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
          ],
          ['link'],
          [{ color: [] }, { background: [] }],
          ['clean']
        ]
      }
    }),
    []
  );

  //method
  const handleOnChange = (event) => {
    // console.log('texteditor:-----', event);
  };

  return (
    <>
      <Commonstructure
        titlename="Text-Editor"
        heading="Text Editor"
        subHeading="Text Editor Components with different types of properties"
        documentlink="https://www.npmjs.com/package/react-quill?activeTab=readme"
      />

      <Cardstructure
        cardheader="Text Editor"
        component={
          <>
            <Box sx={{ mb: 5 }}>
              <TextEditor
                onChangeText={handleOnChange}
                textEditorHeight="150px"
                textEditorControls={modules}
              ></TextEditor>
            </Box>
          </>
        }
      />
    </>
  );
};

export default TextEditorWrapper;
