import React from 'react';
import * as $ from './styles';
import { IHeader } from './type';

const Header = ({ navigations, title, subTitle, src }: IHeader) => {
  return (
    <$.Wrapper>
      <$.NavigationContainer>
        {src && <$.TitleImg src={src} alt="titleImg" />}
        {navigations?.map((navigation, index) => (
          <React.Fragment key={index}>
            <span>{navigation}</span>
            {navigations.length - 1 !== index && (
              <img
                key={`img${index}`}
                src="/icons/arrowRightGray60.svg"
                alt="iconArrowRight"
              />
            )}
          </React.Fragment>
        ))}
      </$.NavigationContainer>
      <$.TitleContainer>{title}</$.TitleContainer>
      <$.SubTitleContainer>{subTitle}</$.SubTitleContainer>
    </$.Wrapper>
  );
};
export default Header;
