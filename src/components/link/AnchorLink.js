import { Link } from "react-router-dom";
import './AnchorLink.scss'

export default function AnchorLink (props) {
    return (
        <>
            <a className="link" onClick={props.onClick}>{props.value}</a>
        </>
    )
}