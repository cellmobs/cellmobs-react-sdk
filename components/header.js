import React, { useContext, useEffect } from 'react';
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER, SET_TOKEN } from '../redux/types/authTypes';
import PageContext from './page-context';
import { jwtIsValid } from "js/cellmobs/common";
import Cookie from 'js-cookie';
import { useRouter } from "next/router";

const Header = () => {

  const dispatch = useDispatch();
  let { page } = useContext(PageContext);
  const router = useRouter();
  let user = useSelector(state => state.auth.user);
  let token = useSelector(state => state.auth.token);

  if (!page) page = {};

  useEffect(() => {
    token = Cookie.get('cmauth') ? Cookie.get('cmauth') : null;
    user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    dispatch({ type: SET_TOKEN, payload: token });
    dispatch({ type: SET_USER, payload: user });

  }, [token])

  return (
    <div>
      <Head>
        <title>{page.title || 'Title'}</title>
        <link rel="apple-touch-icon" sizes="57x57" href="https://cdn.cellmobs.com/2029399/static/images/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="https://cdn.cellmobs.com/2029399/static/images/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="https://cdn.cellmobs.com/2029399/static/images/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="https://cdn.cellmobs.com/2029399/static/images/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="https://cdn.cellmobs.com/2029399/static/images/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="https://cdn.cellmobs.com/2029399/static/images/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.cellmobs.com/2029399/static/images/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.cellmobs.com/2029399/static/images/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="https://cdn.cellmobs.com/2029399/static/images/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.cellmobs.com/2029399/static/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="https://cdn.cellmobs.com/2029399/static/images/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.cellmobs.com/2029399/static/images/favicon-16x16.png"/>
        <link rel="icon" href="https://cdn.cellmobs.com/2029399/static/images/favicon.ico" type="image/x-icon" />        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={page.description || ''} />
        <link rel="canonical" href={page.ogUrl || ''} />
        <meta name="keywords" content={page.keywords || ''} />
        <meta property="og:site_name" content={page.ogSiteName || ''} />
        <meta property="og:url" content={page.ogUrl || ''} />
        <meta property="og:title" content={page.ogTitle || ''} />
        <meta property="og:description" content={page.ogDescription || ''} />
        <meta property="og:image" content={page.ogImage || ''} />
        <meta property="og:type" content={page.ogType || ''} />
        <meta property="og:locale" content={page.ogLocale || ''} />
        <meta name="twitter:url" content={page.ogUrl || ''} />
        <meta name="twitter:title" content={page.ogTitle || ''} />
        <meta name="twitter:description" content={page.ogDescription || ''} />
        <meta name="twitter:image" content={page.ogImage || ''} />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,400i,600,700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/cd7e2fefb5.js" crossOrigin="anonymous"></script>
      </Head>
    </div>
  )
}

Header.defaultProps = {
  title: 'Header'
}

const styles = {

  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#FFF'

  },
  title: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  },
  logo: {
    height: 48,
  }

}

export default Header;