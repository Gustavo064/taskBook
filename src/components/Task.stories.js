// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import Task from './Task';


export default {
  component: Task,
  title: 'Task',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
   // Parameters used in Story at component level.
  // Learn more about parameters in https://storybook.js.org/docs/react/writing-stories/parameters
  parameters: { assets: ['designs/items.png'] }
  
};

const Template = (args) => <Task {...args} />;
const label = "id:1"
const title= "title:`This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!"
const defaultValue = {
  backgroundColor: 'red',
};
const groupId = 'GROUP-ID1';


export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
  
};


export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

//  export const LongTitle = Template.bind({});
//  LongTitle.args = {
//    task: {
//      ...Default.args.task,
//      title: longTitleString,
     
//    } };


export const  LongTitle = () => {
  return <Task task={ object('task',title, defaultValue, groupId, longTitleString)} />;
  
  
};