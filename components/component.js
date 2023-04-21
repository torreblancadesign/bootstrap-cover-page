import React from 'react';
import styles from '../styles/style.module.css';

const customCover = () => {
  return (
    <div className='cover-container d-flex w-100% h-100% p-3 mx-auto flex-column' style={{backgroundColor: 'grey'}}>
      <nav className='navbar navbar-dark bg-dark'> 
        <a className='navbar-brand' href='#'>Cover</a>
      </nav>
      <main role='main' className='inner cover text-center'>
        <h1 className='cover-heading'>Cover your page.</h1>
        <p className='lead'>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className='lead'>
          <a href='#' className='btn btn-lg btn-secondary'>Learn more</a>
        </p>
      </main>
      <footer className='mastfoot mt-auto'>
        <div className='inner'>
          <p>Cover template for <a href='https://getbootstrap.com/'>Bootstrap</a>, by <a href='https://twitter.com/mdo'>@mdo</a>.</p>
        </div>
      </footer>
    </div>
  );
};

export default customCover;
 