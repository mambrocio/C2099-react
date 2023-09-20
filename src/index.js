import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/style.css';
import Header from './structure/Header';
import Main from './structure/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <div className="video-placer">
           <video className="video-intro" autoPlay loop>
            <source src="/assets/video/testIntro.mp4" type="video/mp4"/>
           </video>
        </div>
    <Main/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
