import React from 'react';
import * as $ from './styles';
import { ITooltip } from './type';

const Tooltip = ({ label }: ITooltip) => {
  return (
    <$.Wrapper>
      <img src="/icons/tooltip.svg" alt="tooltip" />
      <$.SquareWrapper className="rec"></$.SquareWrapper>
      <$.labelWrapper className="text">{label}</$.labelWrapper>
    </$.Wrapper>
  );
};

export default Tooltip;
