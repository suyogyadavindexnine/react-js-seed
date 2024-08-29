import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import PersonIcon from '@mui/icons-material/Person';
import './avatar.stories.scss';

export default {
  title: 'Seed/Avatar',
  component: Avatar
} as Meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarWithIcon: Story = {
  args: {
    size: 'small',
    icon: <PersonIcon />
  }
};

export const AvatarWithImage: Story = {
  args: {
    src: 'https://mui.com/static/images/avatar/1.jpg'
  }
};

export const AvatarWithLetters: Story = {
  args: {
    children: 'AV'
  }
};

export const AvatarWithSizes: Story = {
  args: {
    className: 'avatarLarge'
  }
};
