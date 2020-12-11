import React from 'react';
import '../global.css';

import { Avatar } from './Avatar';

export default {
  title: 'Global Design System/Avatar',
  component: Avatar,
  argTypes: {},
};

const Template = (args) => <Avatar {...args} />;

export const Image = Template.bind({});
Image.args = {
  src:
    'https://images.unsplash.com/photo-1607456632560-ee7497954ab6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  alt: 'profile',
};

export const Text = Template.bind({});
Text.args = {
  alt: 'Wilson Staley',
  children: 'WS',
};

export const AltText = Template.bind({});
AltText.args = {
  alt: 'ZZ',
};
