import '../styles/globals.css';

import React from 'react';
import type { AppProps } from 'next/app';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { NotificationProvider } from '../context/Notification';
import { setContext } from '@apollo/client/link/context';
import { UserProvider } from '../context/User';
import TAuth from '../components/templates/TAuth';

function MyApp({ Component, pageProps }: AppProps) {
  const httpLink = createHttpLink({
    uri: process.env.HOSPITAL_ADMIN_URI
  });
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const localToken = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: localToken ? `Bearer ${localToken}` : ''
      }
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({ addTypename: false })
  });

  return (
    <ApolloProvider client={client}>
      <NotificationProvider>
        <UserProvider>
          <TAuth>
            <Component {...pageProps} />
          </TAuth>
        </UserProvider>
      </NotificationProvider>
    </ApolloProvider>
  );
}

export default MyApp;
