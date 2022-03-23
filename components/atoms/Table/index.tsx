import React from 'react';
import * as $ from './styles';
import { ITable } from './type';

const Table = ({ children }: ITable) => {
  return <$.Table>{children}</$.Table>;
};
export default Table;
