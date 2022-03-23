import React from 'react';
import * as $ from './styles';
import { ISignUpComplete } from './type';
import Button from '../../atoms/Button';
import CardWrapper from '../../atoms/CardWrapper';

const SignUpComplete = ({ userInfo, onClick }: ISignUpComplete) => {
  return (
    <$.Wrapper>
      <div className="wrapper">
        <div className="headerWrapper">
          <img src="/images/signUpLogo.svg" alt="signUpLogo" />
        </div>
        <CardWrapper>
          <div className="contentWrapper">
            <div className="mainInfoWrapper">
              회원가입 신청이 완료되었습니다.
              <br />
              입력한 정보를 확인해보세요.
            </div>
            <div className="formWrapper">
              <div className="titleContainer">회원 정보</div>
              <div className="contentContainer">
                <div className="labelContainer">아이디</div>
                <div className="valueContainer">{userInfo.username}</div>
              </div>
              <div className="contentContainer">
                <div className="labelContainer">관리자명</div>
                <div className="valueContainer">{userInfo.name}</div>
              </div>
              <div className="contentContainer">
                <div className="labelContainer">연락처</div>
                <div className="valueContainer">{userInfo.phone}</div>
              </div>
              <div className="contentContainer">
                <div className="labelContainer">이메일</div>
                <div className="valueContainer">{userInfo.email}</div>
              </div>
              <div className="contentContainer">
                <div className="labelContainer">가입병원</div>
                <div className="valueContainer">
                  <div>{userInfo.hospital?.name}</div>
                  {userInfo.hospital?.address && (
                    <div className="addressContainer">
                      {userInfo.hospital?.address}&nbsp;{userInfo.hospital?.addressDetail}
                    </div>
                  )}
                  <div className="moreInfoContainer">
                    {userInfo.hospital?.phone}
                    {userInfo.hospital?.operatedStatus === 'toBeOperated' && '| 계원예정'}
                    {userInfo.hospital?.toBeOperatedAt &&
                      userInfo.hospital?.toBeOperatedAt}
                  </div>
                </div>
              </div>
            </div>
            <div className="subInfoWrapper">
              잘못 입력한 정보가 있다면 1:1 채팅 상담으로 문의주세요.
            </div>
            <div className="submitWrapper">
              <Button id="submit" label="확인" onClick={onClick} />
            </div>
          </div>
        </CardWrapper>
      </div>
    </$.Wrapper>
  );
};

export default SignUpComplete;
