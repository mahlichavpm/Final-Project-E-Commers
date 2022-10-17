import { Link } from "react-router-dom";
import './CategoryBanner.scss';

export default function Category (props) {

    return (
        <div>
            <Link to={props.path}>
                <img  className="clickableBanner" src={props.image} alt="gridbanner-img"/>
            </Link>
        </div>
    )
}