import CategoryBanner from './categoryBanner/CategoryBanner.js';
import './CategoryPage.scss';
import GridBanners from './gridBanner/GridBanners.js';
import AnchorLink from '../../components/link/AnchorLink.js';
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';

export default function CategoryPage(props) {
    const categories = useSelector(state => state.categories.categories);
    const navigate = useNavigate()
    let { globalCategory } = useParams()

    console.log(categories.slice().filter(e => {
        console.log(e.key);
        console.log(globalCategory);
        return e.key === globalCategory
    }));
    return (
        <Stack
            sx={{
                maxWidth: '1240px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '20px',
                paddingRight: '20px',
            }}
        >
            {categories.slice().filter(e => e.key === globalCategory).map(e =>
                <>
                    <Breadcrumbs aria-label="breadcrumb" sx={{marginTop: '12px', marginBottom: '24px'}}>
                        <Link 
                            sx={{'&:hover':{color: 'primary.main'}}} 
                            underline="none" 
                            color="custom.light" 
                            onClick={() =>  navigate(`/home`)}
                        >
                            Начало
                        </Link>
                        <Typography color="custom.main">{e.name}</Typography>
                    </Breadcrumbs>
                    <h2>{e.name}</h2>
                    {/* //props to be */}
                    < div className="categoryPageContainer" >
                        <div className="sideMenu">
                            {e.subCategory.map(e => <AnchorLink value={e.name} onClick={navigate(`/:globalCategory/${e.key}`)}/>)}
                        </div>
                        <div className="contentBody">
                            {/* // props to be inserted */}
                            {e.subCategory.map(e => <CategoryBanner
                                // path={`/${globalCategory}/category`}
                                key={e.key}
                                onClick={navigate(`/:globalCategory/${e.key}`)}
                                image={e.img}
                            />)}
                        </div>
                    </div>
                </>
            )}
        </Stack >

    )
}



// img1 = 'https://s13emagst.akamaized.net/layout/bg/images/db/23/34105.jpg' span1 = { 'Gaming мишки'}
// img2 = 'https://s13emagst.akamaized.net/layout/bg/images/db/23/34106.jpg' span2 = { 'Gaming подложки за мишка'}
// img3 = 'https://s13emagst.akamaized.net/layout/bg/images/db/23/34107.jpg' span3 = { 'Gaming столове'}
// img4 = 'https://s13emagst.akamaized.net/layout/bg/images/db/23/34108.jpg' span4 = { 'Gaming клавиатури'}
// img5 = 'https://s13emagst.akamaized.net/layout/bg/images/db/23/34109.jpg' span5 = { 'Gaming слушалки'}