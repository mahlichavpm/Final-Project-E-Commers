import { Link } from "react-router-dom";
import './AnchorLink.scss'

export default function AnchorLink (props) {
    return (
        <Link className="link" to={props.to} onClick={props.onClick}>{props.value}</Link>
    )
}