import React, { useEffect, useState } from 'react';
import { useNavigation } from '../../../hooks/Navigation';
import { useRouter } from 'next/router';
import { ITNavigation } from './type';
import { useUserState } from '../../../context/User';
import Navigation from '../../atoms/Navigation';
import { IApplication } from '../../atoms/Application/type';

const TNavigation = ({ children }: ITNavigation) => {
  const router = useRouter();
  const navigations = useNavigation();
  const userState = useUserState();
  const [application, setApplication] = useState<IApplication | undefined>();

  useEffect(() => {
    const firstPathName = router.pathname.split('/')[1];
    if (userState) {
      switch (firstPathName) {
        case 'tablet':
          if (!userState.hospitalHospitalAdminUsers[0].hospital.receiptServiceAlliance)
            setApplication({
              firstPathName: firstPathName,
              downloadUrl: '',
              redirectUrl: ''
            });
          else if (
            userState.hospitalHospitalAdminUsers[0].hospital.receiptServiceAlliance
              .status === 'S3'
          ) {
            setApplication(undefined);
          } else {
            setApplication({
              firstPathName: firstPathName,
              downloadUrl: '',
              redirectUrl: '',
              status:
                userState.hospitalHospitalAdminUsers[0].hospital.receiptServiceAlliance
                  .status
            });
          }
          break;
        default:
          setApplication(undefined);
      }
    }
  }, [userState]);

  const handleClick = (value: string) => {
    switch (value) {
      case 'account':
        router.push('/account');
        break;
      case 'signOut':
        window.localStorage.removeItem('token');
        router.push('/signin');
        break;
      default:
        router.push(value);
        break;
    }
  };

  return userState ? (
    <Navigation
      userName={userState.username}
      hospitalName={userState.hospitalHospitalAdminUsers[0].hospital.name}
      application={application}
      onClick={handleClick}
      navigations={navigations}
    >
      {children}
    </Navigation>
  ) : null;
};

export default TNavigation;
