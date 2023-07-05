import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import css from './Layout.module.css';

export const Layout = () => {

  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <>
          <img className={css.wave} src={require('img/wave.png')} alt="wave" />
          <div className={css.wrapper}>
            <div className={css.img}>
              <img src={require('img/bg.png')} alt="wave" />
            </div>
            <div className={css.login_content}>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </>

        <Toaster position="top-right" reverseOrder={false} />
      </main>
    </>
  );
};
