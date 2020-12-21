import React from 'react';
import "./style.scss";

export default function App() {
    const alert = (msg: any) => window.alert(msg);
    return <div onClick={alert}>React + TypeScript + Webpack!</div>;
}
