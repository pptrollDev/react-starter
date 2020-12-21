import React from 'react';

export default function App() {
    const alert = (msg: any) => window.alert(msg);
    return <div onClick={alert}>React + TypeScript + Webpack!</div>;
}
