import { Link } from "react-router-dom";
import './Banner.scss';
import banner from "../../img/TV.webp"


export default function Banner () {

    return (
        <>
        <div className="sub-menu-container">
            <div className="sub-menu-header">
                <h2>Телефони, Таблети &amp; Смарт</h2>
                <div className="heading-links">
                    <Link to={''} className="sub-menu-heading-link">30 дни право на връщане</Link>
                    <Link to={''} className="sub-menu-heading-link">eCredit</Link>
                    <Link to={''} className="sub-menu-heading-link">Проверка на пратката</Link>
                    <Link to={''} className="sub-menu-heading-link">Удължена гаранция</Link>
                </div>
            </div>
            <div className="sub-menu-section">
                <div className="sub-menu-inside">
                    <div className="sub-side-menu">
                        <ul>
                            <li  className="wd-link-title-1">
                                <Link className='link' to={''}> Мобилни телефони и аксесоари</Link>
                            </li>
                            <li className="wd-link-title-0">
                                <Link className='link' to={''}>Мобилни телефони</Link>
                            </li>
                            <li className="wd-link-title-0">
                                <Link className='link' to={''}>Калъфи за мобилни телефони</Link>
                            </li>
                            <li className="wd-link-title-0">
                                <Link className='link' to={''}>Защитни фолиа за мобилни телефони</Link>
                            </li>
                            <li className="wd-link-title-0">
                                <Link className='link' to={''}>Външни батерии за мобилни телефони</Link>
                            </li>
                            <li className="wd-link-title-1">
                                <Link className='link' to={''}>Таблети и аксесоари</Link>
                            </li>
                            <li className="wd-link-title-0">
                                <Link className='link' to={''}>Таблети</Link>
                            </li>
                            <li className="wd-link-title-0">
                                <Link className='link' to={''}>Калъфи за таблети</Link>
                            </li>
                            <li className="wd-link-title-1">
                                <Link className='link' to={''}>Джаджи &amp; Smart технологии</Link>
                            </li>
                            <li className="wd-link-title-0">
                                <Link className='link' to={''}>Smartwatch</Link>
                            </li>
                            <li className="wd-link-title-0">
                                <Link className='link' to={''}>Фитнес гривни</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sub-menu-categories">
                        <ul>
                            <li>
                                <Link className="link sb-cat-item" to={''}>Телефони Samsung</Link>
                            </li>
                            <li>
                                <Link className="link sb-cat-item" to={''}>Телефони Huawei </Link>
                            </li>
                            <li>
                                <Link className="link sb-cat-item" to={''}>Телефони Xiaomi</Link>
                            </li>
                            <li>
                                <Link className="link sb-cat-item" to={''}>iPad</Link>
                            </li>
                            <li>
                                <Link className="link sb-cat-item" to={''}>Таблети Huawei</Link>
                            </li>
                            <li>
                                <Link className="link sb-cat-item" to={''}>Таблети Samsung</Link>
                            </li>
                            <li>
                                <Link className="link sb-cat-item" to={''}>Smartwatch</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sub-menu-img-container">
                    <img src={banner} alt="tvBanner"/>
                </div>
            </div>
        </div>
        </>
    )
}