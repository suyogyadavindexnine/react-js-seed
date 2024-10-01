import PropTypes from "prop-types";
import { Box, Tooltip, Avatar, CardMedia, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import UploadTwoToneIcon from "@mui/icons-material/UploadTwoTone";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import { Button, Card, Typography } from "../../../../shared/components/index";

const Input = styled("input")({
  display: "none",
});

// interface ProfileCoverProps {
//   user: UserData[];
// }

const AvatarWrapper = styled(Card)(
  ({ theme }) => `

    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`
);

const ButtonUploadWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      box-shadow: ${theme.colors.shadows.primary};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
        background: ${theme.colors.primary.dark};
      }
    }
`
);

const CardCover = styled(Card)(
  ({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`
);

const CardCoverAction = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
`
);
// = (profileCoverProps: ProfileCoverProps): JSX.Element
const ProfileCover = ({ user, handleFollowBtn }) => {
  // handleFollowBtn props is used for testing purpose

  // const handleFollowBtn = (data) => {
  //   console.log("Follow Button is clicked", data)
  // }

  return (
    <>
      <Box display="flex" mb={3}>
        <Tooltip arrow placement="top" title="Go back">
          <IconButton color="primary" sx={{ p: 2, mr: 2 }}>
            <ArrowBackTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Box>
          <Typography variant="h3" gutterBottom>
            Profile for {user.name}
          </Typography>
          <Typography variant="subtitle2">
            This is a profile page. Easy to modify, always blazing fast
          </Typography>
        </Box>
      </Box>
      <CardCover>
        {user?.coverImg ? <CardMedia image={user?.coverImg} /> : null}
        <CardCoverAction>
          <Input
            accept="image/*"
            id="change-cover"
            multiple
            type="file"
            data-testid="change-cover"
            onClick={() => handleFollowBtn("clicked!")}
          />
          <label htmlFor="change-cover">
            <Button
              btnText=" Change cover"
              startIcon={<UploadTwoToneIcon />}
              variant="contained"
            />
          </label>
        </CardCoverAction>
      </CardCover>
      <AvatarWrapper>
        {user?.name ? (
          <Avatar variant="rounded" alt={user?.name} src={user?.avatar} />
        ) : null}
        <ButtonUploadWrapper>
          <Input
            accept="image/*"
            id="icon-button-file"
            name="icon-button-file"
            type="file"
            data-testid="upload-btn"
            onClick={() => handleFollowBtn("clicked!")}
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span" color="primary">
              <UploadTwoToneIcon />
            </IconButton>
          </label>
        </ButtonUploadWrapper>
      </AvatarWrapper>
      <Box py={2} pl={2} mb={3}>
        <Typography gutterBottom variant="h4">
          {user?.name}
        </Typography>
        <Typography variant="subtitle2">{user?.description}</Typography>
        <Typography sx={{ py: 2 }} variant="subtitle2" color="text.primary">
          {user?.jobtitle} | {user?.location} | {user?.followers} followers
        </Typography>
        <Box
          display={{ xs: "block", md: "flex" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Button
              btnText="  Follow"
              className="follow-button"
              size="small"
              variant="contained"
              onClick={() => handleFollowBtn("clicked!")}
            />

            <Button
              btnText=" View website"
              size="small"
              sx={{ mx: 1 }}
              variant="outlined"
              onClick={() => handleFollowBtn("clicked!")}
            />

            <IconButton color="primary" sx={{ p: 0.5 }}>
              <MoreHorizTwoToneIcon />
            </IconButton>
          </Box>
          <Button
            btnText={`See all ${user?.followers} connections`}
            sx={{ mt: { xs: 2, md: 0 } }}
            size="small"
            variant="text"
            endIcon={<ArrowForwardTwoToneIcon />}
            onClick={() => handleFollowBtn("clicked!")}
          />
        </Box>
      </Box>
    </>
  );
};

ProfileCover.propTypes = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  user: PropTypes.object.isRequired,
};

export default ProfileCover;
