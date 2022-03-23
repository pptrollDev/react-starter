import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { IUserInfo } from '../../organisms/SignUpComplete/type';
import SignUpComplete from '../../organisms/SignUpComplete';

const TSignUpComplete = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    email: '',
    name: '',
    phone: '',
    username: '',
    hospital: undefined
  });

  useEffect(() => {
    const tempUserInfo: any = {
      email: router.query.email,
      name: router.query.name,
      phone: router.query.phone,
      username: router.query.username,
      hospital: {
        name: router.query.hospitalName,
        address: router.query.hospitalAddress,
        addressDetail: router.query.hospitalAddressDetail,
        phone: router.query.hospitalPhone,
        operatedStatus: router.query.hospitalOperatedStatus,
        toBeOperatedAt: router.query.hospitalToBeOperatedAt
      }
    };

    setUserInfo(tempUserInfo);
  }, [router]);

  return <SignUpComplete userInfo={userInfo} onClick={() => router.push('/signin')} />;
};

export default TSignUpComplete;
