import React from 'react';
import Checkbox from './Checkbox'; 


export default {
  title: 'Checkbox',
  component: Checkbox,
};


export const Default = () => <Checkbox/>;

export const CheckboxWithLabel = () => <Checkbox label="Text" />;

//file