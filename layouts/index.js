import Header from 'components/header';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import Scripts from 'components/scripts'

export default function Layout({ stylesheets, scripts, children }) {

    return (
            <div>
                <div className="loader">
                    <div className="loading-animation"></div>
                </div>
                <Header stylesheets={stylesheets} />
                <Navbar title="" logo="lite" text="dark" />
                {children}
                <Footer />
                <Scripts scripts={scripts} />
            </div>
    )


}