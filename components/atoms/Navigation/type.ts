import React from 'react';
import { IApplication } from '../Application/type';

export interface INavigation {
  userName: string;
  hospitalName: string;
  application?: IApplication;
  onClick: (value: string) => void;
  navigations: INavigations[];
  children?: React.ReactNode;
}

export interface INavigations {
  name: string;
  isFocus: boolean;
  src?: {
    default: string;
    focus: string;
  };
  href: string;
  children?: INavigations[];
}
