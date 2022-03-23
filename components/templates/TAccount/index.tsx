import React, { useEffect } from 'react';
import Container from '../../atoms/Container';
import Account from '../../organisms/Account';
import { gql, useLazyQuery } from '@apollo/client';
import { useUserDispatch, useUserState } from '../../../context/User';
import { useNotification } from '../../../hooks/Notification';

const TAccount = () => {
  const notification = useNotification();
  const userState = useUserState();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    if (userState) getMyHospitalAdminUser();
  }, [userState]);

  const [getMyHospitalAdminUser] = useLazyQuery(MY_HOSPITAL_ADMIN_USER, {
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      userDispatch({ type: 'createUser', data: res.myHospitalAdminUser });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  return (
    <Container>
      <Account />
    </Container>
  );
};

export default TAccount;

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
