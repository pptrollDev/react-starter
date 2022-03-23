import React from 'react';
import * as $ from './styles';
import { IContainer } from './type';

const Container = ({ children }: IContainer) => {
  return <$.Wrapper>{children}</$.Wrapper>;
};

export default Container;
