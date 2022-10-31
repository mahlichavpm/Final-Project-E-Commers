import CategoryBanner from './categoryBanner/CategoryBanner.js';
import './CategoryPage.scss';
import AnchorLink from '../../components/link/AnchorLink.js';
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';

export default function CategoryPage() {
    const categories = useSelector(state => state.categories.categories);
    const navigate = useNavigate()
    let { globalCategory, subCategory } = useParams()

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
            {categories.slice().filter(e => e.key === globalCategory).map((e, i) =>
                <div key = {i}>
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
                    < div className="categoryPageContainer" >
                        <div className="sideMenu">
                            {e.subCategory.map(e => <AnchorLink 
                                value={e.name} 
                                key={e.key}  
                                onClick={() => navigate(`/${globalCategory}/${e.key}`)}
                            />)}
                        </div>
                        <div className="contentBody">
                            {e.subCategory.map((e, i) => <CategoryBanner
                                key={i}
                                onClick={() => navigate(`/${globalCategory}/${e.key}`)}
                                image={e.img}
                            />)}
                        </div>
                    </div>
                </div>
            )}
        </Stack >

    )
}