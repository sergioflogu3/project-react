import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './components/modal';

export default {
    title: 'Example/Modal',
    component: Modal,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Modal>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof Modal> = () => <Modal />;

