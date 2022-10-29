import "./ProductPage.scss";
import { Box, Container } from "@mui/system";
import ProductButton from "../../components/buttons/ProductButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import StarsSharpIcon from '@mui/icons-material/StarsSharp';
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useState } from "react";

export default function ProductPage() {
  const productList = useSelector(state => state.product.product);
  let {key, subCategory} = useParams()
  const [sortedProductList, setSortedProductList] = useState(productList.slice()
    .filter(e => e.subCat === subCategory)
    );
  
  
  return (
    <>
      {sortedProductList.filter(e => e.key === key).map(e =>
        <div>
          <div className="productContainer">
            <Container maxWidth="xl">
              <Box sx={{ bgcolor: "", height: "100vh" }}>
                <div className="product">
                  <h4>{e.title}</h4>
                  <div className="priceDiv">
                    <span className="price">{e.price}</span> <br />
                    <span className='deliveryText'>Предлаган и с доставка от: eMAG</span><br />
                    <span className="availability">в наличност</span>
                    <ProductButton name='Добави в количката' startIcon={<ShoppingCartOutlinedIcon />} />
                  </div>
                  <div className="imgGalery">
                    <img src={e.img.src} width='400' alt="qnko" />
                  </div>
                  <div className="deliveryInfo">
                    <p>Доставка в: София-Град (Столична)</p>
                    <LocalShippingTwoToneIcon />
                    <span>  Доставка</span><br />
                    <span className="free">Безплатна</span><br /><br />
                    <StarsSharpIcon />
                    <span>  Ползи:</span><br />
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
        </div>)}
    </>
  );
}
