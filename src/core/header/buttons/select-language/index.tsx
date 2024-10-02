import { useTranslation } from "react-i18next";
import {
  Box,
  ListItemText,
  List,
  Menu,
  MenuItem,
  ListItemButton,
  Tooltip,
} from "@mui/material";
import { useRef, useState } from "react";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import { styled } from "@mui/material/styles";
const ListWrapper = styled(Box)(
  ({ theme }) => `
          .MuiTouchRipple-root {
              display: none;
          }
          
          .MuiListItem-root {
              transition: ${theme.transitions.create(["color", "fill"])};
              
              &.MuiListItem-indicators {
                  padding: ${theme.spacing(1, 2)};
              
                  .MuiListItemText-root {
                      .MuiTypography-root {
                          &:before {
                              height: 4px;
                              width: 22px;
                              opacity: 0;
                              visibility: hidden;
                              display: block;
                              position: absolute;
                              bottom: -10px;
                              transition: all .2s;
                              border-radius: '10px';
                              content: "";
                              background: ${theme.colors.primary.main};
                          }
                      }
                  }
  
                  &.active,
                  &:active,
                  &:hover {
                  
                      background: transparent;
                  
                      .MuiListItemText-root {
                          .MuiTypography-root {
                              &:before {
                                  opacity: 1;
                                  visibility: visible;
                                  bottom: 0px;
                              }
                          }
                      }
                  }
              }
          }
  `
);
function LangSelect() {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState(
    localStorage.getItem("language") || "English"
  );

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const changeLanguage = (lang: string, languagename: string) => {
    setLang(languagename);
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem("language", lang);
    setOpen(false);
  };
  return (
    <>
      <ListWrapper>
        <List>
          <ListItemButton
            classes={{ root: "MuiListItem-indicators" }}
            ref={ref}
            defaultValue="a"
            onClick={handleOpen}
          >
            <Tooltip arrow title="Select Language">
              <ListItemText
                primaryTypographyProps={{ noWrap: true }}
                primary={
                  <Box display="flex" alignItems="center">
                    {lang}
                    <Box display="flex" alignItems="center" pl={0.3}>
                      <ExpandMoreTwoToneIcon fontSize="small" />
                    </Box>
                  </Box>
                }
              />
            </Tooltip>
          </ListItemButton>
        </List>
      </ListWrapper>
      <Box sx={{ mr: 1 }}>
        <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
          <MenuItem
            sx={{ px: 3 }}
            onClick={() => changeLanguage("English", "English")}
          >
            English
          </MenuItem>
          <MenuItem
            sx={{ px: 3 }}
            onClick={() => changeLanguage("French", "French")}
          >
            French
          </MenuItem>
          {/* <MenuItem sx={{ px: 3 }}>Spanish</MenuItem>
          <MenuItem sx={{ px: 3 }}>Chinease</MenuItem> */}
        </Menu>
      </Box>
    </>
  );
}

export default LangSelect;
