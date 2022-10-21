import CategoryBanner from './CategoryBanner.js';
import './CategoryPage.scss';
import GridBanners from './GridBanners.js';
import AnchorLink from '../../reusibleComponents/AnchorLink.js';

export default function CategoryPage (props) {

    return (
        <div className='categoryWrapper'>
            <h2>Телевизори & аксесоари</h2> 
            {/* //props to be */}
            <div className="categoryPageContainer">
                <div className="sideMenu">  
                    <AnchorLink value={'Телевизори'}/>
                    <h5>TV-Аудио аксесоари</h5>
                    <AnchorLink value={'Стойки'}/>
                    <AnchorLink value={'Кабели и адаптери'}/>
                    <AnchorLink value={'Комплекти за почистване'}/>
                    <AnchorLink value={'Дистанционни'}/>
             
                </div>
                <div className="contentBody">  
                {/* // props to be inserted */}
                    <CategoryBanner path={'/home'} image={'https://s13emagst.akamaized.net/layout/bg/images/db//19/28078.jpg'}/>
                    <CategoryBanner path={'/home'} image={'https://s13emagst.akamaized.net/layout/bg/images/db//18/26734.jpg'}/>
                    <GridBanners
                    img1='https://s13emagst.akamaized.net/layout/bg/images/db/23/34105.jpg' span1={'Gaming мишки'}
                    img2='https://s13emagst.akamaized.net/layout/bg/images/db/23/34106.jpg' span2={'Gaming подложки за мишка'}
                    img3='https://s13emagst.akamaized.net/layout/bg/images/db/23/34107.jpg' span3={'Gaming столове'}
                    img4='https://s13emagst.akamaized.net/layout/bg/images/db/23/34108.jpg' span4={'Gaming клавиатури'}
                    img5='https://s13emagst.akamaized.net/layout/bg/images/db/23/34109.jpg' span5={'Gaming слушалки'}
                    />
                </div>
            </div>
        </div>
    )
}