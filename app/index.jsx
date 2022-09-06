import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

const Index = () => {
  return (
    <h1>hello there</h1>
  )
}

export default Index

const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement)
root.render(<Index />)