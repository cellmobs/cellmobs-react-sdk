import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/pro-solid-svg-icons'
import { CDN_BASE_URL } from "js/cellmobs/constants";

export default function BlogCard({ item }) {

    return (
        <div className="col-md-6 col-lg-4 mb-3 mb-md-4">
            <div className="card h-100 hover-box-shadow">
                <a href={`${item.path}`} className="d-block bg-gradient rounded-top">
                    <img className="card-img-top hover-fade-out" src={`${CDN_BASE_URL}${item.primaryContent?.path}`} alt={item.primaryContent?.name} />
                </a>
                <div className="card-body">
                    <h3>{item.title}</h3>
                    <p style={{ 'minHeight': '70px', 'overflow': 'hidden' }}>
                        {item.lead}
                    </p>
                    <a href={`${item.path}`} className="stretched-link">Read Story</a>
                </div>
            </div>
        </div>

    )
}

