import { Story, Meta } from '@storybook/react';
import * as Toast from './Toast';
import { Button } from '../button/Button';

export default {
  title: 'Seed/Toast',
  component: Toast.showSuccessMessage,
  argTypes: {}
} as Meta;

const StatefulToast = () => {
  return (
    <>
      <Button
        variant={'outlined'}
        btnText="Open Toast"
        onClick={() =>
          Toast.showSuccessMessage('success', {
            theme: 'dark',
            position: 'top-right'
          })
        }
      />
    </>
  );
};

const Template: Story<Toast.ToastProps> = (args) => <StatefulToast {...args} />;

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  message: 'Success Toast',
  severity: 'success'
};
