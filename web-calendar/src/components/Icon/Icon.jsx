import React from 'react';
import styled, { css } from 'styled-components';
import Icon from './style';



const CustomIcon = ({ src, style }) => {
  return <Icon src={src} style={style}/>;
};

export default CustomIcon;