import React, { useState } from 'react';
import { Box } from '@mui/material';

import {
  Button,
  SingleOrMultipleUpload,
  Typography
} from 'src/shared/components/index';
import { FilePreviewType } from 'src/shared/components/upload/services/singleOrMultipleUploadInterface';

interface UploadProps {
  isMultipleUpload: boolean;
}

const Upload = ({ isMultipleUpload }: UploadProps) => {
  // State Variables
  const [files, setFiles] = useState([] as FilePreviewType[]);
  const [previousFiles, setPreviousFiles] = useState([] as FilePreviewType[]);

  // Methods
  const setSingleData = (data: any) => {
    setFiles([data]);
  };

  const setMultipleData = (
    newFiles: FilePreviewType[],
    oldFiles: FilePreviewType[]
  ) => {
    setPreviousFiles(oldFiles);
    setFiles([...newFiles, ...oldFiles]);
  };

  return (
    <Box>
      <Typography variant="h4">{`${
        isMultipleUpload ? 'Multiple' : 'Single'
      } Upload Variations`}</Typography>
      <Box sx={{ my: 3 }}>
        <SingleOrMultipleUpload
          isMultiple={isMultipleUpload}
          acceptedFileFormat={['image/jpeg', 'image/png', 'image/jpg']}
          uploadedFiles={previousFiles}
          maxFileSize={10000000}
          setSingleData={setSingleData}
          setMultipleData={setMultipleData}
        >
          <Button variant="contained" btnText="Upload" />
        </SingleOrMultipleUpload>
      </Box>
      <Box sx={{ my: 3 }}>
        <SingleOrMultipleUpload
          isMultiple={isMultipleUpload}
          acceptedFileFormat={['image/jpeg', 'image/png', 'image/jpg']}
          uploadedFiles={previousFiles}
          maxFileSize={10000000}
          setSingleData={setSingleData}
          setMultipleData={setMultipleData}
        >
          <Box className="fileUploadContainer cursorPointer">
            <Box sx={{ p: 7 }} className="flex-basic-center">
              <Typography variant="body1">
                Drag 'n' drop some files here, or click to select files
              </Typography>
            </Box>
          </Box>
        </SingleOrMultipleUpload>
      </Box>
      <Typography variant="h5">Uploaded Files</Typography>
      <Box>
        {files?.length > 0 ? (
          <Box>
            {files?.map((item: FilePreviewType, index: number) => (
              <p key={index}>{item?.name}</p>
            ))}
          </Box>
        ) : (
          <Box>No Files Uploaded</Box>
        )}
      </Box>
    </Box>
  );
};

export default Upload;
