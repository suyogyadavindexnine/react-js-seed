import {
  CircularProgress,
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';

const Circularprogress = () => {
  return (
    <>
      <Commonstructure
        titlename="circular - progress"
        heading="circular progress"
        subHeading="circular progress Components with different types of properties"
        documentlink="https://mui.com/material-ui/api/circular-progress/"
      />
      <Cardstructure
        cardheader="Basic circular progress"
        component={
          <>
            <CircularProgress />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic circular progress with colors"
        component={
          <>
            <CircularProgress color="error" />
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic circular progress with size"
        component={
          <>
            <CircularProgress color="error" size={20} />
            <CircularProgress color="secondary" size={30} />
            <CircularProgress color="success" size={40} />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic circular progress with thickness"
        component={
          <>
            <CircularProgress color="error" thickness={1.2} />
            <CircularProgress color="secondary" thickness={2.0} />
            <CircularProgress color="success" thickness={3.1} />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic circular progress with values"
        component={
          <>
            <CircularProgress color="error" variant="determinate" value={20} />
            <CircularProgress
              color="secondary"
              variant="determinate"
              value={40}
            />
            <CircularProgress
              color="success"
              variant="determinate"
              value={80}
            />
          </>
        }
      />
    </>
  );
};

export default Circularprogress;
