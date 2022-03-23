import { useRouter } from 'next/router';
import { ITab } from '../../components/atoms/Header/type';

export function useHeader() {
  const router = useRouter();
  const routerPaths = router.pathname.split('/');
  const headers: any = {
    home: {
      title: '홈',
      tabs: []
    },
    hospital: {
      title: '병원 정보',
      tabs: [
        { name: '기본', href: '/hospital/default', isCreateTab: false, current: false },
        {
          name: '소개',
          href: '/hospital/introduction',
          isCreateTab: false,
          current: false
        },
        { name: '의료진', href: '/hospital/doctor', isCreateTab: true, current: false },
        {
          name: '운영 스케줄',
          href: '/hospital/operation',
          isCreateTab: false,
          current: false
        }
      ]
    },
    service: {
      title: '서비스 설정',
      tabs: [
        {
          name: '알림',
          href: '/service/alarm',
          isCreateTab: false,
          current: false
        },
        {
          name: '태블릿',
          href: '/service/tablet',
          isCreateTab: false,
          current: false
        },
        {
          name: '문진',
          href: '/service/questionnaire',
          isCreateTab: true,
          current: false
        },
        {
          name: '접수현황',
          href: '/service/receipt',
          isCreateTab: true,
          current: false
        }
      ]
    },
    user: {
      title: '내 정보',
      tabs: [
        { name: '기본', href: '/user/default', isCreateTab: false, current: false },
        { name: '비밀번호', href: '/user/password', isCreateTab: false, current: false }
      ]
    }
  };

  return (
    headers[routerPaths[1]] && {
      ...headers[routerPaths[1]],
      tabs: headers[routerPaths[1]].tabs.map((value: ITab) => {
        if (value.href === router.pathname) return { ...value, current: true };
        else return { ...value, current: false };
      })
    }
  );
}
