import {
  Slider,
  Cardstructure,
  Commonstructure
} from '../../../shared/components/index';

const CommonSlider = () => {
  return (
    <>
      <Commonstructure
        titlename="Slider-Component"
        heading="Slider"
        subHeading="Slider Components with different types of properties"
        documentlink="https://mui.com/material-ui/react-slider/"
      />

      <Cardstructure
        cardheader="Basic Slider with different size"
        component={
          <>
            <Slider size="small" />
            <Slider size="medium" />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Slider with steps"
        component={
          <>
            <Slider marks step={10} size="small" />
            <Slider marks step={20} size="medium" />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Slider with minimum and maximum value"
        component={
          <>
            <Slider min={20} max={50} size="small" />
            <Slider min={10} max={80} size="medium" />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Slider with color primary and secondary"
        component={
          <>
            <Slider min={20} color="primary" size="small" />
            <Slider min={10} color="secondary" size="medium" />
          </>
        }
      />
    </>
  );
};

export default CommonSlider;
