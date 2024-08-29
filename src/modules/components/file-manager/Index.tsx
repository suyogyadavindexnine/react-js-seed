import { Box } from '@mui/material';
import Cardstructure from 'src/shared/components/common-structure/CardStructure';
import FileManager from './FileManager';

const Index = () => {
  return (
    <Box className="cardBoxFileManager">
      <Cardstructure
        cardheader="File Manager"
        component={
          <>
            <FileManager />
          </>
        }
      />
    </Box>
  );
};

export default Index;
