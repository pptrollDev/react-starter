import React from 'react';
import * as $ from './styles';
import { INotification } from './type';

const Notification = ({ label, type }: INotification) => {
  return (
    <$.Wrapper>
      <div>
        <img src="/icons/check.svg" alt="iconCheck" />
        {label}
      </div>
    </$.Wrapper>
  );
};

export default Notification;
