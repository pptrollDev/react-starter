import React from 'react';
import * as $ from './styles';
import { ITableEmpty } from './type';

const TableEmpty = ({ label, src = '/icons/tableEmpty.svg' }: ITableEmpty) => {
  return (
    <$.Wrapper>
      <$.ImageWrapper>
        <img src={src} alt="tableEmpty" />
      </$.ImageWrapper>
      <$.LabelWrapper>{label}</$.LabelWrapper>
    </$.Wrapper>
  );
};
export default TableEmpty;
