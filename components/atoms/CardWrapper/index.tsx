import React from 'react';
import * as $ from './styles';
import { ICardWrapper } from './type';

const CardWrapper = ({ children, borderRadius = '1rem' }: ICardWrapper) => {
  return <$.Wrapper borderRadius={borderRadius}>{children}</$.Wrapper>;
};
export default CardWrapper;
