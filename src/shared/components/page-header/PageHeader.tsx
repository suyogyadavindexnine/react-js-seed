import { FC } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Grid,
  SvgIconProps,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

interface PageHeaderProps {
  children?: React.ReactNode[];
  heading?: string;
  subHeading?: string;
  icon?: React.ReactElement<SvgIconProps>;
  breadcrumbs?: any[];
  value?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
  heading = '',
  subHeading = '',
  children,
  icon,
  value,
  breadcrumbs = [],
  ...rest
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation('lang');
  const handleBreadcrumbsRoute = (link) => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      rowSpacing={3}
      {...rest}
    >
      <Grid item xs={12} sm={12} md={'auto'}>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs?.map((breadcrumb) => {
            return (
              <Link
                underline={breadcrumb.route ? 'hover' : 'none'}
                variant="h3"
                component="h3"
                sx={{ cursor: breadcrumb.route ? 'pointer' : 'default' }}
                color="inherit"
                key={breadcrumb?.name}
              >
                <span onClick={() => handleBreadcrumbsRoute(breadcrumb.route)}>
                  {t(breadcrumb?.name)}
                </span>
              </Link>
            );
          })}
          <Typography variant="h3" component="h3" gutterBottom>
            {heading}
          </Typography>
        </Breadcrumbs>
        <Typography variant="subtitle2">{subHeading}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={'auto'}>
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="end"
          rowSpacing={3}
          columnSpacing={2}
          sx={{
            pb: 2
          }}
        >
          {children?.map((item, index) => {
            return (
              <Grid key={`header${index}`} item md={'auto'}>
                {item}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

PageHeader.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string
};
