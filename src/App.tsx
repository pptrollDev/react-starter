import React, { Suspense, lazy } from 'react';
import './style.scss';

export default function App() {
  const Home = lazy(() => import('./pages/Home'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
