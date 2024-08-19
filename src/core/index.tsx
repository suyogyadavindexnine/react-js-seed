import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <Box className="baselayout">{children || <Outlet />}</Box>;
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
