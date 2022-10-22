import Header from "../../components/header/Header";
import "./ProductPage.scss";
import img from "../../img/banner_5.jpeg";
import { Box, Container } from "@mui/system";
import ProductButton from "../../components/buttons/ProductButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Footer from "../../components/footer/Footer";
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import StarsSharpIcon from '@mui/icons-material/StarsSharp';

export default function ProductPage(props) {
  return (
    <>
      <Header />
      <div>
        <img className="bannerImg" src={img} alt='img'/>
        <div className="productContainer">
          <Container maxWidth="xl">
            <Box sx={{ bgcolor: "", height: "100vh" }}>
              <div className="product">
                <h4>Монитор Gaming Samsung Odyssey Neo G7 32", VA, Извит, 4K UHD, 1ms, 165Hz, Dsipaly Port, FreeSync Premium Pro, Vesa, Black, LS32BG750NUXEN</h4>
                <div className="priceDiv">
                    <span className="price">2.369,99 лв.</span> <br/>
                    <span className='deliveryText'>Предлаган и с доставка от: eMAG</span><br/>
                    <span className="availability">в наличност</span>
                    <ProductButton name='Добави в количката' startIcon={<ShoppingCartOutlinedIcon/>}/>
                </div>
                <div className="imgGalery">
                    <img src="https://s13emagst.akamaized.net/products/47963/47962589/images/res_fe87d6d6ba067ff9eb970984bf055585.jpg?width=450&height=450&hash=EB32526B87898425604133CEA813EB48" alt="qnko"/>
                </div>
                <div className="deliveryInfo">
                  <p>Доставка в: София-Град (Столична)</p>
                  <LocalShippingTwoToneIcon/>
                  <span>  Доставка</span><br/>
                  <span className="free">Безплатна</span><br/><br/>
                  <StarsSharpIcon/>
                  <span>  Ползи:</span><br/>
                  <ul >
                    <li> Проверка на пратката</li>
                    <li> 30 дни право на връщане</li>
                    <li> Включена гаранция: 24 месеца</li>
                  </ul>
                </div>
              </div>
            </Box>
          </Container>
        </div>
      </div>
      <Footer/>
    </>
  );
}
