import { FC } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Grid2 as Grid, SvgIconProps } from '@mui/material';

interface PageHeaderProps {
  heading?: string;
  subHeading?: string;
  buttonText?: string;
  icon?: React.ReactElement<SvgIconProps>;
  btnVariant?: 'contained' | 'outlined' | 'text';
  btnClick?: ((event: any) => void) | undefined;
  docs?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
  heading = '',
  subHeading = '',
  docs = '',
  buttonText = '',
  btnVariant,
  icon,
  btnClick,
  ...rest
}) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <Grid>
        <Typography variant="h3" component="h3" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle2">{subHeading}</Typography>
      </Grid>
      <Grid>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant={btnVariant}
          startIcon={icon}
          onClick={btnClick}
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};

PageHeader.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  docs: PropTypes.string
};
