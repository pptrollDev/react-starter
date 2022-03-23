import { useRouter } from 'next/router';
import { INavigations } from '../../components/atoms/Navigation/type';

export function useNavigation() {
  const router = useRouter();
  const routerPaths = router.pathname.split('/');
  const navigations: INavigations[] = [
    {
      name: '병원정보',
      href: '/hospital/default',
      src: {
        default: '/icons/hospital.svg',
        focus: '/icons/hospitalFocus.svg'
      },
      isFocus: false,
      children: [
        {
          name: '기본정보',
          href: '/hospital/default',
          isFocus: false
        }
      ]
    },
    {
      name: '태블릿접수 설정',
      href: '/tablet/item',
      src: {
        default: '/icons/tablet.svg',
        focus: '/icons/tabletFocus.svg'
      },
      isFocus: false,
      children: [
        {
          name: '접수항목 관리',
          href: '/tablet/item',
          isFocus: false
        },
        {
          name: '태블릿 설정',
          href: '/tablet/setting',
          isFocus: false
        }
      ]
    }
  ];

  return navigations.map((navigation) => {
    const navigationPaths = navigation.href.split('/');
    const tempChildrenNavigation = navigation.children
      ?.concat()
      .map((childrenNavigation) => {
        if (childrenNavigation.href === router.pathname) {
          return { ...childrenNavigation, isFocus: true };
        } else return { ...childrenNavigation, isFocus: false };
      });

    if (navigationPaths[1] === routerPaths[1])
      return { ...navigation, children: tempChildrenNavigation, isFocus: true };
    else return { ...navigation, children: tempChildrenNavigation, isFocus: false };
  });
}
