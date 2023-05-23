import { useContext, useEffect } from 'react';
import PageContext from './page-context';

export default function Scripts({ scripts }) {

    let { page } = useContext(PageContext);

    useEffect(() => {
        if (window && window.parent && page) {
            window.top.postMessage({ "page" :  page.id }, '*')
        }
    },[]);

    return (
        <>
            <script type="text/javascript" src="/assets/js/jquery.min.js"></script>
            <script type="text/javascript" src="/assets/js/popper.min.js"></script>
            <script type="text/javascript" src="/assets/js/bootstrap.js"></script>

            <script type="text/javascript" src="/assets/js/aos.js"></script>
            <script type="text/javascript" src="/assets/js/clipboard.min.js"></script>
            <script type="text/javascript" src="/assets/js/jquery.fancybox.min.js"></script>
            <script type="text/javascript" src="/assets/js/flatpickr.min.js"></script>
            <script type="text/javascript" src="/assets/js/ion.rangeSlider.min.js"></script>
            <script type="text/javascript" src="/assets/js/isotope.pkgd.min.js"></script>
            <script type="text/javascript" src="/assets/js/jarallax.min.js"></script>
            <script type="text/javascript" src="/assets/js/jarallax-video.min.js"></script>
            <script type="text/javascript" src="/assets/js/jarallax-element.min.js"></script>
            <script type="text/javascript" src="/assets/js/jquery.countdown.min.js"></script>
            <script type="text/javascript" src="/assets/js/jquery.smartWizard.min.js"></script>
            <script type="text/javascript" src="/assets/js/plyr.polyfilled.min.js"></script>
            <script type="text/javascript" src="/assets/js/prism.js"></script>
            <script type="text/javascript" src="/assets/js/scrollMonitor.js"></script>
            <script type="text/javascript" src="/assets/js/smooth-scroll.polyfills.min.js"></script>
            <script type="text/javascript" src="/assets/js/svg-injector.umd.production.js"></script>
            <script type="text/javascript" src="/assets/js/twitterFetcher_min.js"></script>
            <script type="text/javascript" src="/assets/js/typed.min.js"></script>
            <script type="text/javascript" src="/assets/js/theme.js"></script>
			<script src="https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1"></script>
			{/* <df-messenger
			  df-cx="true"
			  location="us-central1"
			  chat-title="Cellmobs Support"
			  agent-id="66db2a05-fbf6-4659-a2ae-f2064ba48136"
			  language-code="en"
			></df-messenger> */}

            {scripts}
        </>
    )
}