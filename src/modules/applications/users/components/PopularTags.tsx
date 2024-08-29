import {
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListSubheader,
  ListItemText,
  Avatar,
  useTheme,
  styled
} from '@mui/material';
import React from 'react';
import { Card, Typography } from '../../../../shared/components/index';
import { PopularTagsDetails } from '../models/UserData';

const ListWrapper = styled(List)(
  () => `
      .MuiListItem-root {
        border-radius: 0;
        margin: 0;
      }
`
);

function PopularTags({ tags, groups }: PopularTagsDetails) {
  const theme = useTheme();

  console.log(groups);
  console.log(tags);
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="Popular Tags" />
      <Divider />
      <ListWrapper disablePadding>
        {tags?.map((tag) => (
          <React.Fragment key={tag}>
            <ListItem
              sx={{
                color: `${theme.colors.primary.main}`,
                '&:hover': { color: `${theme.colors.primary.dark}` }
              }}
              button
            >
              <ListItemText primary={tag} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
        <ListSubheader>
          <Typography sx={{ py: 1.5 }} variant="h4" color="text.primary">
            Groups
          </Typography>
        </ListSubheader>
        <Divider />
        {groups?.map((group) => (
          <React.Fragment key={group.title}>
            <ListItem button>
              <ListItemAvatar>
                {group.path && (
                  <Avatar sx={{ width: 38, height: 38 }} src={group.path} />
                )}
                {group.logo && (
                  <Avatar
                    sx={{
                      width: 38,
                      height: 38,
                      background: `${theme.colors.info.main}`,
                      color: `${theme.palette.info.contrastText}`
                    }}
                  >
                    {group.logo}
                  </Avatar>
                )}
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'h5',
                  color: `${theme.colors.alpha.black[100]}`
                }}
                primary={group.title}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </ListWrapper>
    </Card>
  );
}

export default PopularTags;
