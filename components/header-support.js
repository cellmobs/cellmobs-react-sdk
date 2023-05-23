const HeaderSupport = () => {


    return (
        <div data-overlay className="bg-primary-3 text-white o-hidden">
            <section id="help-header">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 text-center" style={{paddingTop: '40px'}}>
                            <h1 className="display-3" data-meta="section.title" data-id="help-header.title">Help Center</h1>
                            <div className="lead" data-meta="section.title" data-id="help-header.lead">The right place to get in touch with Cellmobs</div>
                            {/* <form id="search" action="/help-center/find" className="mt-5 d-flex flex-column flex-md-row form-group">
                                <input type="hidden" name="views" value="help-article" />
                                <input className="form-control form-control-lg h-100 mb-2 mb-md-0 mr-md-3" name="query" value="" placeholder="Search for articles" type="search" />
                                <button className="btn btn-lg btn-primary" type="submit">Search</button>
                            </form> */}
                            {/* <div className="d-flex flex-wrap align-items-center justify-content-center">
                                <div className="text-small mb-2 mb-sm-0 mr-2">Popular keywords:</div>
                                <ul className="d-flex flex-wrap list-unstyled mb-0">
                                    <li className="m-1">
                                        <a className="badge badge-pill badge-white" href="/help-center/find?views=help-article&query=security">security</a>
                                    </li>
                                    <li className="m-1">
                                        <a className="badge badge-pill badge-white" href="/help-center/find?views=help-article&query=bots">bots</a>
                                    </li>
                                    <li className="m-1">
                                        <a className="badge badge-pill badge-white" href="/help-center/find?views=help-article&query=explore">explore</a>
                                    </li>
                                    <li className="m-1">
                                        <a className="badge badge-pill badge-white" href="/help-center/find?views=help-article&query=getting%20started">getting started</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <div className="divider divider-bottom bg-light"></div>
        </div>

    )
}


const styles = {


}

export default HeaderSupport;