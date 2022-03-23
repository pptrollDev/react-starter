import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ITAuth } from './type';
import { useUserDispatch } from '../../../context/User';
import { gql, useLazyQuery } from '@apollo/client';
import { useNotification } from '../../../hooks/Notification';
import TNavigation from '../TNavigation';

const TAuth = ({ children }: ITAuth) => {
  const notification = useNotification();
  const router = useRouter();
  const [token, setToken] = useState<string>();
  const [isAuthPage, setIsAuthPage] = useState(false);
  const userDispatch = useUserDispatch();

  useEffect(() => {
    const localToken = window.localStorage.getItem('token');
    if (localToken) setToken(localToken);
    switch (router.pathname) {
      case '/signin':
      case '/signup':
      case '/signup/complete':
        if (localToken) router.push('/hospital/default');
        setIsAuthPage(false);
        break;
      default:
        if (!localToken) router.push('/signin');
        setIsAuthPage(true);
        break;
    }
  }, [router.pathname]);

  useEffect(() => {
    if (token) getMyHospitalAdminUser();
  }, [token]);

  const [getMyHospitalAdminUser] = useLazyQuery(MY_HOSPITAL_ADMIN_USER, {
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      userDispatch({ type: 'createUser', data: res.myHospitalAdminUser });
    },
    onError(error) {
      const localToken = window.localStorage.getItem('token');
      if (localToken) notification({ label: error.message, type: 'error' });
    }
  });

  return isAuthPage ? <TNavigation>{children}</TNavigation> : children;
};

export default TAuth;

const MY_HOSPITAL_ADMIN_USER = gql`
  query myHospitalAdminUser {
    myHospitalAdminUser {
      id
      username
      hospitalHospitalAdminUsers {
        hospital {
          id
          name
          receiptHospitalConfiguration {
            id
            chart {
              linked
            }
          }
          receiptServiceAlliance {
            id
            status
          }
        }
      }
    }
  }
`;
