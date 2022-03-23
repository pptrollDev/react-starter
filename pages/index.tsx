import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const localToken = window.localStorage.getItem('token');
    if (localToken) router.push('/hospital/default');
    else router.push('/signin');
  }, []);

  return null;
};

export default Index;
