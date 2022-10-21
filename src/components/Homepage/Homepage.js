import './Homepage.scss'
import Carousel from 'react-bootstrap/Carousel';
import bannerImg1 from '../../img/Banner_1.webp'
import bannerImg2 from '../../img/Banner_2.webp'
import bannerImg3 from '../../img/Banner_3.webp'
import bannerImg4 from '../../img/Banner_4.webp'
import ButtonLinkTwo from '../../reusibleComponents/ButtonLinkTwo';
import { Stack } from '@mui/system';
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
import ProductCardSlider from '../../reusibleComponents/ProductCardSlider';
import { Link } from 'react-router-dom';
import { Box, FilledInput, FormControl, Input, InputBase, OutlinedInput, TextField, Typography } from '@mui/material';


export default function Homepage(props) {
    return (
        <Box>
            <main className='homepageWrapper'>
                <Stack direction='row' sx={{ boxShadow: '0 2px 12px -4px rgb(0 0 0 / 10%)' }}>
                    <Stack alignItems='flex-start'
                        sx={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "none",
                                lg: "flex",
                                xl: "flex"
                            }
                        }}>
                        <Link className='homepageLink' to={'/products'}>
                            <ButtonLinkTwo
                                name='Телефони, Таблети & Лаптопи'
                                startIcon={<PhoneAndroidOutlinedIcon />}
                            >
                            </ButtonLinkTwo>
                        </Link>
                        <ButtonLinkTwo name='Компютри & Периферия' href={'/products'} startIcon={<ComputerOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='ТВ, Аудио & Фото' startIcon={<TvOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Gaming' startIcon={<VideogameAssetOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Големи електроуреди' startIcon={<KitchenOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Малки електроуреди' startIcon={<BlenderOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Мода' startIcon={<CheckroomOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Здраве и красота' startIcon={<FaceRetouchingNaturalOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Дом, Градина & Petshop' startIcon={<HomeOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Играчки & Детски артикули' startIcon={<SmartToyOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Спорт & свободно време' startIcon={<SportsKabaddiOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Авто & Направи си сам' startIcon={<DirectionsCarOutlinedIcon />} />
                        <ButtonLinkTwo color='custom' name='Книги, Офис & Храни' startIcon={<MenuBookOutlinedIcon />} />
                    </Stack>

                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel"
                                src={bannerImg1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel"
                                src={bannerImg2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel"
                                src={bannerImg3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel"
                                src={bannerImg4}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Stack>
                <ProductCardSlider />
                <ProductCardSlider />

            </main>

            <footer>
                <Stack direction='row'>
                    <Stack direction='column'>
                        <Typography variant='h4' >
                            Свали приложението на eMAG
                        </Typography>
                        <Typography variant='p' >
                            Попълни телефонния си номер и ще ти изпратим линк за
                            сваляне на приложението.
                        </Typography>
                    </Stack>
                    <Stack>
                        
                        <TextField placeholder='089 XXX XXXX'></TextField>
                    </Stack>

                </Stack>
            </footer>

        </Box >
    )
}

const DATA = [
    {
        "title": "Technical Communications Corporation",
        "descripton": "Alopecurus brachystachus M. Bieb.",
        "rating": 0,
        "price": "$6.75",
        "stock": 79,
        "ratingArr": [

        ]
    },
    {
        "title": "WageWorks, Inc.",
        "descripton": "Hydrocotyle americana L.",
        "rating": 4,
        "price": "$8.93",
        "stock": 16,
        "ratingArr": [

        ]
    },
    {
        "title": "RLI Corp.",
        "descripton": "Mirabilis nyctaginea (Michx.) MacMill.",
        "rating": 0,
        "price": "$7.94",
        "stock": 133,
        "ratingArr": [

        ]
    },
    {
        "title": "DXP Enterprises, Inc.",
        "descripton": "Trichomanes ovale (Fourn.) W. Boer",
        "rating": 2,
        "price": "$2.97",
        "stock": 78,
        "ratingArr": [

        ]
    },
    {
        "title": "Digi International Inc.",
        "descripton": "Phlox andicola E.E. Nelson ssp. parvula Wherry",
        "rating": 3,
        "price": "$2.45",
        "stock": 46,
        "ratingArr": [

        ]
    },
    {
        "title": "Hubbell Inc",
        "descripton": "Kalmia L.",
        "rating": 3,
        "price": "$6.57",
        "stock": 69,
        "ratingArr": [

        ]
    },
    {
        "title": "The AES Corporation",
        "descripton": "Tribulus cistoides L.",
        "rating": 4,
        "price": "$9.33",
        "stock": 19,
        "ratingArr": [

        ]
    },
    {
        "title": "HV Bancorp, Inc.",
        "descripton": "Erythronium californicum Purdy",
        "rating": 0,
        "price": "$4.03",
        "stock": 105,
        "ratingArr": [

        ]
    },
    {
        "title": "Discover Financial Services",
        "descripton": "Samadera indica Gaertn.",
        "rating": 0,
        "price": "$4.47",
        "stock": 91,
        "ratingArr": [

        ]
    },
    {
        "title": "IHS Markit Ltd.",
        "descripton": "Eustachys petraea (Sw.) Desv.",
        "rating": 5,
        "price": "$6.65",
        "stock": 100,
        "ratingArr": [

        ]
    },
    {
        "title": "PrivateBancorp, Inc.",
        "descripton": "Eriogonum baileyi S. Watson var. praebens (Gandog.) Reveal",
        "rating": 0,
        "price": "$9.25",
        "stock": 146,
        "ratingArr": [

        ]
    },
    {
        "title": "Templeton Dragon Fund, Inc.",
        "descripton": "Crassula connata (Ruiz & Pav.) A. Berger var. erectoides Bywater & Wickens",
        "rating": 1,
        "price": "$1.23",
        "stock": 91,
        "ratingArr": [

        ]
    },
    {
        "title": "Intuit Inc.",
        "descripton": "Galactia canescens Benth.",
        "rating": 2,
        "price": "$9.58",
        "stock": 154,
        "ratingArr": [

        ]
    },
    {
        "title": "Bonanza Creek Energy, Inc.",
        "descripton": "Aristolochia L.",
        "rating": 1,
        "price": "$3.32",
        "stock": 99,
        "ratingArr": [

        ]
    },
    {
        "title": "Synthesis Energy Systems, Inc.",
        "descripton": "Campylopus pyriformis (Schultz) Brid.",
        "rating": 4,
        "price": "$1.64",
        "stock": 81,
        "ratingArr": [

        ]
    },
    {
        "title": "Berkshire Hathaway Inc.",
        "descripton": "Pedicularis parryi A. Gray ssp. parryi",
        "rating": 2,
        "price": "$2.66",
        "stock": 90,
        "ratingArr": [

        ]
    },
    {
        "title": "China Rapid Finance Limited",
        "descripton": "Clermontia carinifera Levl., nom. inq.",
        "rating": 1,
        "price": "$1.20",
        "stock": 115,
        "ratingArr": [

        ]
    },
    {
        "title": "General Electric Capital Corporation",
        "descripton": "Melicope nealiae (B.C. Stone) T.G. Hartley & B.C. Stone",
        "rating": 4,
        "price": "$7.63",
        "stock": 37,
        "ratingArr": [

        ]
    },
    {
        "title": "Brookfield Asset Management Inc",
        "descripton": "Campylopus Brid.",
        "rating": 5,
        "price": "$5.46",
        "stock": 83,
        "ratingArr": [

        ]
    },
    {
        "title": "PPlus Trust",
        "descripton": "Galium mexicanum Kunth",
        "rating": 5,
        "price": "$4.74",
        "stock": 11,
        "ratingArr": [

        ]
    },
    {
        "title": "PTC Therapeutics, Inc.",
        "descripton": "Balsamorhiza incana Nutt.",
        "rating": 4,
        "price": "$5.23",
        "stock": 52,
        "ratingArr": [

        ]
    },
    {
        "title": "Baldwin & Lyons, Inc.",
        "descripton": "Desmodium cubense Griseb.",
        "rating": 0,
        "price": "$3.24",
        "stock": 42,
        "ratingArr": [

        ]
    },
    {
        "title": "DDR Corp.",
        "descripton": "Potamogeton pusillus L.",
        "rating": 2,
        "price": "$8.12",
        "stock": 14,
        "ratingArr": [

        ]
    },
    {
        "title": "Urban One, Inc. ",
        "descripton": "Croton texensis (Klotzsch) Müll. Arg. var. texensis",
        "rating": 0,
        "price": "$0.20",
        "stock": 116,
        "ratingArr": [

        ]
    },
    {
        "title": "CHS Inc",
        "descripton": "Arctotis stoechadifolia P.J. Bergius",
        "rating": 3,
        "price": "$1.05",
        "stock": 46,
        "ratingArr": [

        ]
    },
    {
        "title": "International Speedway Corporation",
        "descripton": "Psidium guajava L.",
        "rating": 2,
        "price": "$2.77",
        "stock": 115,
        "ratingArr": [

        ]
    },
    {
        "title": "ProShares Ultra Nasdaq Biotechnology",
        "descripton": "Caloplaca rubelliana (Ach.) Lojka",
        "rating": 2,
        "price": "$0.56",
        "stock": 124,
        "ratingArr": [

        ]
    },
    {
        "title": "Carriage Services, Inc.",
        "descripton": "Euphorbia corollata L.",
        "rating": 4,
        "price": "$5.50",
        "stock": 71,
        "ratingArr": [

        ]
    },
    {
        "title": "Pinnacle Entertainment, Inc.",
        "descripton": "Sphaerophorus globosus (Huds.) Vain.",
        "rating": 5,
        "price": "$7.17",
        "stock": 77,
        "ratingArr": [

        ]
    },
    {
        "title": "NeoGenomics, Inc.",
        "descripton": "Trichostigma octandrum (L.) H. Walt.",
        "rating": 5,
        "price": "$5.88",
        "stock": 64,
        "ratingArr": [

        ]
    },
    {
        "title": "Invesco Value Municipal Income Trust",
        "descripton": "Artemisia cana Pursh",
        "rating": 5,
        "price": "$4.73",
        "stock": 150,
        "ratingArr": [

        ]
    },
    {
        "title": "Merrill Lynch Depositor, Inc.",
        "descripton": "Lecanora horiza (Ach.) Lindasy",
        "rating": 4,
        "price": "$6.95",
        "stock": 128,
        "ratingArr": [

        ]
    },
    {
        "title": "Apollo Investment Corporation",
        "descripton": "Actaea rubra (Aiton) Willd. ssp. rubra",
        "rating": 2,
        "price": "$9.05",
        "stock": 16,
        "ratingArr": [

        ]
    },
    {
        "title": "Citizens, Inc.",
        "descripton": "Scutellaria antirrhinoides Benth.",
        "rating": 1,
        "price": "$1.73",
        "stock": 97,
        "ratingArr": [

        ]
    },
    {
        "title": "Westamerica Bancorporation",
        "descripton": "Grammitis hookeri (Brack.) Copeland",
        "rating": 2,
        "price": "$6.50",
        "stock": 40,
        "ratingArr": [

        ]
    },
    {
        "title": "Corbus Pharmaceuticals Holdings, Inc.",
        "descripton": "Trifolium striatum L.",
        "rating": 2,
        "price": "$5.37",
        "stock": 36,
        "ratingArr": [

        ]
    },
    {
        "title": "Hannon Armstrong Sustainable Infrastructure Capital, Inc.",
        "descripton": "Perovskia atriplicifolia Benth.",
        "rating": 2,
        "price": "$4.35",
        "stock": 31,
        "ratingArr": [

        ]
    },
    {
        "title": "Niagara Mohawk Holdings, Inc.",
        "descripton": "Halophila Thouars",
        "rating": 2,
        "price": "$6.65",
        "stock": 91,
        "ratingArr": [

        ]
    },
    {
        "title": "Royal Bank Scotland plc (The)",
        "descripton": "Linaria dalmatica (L.) Mill. ssp. macedonica (Griseb.) D.A. Sutton",
        "rating": 2,
        "price": "$5.81",
        "stock": 102,
        "ratingArr": [

        ]
    },
    {
        "title": "Digital Ally, Inc.",
        "descripton": "Ipomopsis spicata (Nutt.) V.E. Grant ssp. orchidacea (Brand) Wilken & R.L. Hartm. var. cephaloidea (Rydb.) Wilken & R.L. Hartm.",
        "rating": 2,
        "price": "$3.98",
        "stock": 24,
        "ratingArr": [

        ]
    },
    {
        "title": "Eagle Materials Inc",
        "descripton": "Pritchardia viscosa Rock",
        "rating": 5,
        "price": "$9.35",
        "stock": 78,
        "ratingArr": [

        ]
    },
    {
        "title": "Shutterstock, Inc.",
        "descripton": "Pseudolarix kaempferi (Lamb.) Gordon",
        "rating": 4,
        "price": "$5.55",
        "stock": 10,
        "ratingArr": [

        ]
    },
    {
        "title": "PowerShares DWA Technology Momenum Portfolio",
        "descripton": "Erythrina L.",
        "rating": 1,
        "price": "$5.14",
        "stock": 24,
        "ratingArr": [

        ]
    },
    {
        "title": "Sensata Technologies Holding N.V.",
        "descripton": "Oenothera deltoides Torr. & Frém. ssp. ambigua (S. Watson) W. Klein",
        "rating": 5,
        "price": "$2.24",
        "stock": 152,
        "ratingArr": [

        ]
    },
    {
        "title": "City Holding Company",
        "descripton": "Saccharum L.",
        "rating": 4,
        "price": "$3.72",
        "stock": 154,
        "ratingArr": [

        ]
    },
    {
        "title": "PCSB Financial Corporation",
        "descripton": "Elymus vulpinus Rydb.",
        "rating": 5,
        "price": "$1.42",
        "stock": 98,
        "ratingArr": [

        ]
    },
    {
        "title": "PowerShares Global Water Portfolio",
        "descripton": "Arabis lyallii S. Watson var. nubigena (J.F. Macbr. & Payson) Rollins",
        "rating": 3,
        "price": "$8.12",
        "stock": 76,
        "ratingArr": [

        ]
    },
    {
        "title": "Uniti Group Inc.",
        "descripton": "Phyllospadix torreyi S. Watson",
        "rating": 4,
        "price": "$0.44",
        "stock": 95,
        "ratingArr": [

        ]
    },
    {
        "title": "Syntel, Inc.",
        "descripton": "Pterygoneurum ovatum (Hedw.) Dix.",
        "rating": 5,
        "price": "$5.84",
        "stock": 105,
        "ratingArr": [

        ]
    },
    {
        "title": "Pointer Telocation Ltd.",
        "descripton": "Eremochloa Büse",
        "rating": 1,
        "price": "$0.80",
        "stock": 45,
        "ratingArr": [

        ]
    }
]