import React from 'react';
import { Story } from '@storybook/react';
import Cam, { CamProps } from './Cam';

export default {
  title: 'components/cam/Cam',
  component: Cam,
};

const Template: Story<CamProps> = ({ ...args }) => <Cam {...args} />;

export const DefaultCam = Template.bind({});
DefaultCam.args = {
  onPictureSnap: (data) => {
    console.log(data);
  },
};
