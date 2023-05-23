import { useMemo, useState, useEffect, useContext } from 'react';
import PageContext from "components/page-context";
import TinyEditor from "components/tiny-editor";
import useBreakpoints from "hooks/useBreakpoints";
import BlogFeature from "components/blog-feature";
import { parsePageSection, hasAdminRole } from "js/cellmobs/common";
import AdminTools from '../admin-tools';

export default function BlogArticle(props) {
  const { page } = useContext(PageContext)
  const { sm, xs } = useBreakpoints();

  const sections = useMemo(() => page.sections, [page]);
  const primaryContent = useMemo(() => page.primaryContent, [page]);
  const title = useMemo(() => sections && sections.title, [sections]);
  const content = useMemo(() => sections && sections.content, [sections]);
  const mediaUrl = useMemo(() => (sm || xs) && primaryContent?.smallPath ? primaryContent?.smallPath : primaryContent?.masterPath, [sm, xs])


  const renderTags = () => {
    return page?.tags?.map((t, ix) => {
      if (ix >= 0) {
        return <a href={`/blog#${t.tag}`} key={t.tag} className={`badge badge-pill badge-${!t.color ? 'primary' : t.color} mr-3`}>{t.name}</a>
      }
    })
  }

  // start: editor code 
  const [isEditable, setIsEditable] = useState(false);
  const [editorEnabled, setEditorEnabled] = useState(false);

  useEffect(() => {
    if (hasAdminRole()) {
      setIsEditable(true);
    }
  }, [])
  // end: editor code 

  return (

    <>
      <BlogFeature study={page} />
      <section style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="row align-items-start justify-content-around">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/blog">Blog</a></li>
                  <li className="breadcrumb-item active" aria-current="page">{page?.title}</li>
                </ol>
              </nav>

              <article className="article">

                {!isEditable ?
                  <div>{parsePageSection(page, 'content')}</div>
                  :
                  <TinyEditor editorEnabled={editorEnabled} />
                }
              </article>
              <div className="mt-4 pt-4" style={{ textTransform: 'capitalize' }}>
                {renderTags()}
              </div>


            </div>
          </div>
        </div>
      </section>
      {isEditable ? <AdminTools editorEnabled={editorEnabled} setEditorEnabled={setEditorEnabled} /> : ''}
    </>
  );
};
