import React from 'react';
import * as $ from './styles';
import Button from '../Button';
import { IApplication } from './type';
import { useRouter } from 'next/router';

const Application = ({
  firstPathName,
  redirectUrl,
  downloadUrl,
  status
}: IApplication) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    switch (id) {
      case 'application':
        router.push('/account/service');
        break;
    }
  };

  return (
    <$.Wrapper>
      <$.BackgroundWrapper />
      <$.ContentWrapper>
        <$.ImageContainer>
          <img src="/icons/exclamationMark.svg" alt="exclamationMark" />
        </$.ImageContainer>
        <$.LabelContainer>
          {status
            ? '태블릿 설치 완료 후 정상적으로 서비스 이용이 가능합니다.'
            : '아직 서비스를 신청하지 않으셨네요.'}
        </$.LabelContainer>
        {!status && <$.SubLabelContainer>완료 후 사용해보세요.</$.SubLabelContainer>}
        {firstPathName === 'tablet' && !status && (
          <$.MessageImageContainer>
            <img src="/images/tabletMessage.svg" alt="tabletMessage" />
          </$.MessageImageContainer>
        )}

        <$.ButtonContainer status={status ? true : false}>
          <Button
            id="introduction"
            label="서비스 소개서"
            src="/icons/download.svg"
            imageDirection="right"
            onClick={handleClick}
          />
          {!status && (
            <Button id="application" label="신청하러 가기" onClick={handleClick} />
          )}
        </$.ButtonContainer>
      </$.ContentWrapper>
    </$.Wrapper>
  );
};

export default Application;
