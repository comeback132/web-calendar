import React from 'react';
import CustomInput from './CustomInput';

export default {
  title: 'CustomInput',
  component: CustomInput,
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    filled: { control: 'boolean' },
    showPasswordToggle: { control: 'boolean' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password'] 
      }
    },
  },
};

const Template = (args) => <CustomInput {...args} />;

export const Username = Template.bind({});
Username.args = {
  placeholder: 'Enter your username', 
  label: 'Username*', 
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Enter your password', 
  label: 'Password*', 
  type: 'password', 
};

export const UsernameError = Template.bind({});
UsernameError.args = {
  placeholder: 'Enter your password',
  label: 'Username*',
  error: true,
};

export const PasswordError = Template.bind({});
PasswordError.args = {
  placeholder: 'Enter your password',
  label: 'Password*',
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Enter your password',
  label: 'Password*',
  disabled: true,
};

export const PasswordDisabled = Template.bind({});
PasswordDisabled.args = {
  placeholder: 'Enter your password',
  label: 'Password*',
  disabled: true,
};

export const UsernameDisabled = Template.bind({});
UsernameDisabled.args = {
  placeholder: 'Enter your username',
  label: 'Username*',
  disabled: true,
};

export const Active = Template.bind({});
Active.args = {
  placeholder: 'Enter your password',
  label: 'Password*',
  active: true,
};

export const Filled = Template.bind({});
Filled.args = {
  placeholder: 'Enter your password',
  label: 'Password*',
  filled: true,
};

export const WithPasswordToggle = Template.bind({});
WithPasswordToggle.args = {
  placeholder: 'Enter your password',
  label: 'Password*',
  showPasswordToggle: true,
};

export const WithPasswordToggleAndFilled = Template.bind({});
WithPasswordToggleAndFilled.args = {
  placeholder: 'Enter your password',
  label: 'Password*',
  showPasswordToggle: true,
  filled: true,
};


//file