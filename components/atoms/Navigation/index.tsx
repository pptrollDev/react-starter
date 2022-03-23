import React from 'react';
import * as $ from './styles';
import { INavigation, INavigations } from './type';
import Dropdown from '../Dropdown';
import Application from '../Application';

const Navigation = ({
  userName,
  hospitalName,
  application,
  onClick,
  navigations,
  children
}: INavigation) => {
  return (
    <$.Wrapper>
      <$.SidebarWrapper>
        <$.LogoWrapper>
          <$.ImageContainer>
            <img src="/images/navigationLogo.svg" alt="navigationLogo" />
          </$.ImageContainer>
          <$.TextContainer>병원관리자</$.TextContainer>
        </$.LogoWrapper>
        <$.ButtonWrapper>
          {navigations.map((navigation: INavigations, index) => (
            <$.NavigationWrapper isFocus={navigation.isFocus} key={index}>
              <div className="navigationContainer">
                <button onClick={() => onClick(navigation.href)}>
                  {!navigation.isFocus && (
                    <img
                      className="navigationImg"
                      src={navigation.src?.default}
                      alt={navigation.name}
                    />
                  )}
                  {navigation.isFocus && (
                    <img
                      className="navigationImg"
                      src={navigation.src?.focus}
                      alt={navigation.name}
                    />
                  )}
                  {navigation.name}
                </button>
              </div>
              {navigation.isFocus &&
                navigation.children?.map((childNavigation, index) => (
                  <$.ChildNavigationWrapper isFocus={childNavigation.isFocus} key={index}>
                    <button onClick={() => onClick(childNavigation.href)}>
                      {childNavigation.name}
                    </button>
                  </$.ChildNavigationWrapper>
                ))}
            </$.NavigationWrapper>
          ))}
        </$.ButtonWrapper>
      </$.SidebarWrapper>
      <$.ContentWrapper>
        {application && (
          <Application
            firstPathName={application.firstPathName}
            redirectUrl={application.redirectUrl}
            downloadUrl={application.downloadUrl}
            status={application.status}
          />
        )}
        <$.HeadContainer>
          <img src="/icons/userCircle.svg" alt="userIcon" />
          <span className="userSpan">
            <Dropdown
              label={userName}
              options={[
                { label: '계정설정', value: 'account' },
                { label: '로그아웃', value: 'signOut' }
              ]}
              onClick={onClick}
            />
          </span>
          <span className="hospitalSpan">{hospitalName}</span>
        </$.HeadContainer>
        <$.ContentContainer>{children}</$.ContentContainer>
      </$.ContentWrapper>
    </$.Wrapper>
  );
};

export default Navigation;
