import React from "react";
import Layout from "layouts";
import PageContext from "components/page-context";
import { testPage } from "js/cellmobs/constants";
import * as cookie from 'cookie'
import { isError } from "js/cellmobs/common";
import api from "js/cellmobs/api";
import BlogArticle from "../../components/blog-article";
import Header from "components/header";
import Navbar from "components/navbar";

export async function getServerSideProps({ req, params }) {
  let headerCookie = req.headers.cookie;
  if (typeof headerCookie !== 'string') {
    headerCookie = '';
  }
  const cookies = cookie.parse(headerCookie);
  // if (!cookies.cmauth) {
  //   return {
  //     redirect: {
  //       destination: `/login?returnUrl=/magazine/${params.path}`,
  //       permanent: false,
  //     },
  //   }
  // }
  let pageResponse = await api.page.renderPage(`/blog/${params.path}`)
  if (isError(pageResponse)) {
    return {
      redirect: {
        destination: `/404`,
        permanent: false,
      },
    }
  }
  return {
    props: {
      page: pageResponse,
      params: params
    }
  }
}

export default function BlogArticlePage(props) {
  return (
    <PageContext.Provider value={props}>
      <Layout>
        <Header />
        <Navbar title="Cellmobs" logo="lite" text="dark " />
       <BlogArticle />
      </Layout>
    </PageContext.Provider>
  );
}