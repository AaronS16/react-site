import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css'

const Page = () => {
    return (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Page />
    )