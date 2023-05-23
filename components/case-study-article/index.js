import classNames from "classnames";
import styles from "./case-study-article.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import {
  faPinterest,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  // faTiktok,
  faYoutube,
  faTwitter,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import router, { useRouter } from 'next/router'
import { useMemo, useState, useEffect, useContext } from 'react';
import { Parallax } from "react-parallax";
// import { COMMENTS_DATA, 
//         MAGAZINE_SLIDER_DATA } from "components/magazine-article/content-data";
import { CDN_BASE_URL, TINY_MCE_KEY } from "js/cellmobs/constants";
// import Card from "components/villa-card";
import api from "js/cellmobs/api";
import PageContext from "components/page-context";
import useBreakpoints from "hooks/useBreakpoints";
import CaseStudyFeature from "components/case-study-feature";
import { parsePageSection, hasAdminRole } from "js/cellmobs/common";
import AdminTools from '../admin-tools';
import { Editor } from '@tinymce/tinymce-react';
import { imageUploadHandler } from "js/cellmobs/api/file";
import TinyEditor from "../tiny-editor";

export default function CaseStudyArticle(props) {
  const { page } = useContext(PageContext)
  const [villas, setVillas] = useState(null)
  const { sm, xs } = useBreakpoints();
  const tagString = useMemo(() => {
    if (!page?.tagPath) {
      return
    }
    const parts = page?.tagPath?.split(':')
    return parts[parts.length - 1]
  }, [page])
  const tagName = useMemo(() => {
    return tagString?.split('_')?.map(t => t[0].toUpperCase() + t.substring(1).toLowerCase())?.join(' ')
  }, [tagString])
  const url = useMemo(() => `https://${process.env.HOST_NAME}/case-studies${page.path}`, [page])

  const sections = useMemo(() => page.sections, [page]);
  const primaryContent = useMemo(() => page.primaryContent, [page]);
  const title = useMemo(() => sections && sections.title, [sections]);
  const content = useMemo(() => sections && sections.content, [sections]);
  const mediaUrl = useMemo(() => (sm || xs) && primaryContent?.smallPath ? primaryContent?.smallPath : primaryContent?.masterPath, [sm, xs])

  const renderTags = () => {
    return page?.tags?.map((t, ix) => {
      if (ix >= 0) {
        return <a key={t.tag} href={`/blog#${t.tag}`} className="badge badge-pill badge-primary mr-3">{t.name}</a>
      }
    })
  }

    // start: editor code 
    const [isEditable, setIsEditable] = useState(false);
    const [editorEnabled, setEditorEnabled] = useState(false);
  
    useEffect(() => {
      if(hasAdminRole()){
        setIsEditable(true);
      }
    }, [])
    // end: editor code 
  
  return (

    <>
      <CaseStudyFeature study={page} />
      <section style={{paddingTop: '4rem'}}>
        <div className="container">
          <div className="row align-items-start justify-content-around">
            <div className="col-xl-12 col-lg-12 col-md-12">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/blog">Case Studies</a></li>
                  <li className="breadcrumb-item active" aria-current="page">{page?.title}</li>
                </ol>
              </nav>         

              <article className="article">

                  { !isEditable ? 
                  <div>{parsePageSection(page, 'content')}</div>
                  :
                  <TinyEditor editorEnabled={editorEnabled} />
                }

              </article>

              <div className="mt-4 pt-4" style={{textTransform: 'capitalize'}}>
                {renderTags()}
              </div>

            </div>
          </div>
        </div>
      </section>
      { isEditable ? <AdminTools editorEnabled={editorEnabled} setEditorEnabled={setEditorEnabled} /> : ''}

    </>
  );
};
