import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/material';

export interface TabMenuProp {
  activeTab?: number;
  dataLabelText: string;
  dataSelectedText?: string;
  isInDashboardActiveMenu?: boolean;
  isInDashboardInternalExternalMenu?: boolean;
  isQuestionBankActions?: boolean;
  isQuestionBankQuestions?: boolean;
  dropDownEnabled?: boolean;
  dataTabMenuOption: { id: string; label: string }[];
  handleOnChange?: (tabId: { id: string; label: string }) => void;
}

export const TabMenu = ({
  dataLabelText,
  dataSelectedText,
  dataTabMenuOption,
  activeTab,
  handleOnChange,
  isInDashboardActiveMenu = false,
  isInDashboardInternalExternalMenu = false,
  isQuestionBankActions = false,
  isQuestionBankQuestions = false,
  dropDownEnabled = false
}: TabMenuProp) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (menu: string) => {
    setAnchorEl(null);
  };

  const handleChange = (newValue: { id: string; label: string }) => {
    if (handleOnChange) {
      handleOnChange(newValue);
    }
    handleClose(newValue.id);
  };

  return (
    <Box className="flex-basic-space-between active-tab-box cursorPointer">
      <Box className="active-in-last" sx={{ mr: 1 }}>
        {dataLabelText}
      </Box>
      <Box
        className={
          isQuestionBankActions && dropDownEnabled
            ? 'question-bank-actions-box-enabled'
            : isQuestionBankActions && !dropDownEnabled
            ? 'question-bank-actions-box-disabled'
            : isQuestionBankQuestions
            ? 'question-bank-questions-box'
            : isInDashboardActiveMenu
            ? 'dashboard-active-menu'
            : isInDashboardInternalExternalMenu
            ? 'dashboard-internal-external-menu'
            : 'active-in-last-menu'
        }
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={
          isQuestionBankActions && !dropDownEnabled ? () => {} : handleClick
        }
      >
        <Box className="active-in-last-option-box">
          <Box
            className={
              isQuestionBankActions && dropDownEnabled
                ? 'question-bank-actions-enabled'
                : isQuestionBankActions && !dropDownEnabled
                ? 'question-bank-actions-disabled'
                : isQuestionBankQuestions
                ? 'question-bank-questions'
                : isInDashboardActiveMenu
                ? 'dashboard-active-option'
                : isInDashboardInternalExternalMenu
                ? 'dashboard-internal-external-option-box'
                : 'last-active-option'
            }
          >
            {dataSelectedText}
          </Box>

          <svg
            className="chevron-down"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 8L10 12L6 8"
              stroke={
                isQuestionBankActions && dropDownEnabled
                  ? '#2d5bff'
                  : isQuestionBankQuestions
                  ? '#ffffff'
                  : '#333333'
              }
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {dataTabMenuOption?.map((tabItem, idx) => (
          <MenuItem
            key={`tab_menu_idx_${idx}`}
            onClick={() => handleChange(tabItem)}
          >
            {tabItem.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
