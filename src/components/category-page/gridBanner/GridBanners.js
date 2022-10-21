import { Link } from "react-router-dom";
import "./GridBanner.scss";
    
export default function GridBanners(props) {
  return (
    <>
    
    <h2>Gaming периферия</h2>
    <div className="gridBannerContainer">
      <div className="side">
        <Link className="link" to={props.link1}>
          <img src={props.img1} alt='gridbanner-img' />
          <br/>
          <span>{props.span1}</span>
        </Link>
        <Link className="link" to={props.link2}>
          <img src={props.img2} alt='gridbanner-img' />
          <br/>
          <span>{props.span2}</span>
        </Link>
      </div>
      <div className="middle">
        <Link className="link" to={props.link3}>
          <img src={props.img3} alt='gridbanner-img' />
          <br/>
          <span>{props.span3}</span>
        </Link>
      </div>
      <div className="side">
        <Link className="link" to={props.link4}>
          <img src={props.img4} alt='gridbanner-img' />
          <br/>
          <span>{props.span4}</span>
        </Link>
        <Link className="link" to={props.link5}>
          <img src={props.img5} alt='gridbanner-img' />
          <br/>
          <span>{props.span5}</span>
        </Link>
      </div>
    </div>
    </>
  );
}
