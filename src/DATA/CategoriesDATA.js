import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import BlenderOutlinedIcon from '@mui/icons-material/BlenderOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import FaceRetouchingNaturalOutlinedIcon from '@mui/icons-material/FaceRetouchingNaturalOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SportsKabaddiOutlinedIcon from '@mui/icons-material/SportsKabaddiOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

export const CategoriesDATA = [
    {
        name: 'Телефони, Таблети & Лаптопи',
        key: 'telefoni-tableti-laptopi',
        icon: <PhoneAndroidOutlinedIcon/>,
        subCategory: [
            {
                name: 'Мобилни телефони',
                key: 'mobilni-telefoni',
                img: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.og.jpg?202209271942'
            },
            {
                name: 'Калъфи за мобилни телефони',
                key: 'kalafi-za-mobilni-telefoni',
                img: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_iPhone_14_Pro_Huelle_Lacoste31.jpeg'
            },
            {
                name: 'Защитни фолиа за мобилни телефони',
                key: 'zashtitni-folia-za-mobilni-telefoni',
                img: 'https://www.mietubl.com/system/u/m2206/0119190238.jpg'
            },
            {
                name: 'Зарядни устройства за мобилни телефони',
                key: 'zaryadni-ustroystva-za-mobilni-telefoni',
                img: 'https://cdn.mos.cms.futurecdn.net/T88ziXBkzHe8uxCGfKKHn8.jpg'
            },
            {
                name: 'Батерии за мобилни телефони',
                key: 'baterii-za-mobilni-telefoni',
                img: 'https://gsmplan.com/wp-content/uploads/2021/02/en-section06-img.png'
            },
        ]
    },
    {
        name: 'Компютри & Периферия',
        key: 'kompyutri-periferiya',
        icon: <ComputerOutlinedIcon />,
        subCategory: [
            {
                name: 'Процесори',
                key: 'procesori',
                img: 'https://www.macworld.com/wp-content/uploads/2022/10/m1-chip-features-1.jpg?quality=50&strip=all'
            },
            {
                name: 'Видео карти',
                key: 'video-karti',
                img: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_M1-Pro-M1-Max_M1-Max_10182021_big_carousel.jpg.slideshow-xlarge_2x.jpg'
            },
            {
                name: 'Настолни компютри',
                key: 'nastolni-kompyutri',
                img: 'https://desktop.bg/system/images/260712/normal/apple_mac_pro.jpg'
            },
            {
                name: 'LCD & LED Монитори',
                key: 'lcd-led-monitori',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/pro-display-og-image?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1573689238241'
            },
            {
                name: 'Мониторни аксесоари',
                key: 'monitorni-aksesoari',
                img: 'https://desktop.bg/system/images/333686/original/mmmp3zma.jpg'
            },
        ]
    },
    {
        name: 'ТВ, Аудио & Фото',
        key: 'tv-audio-foto',
        icon: <TvOutlinedIcon />,
        subCategory: [
            {
                name: 'Телевизори',
                key: 'televizori',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//18/26735.jpg'
            },
            {
                name: 'Стойки',
                key: 'stoyki',
                img: 'https://besto.bg/wp-content/uploads/2019/07/stojka-za-televizor.jpg'
            },
            {
                name: 'Кабели и адаптери',
                key: 'kabeli-i-adapteri',
                img: 'https://dice.bg/content/pics/26598_kanex-digital-audio-adapter-adapter-za-svyrzvane-na-apple-tv-4th-gen-kym-televizor-s-hdmi-i-audio-sistema-s-optichen-vhod_-666642148.jpg'
            },
            {
                name: 'Дистанционни',
                key: 'distancionni',
                img: 'https://cdncloudcart.com/10875/product_categories/images/368/368_600x600.jpeg?1659706145'
            },
            {
                name: 'TV тунери',
                key: 'tv-tuneri',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1664896361164'
            },
        ]
    },
    {
        name: 'Gaming',
        key: 'gaming',
        icon: <VideogameAssetOutlinedIcon />,
        subCategory: [
            {
                name: 'Конзоли & игри',
                key: 'konzoli-igri',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//20/29408.jpg'
            },
            {
                name: 'Геймпадове, Джойстици и Слушалки',
                key: 'geympadove-djoystici-i-slushalki',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//20/29416.jpg'
            },
            {
                name: 'Игри конзоли pc',
                key: 'igri-konzoli-pc',
                img: 'https://gepig.com/game_cover_460w/432.jpg'
            },
            {
                name: 'PC компоненти',
                key: 'pc-komponenti',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//20/29414.jpg'
            },
            {
                name: 'Gaming мишки',
                key: 'gaming-mishki',
                img: 'http://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/peripherals/input-devices/dell/mouse/aw610m/pdp/mouse_aw_aw610m_white_responisve_pdp_hero.jpg?fmt=jpg'
            },
        ]
    },
    {
        name: 'Големи електроуреди',
        key: 'golemi-elektrouredi',
        icon: <KitchenOutlinedIcon />,
        subCategory: [
            {
                name: '',
                key: '',
                img: ''
            }
        ]
    },
    {
        name: 'Малки електроуреди',
        key: 'malki-elektrouredi',
        icon: <BlenderOutlinedIcon />,
        subCategory: [
            {
                name: '',
                key: '',
                img: ''
            },
        ]
    },
    {
        name: 'Мода',
        key: 'moda',
        icon: <CheckroomOutlinedIcon />,
        subCategory: [
            {
                name: 'Дамски чанти',
                key: 'damski-chanti',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//32/48144.jpg'
            },
            {
                name: 'Мъжки аксесоари',
                key: 'muzhki-aksesoari',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//32/48202.jpg'
            },
            {
                name: 'Раници',
                key: 'ranici',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//32/48201.jpg'
            },
            {
                name: 'Дънки',
                key: 'dunki',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//34/51648.jpg'
            },
            {
                name: 'Мъжки часовници',
                key: 'muzhki-chasovnici',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//32/48200.jpg'
            },


            
        ]
    },
    {
        name: 'Здраве и красота',
        key: 'zdrave-i-krasota',
        icon: <FaceRetouchingNaturalOutlinedIcon />,
        subCategory: [
            {
                name: 'Епилатори',
                key: 'epilatori',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//17/25085.jpg'
            },
            {
                name: 'Термометри',
                key: 'termometri',
                img: 'https://besto.bg/wp-content/uploads/2020/07/detski-termometri.jpg'
            },
            {
                name: 'Масажори',
                key: 'masajori',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//17/25090.jpg'
            },
            {
                name: 'Сешоари',
                key: 'seshoari',
                img: 'https://bgchoice.com/wp-content/uploads/2020/11/%D0%BD%D0%B0%D0%B9-%D0%B4%D0%BE%D0%B1%D1%80%D0%B8-%D1%81%D0%B5%D1%88%D0%BE%D0%B0%D1%80%D0%B8.jpg'
            },
            {
                name: 'Машинки за подстригване и тримери',
                key: 'mashinki-za-podstrigvane-i-trimeri',
                img: 'https://s13emagst.akamaized.net/layout/bg/images/db//17/25091.jpg'
            },
        ]
    },
    {
        name: 'Дом, Градина & Petshop',
        key: 'dom-gradina-i-petshop',
        icon: <HomeOutlinedIcon />,
        subCategory: [
            {
                name: 'Бюра',
                key: 'biura',
                img: 'https://www.gaminggear.bg/uploads/com_article/gallery/c05719c86391627bdcf94c981497a985a5af79ea.png'
            },
            {
                name: 'Килими',
                key: 'kilimi',
                img: 'https://videnov.bg/uploads/product_category/images/Vid_Deko_zone_LP_category_kilimi_banner_2.png'
            },
            {
                name: 'Дивани',
                key: 'divani',
                img: 'https://veko.bg/image/cache/catalog/01_Sofi_Sun-21_C1_R-1024x768.jpg'
            },
            {
                name: 'Тенджери',
                key: 'tendjeri',
                img: 'https://solingen-outlet.com/images/mi.JPG'
            },
            {
                name: 'Градински мебели',
                key: 'gradinski-mebeli',
                img: 'https://jysk.bg/sites/jysk.bg/files/styles/full_optimized/public/image/tooltips/2022-02/3795000-VONGE.jpg?itok=IBG2jHR6'
            },
        ]
    },
    {
        name: 'Играчки & Детски артикули',
        key: 'igrachki-detski-artikuli',
        icon: <SmartToyOutlinedIcon />,
        subCategory: [
            {
                name: '',
                key: '',
                img: ''
            }
        ]
    },
    {
        name: 'Спорт & свободно време',
        key: 'sport-svobodno-vreme',
        icon: <SportsKabaddiOutlinedIcon />,
        subCategory: [
            {
                name: '',
                key: '',
                img: ''
            }
        ]
    },
    {
        name: 'Авто & Направи си сам',
        key: 'avto-napravi-si-sam',
        icon: <DirectionsCarOutlinedIcon />,
        subCategory: [
            {
                name: '',
                key: '',
                img: ''
            }
        ]
    },
    {
        name: 'Книги, Офис & Храни',
        key: 'knigi-ofis-hrani',
        icon: <MenuBookOutlinedIcon />,
        subCategory: [
            {
                name: '',
                key: '',
                img: ''
            }
        ]
    },
];
