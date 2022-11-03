import OrderProductListing from '../../components/orderPageProduct/OrderPageProduct';
import './OrderPage.scss';
import ProductButton from "../../components/buttons/ProductButton";
import { useDispatch, useSelector } from 'react-redux';
import { finalizeOrder } from '../../store/activeUserSlice';
import { useNavigate } from 'react-router';

export default function OrderPage() {

    const users = useSelector(state => state.activeUser.users)
    const activeUser = JSON.parse(localStorage.getItem('loggedUser'));
    const user = users.find(e => e.username === activeUser);
    const productList = useSelector(state => state.product.product);
    const cartList = useSelector(state => state.activeUser.cart)
    const renderList = [];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    (() => {
        for(let i = 0; i < productList.length; i++){
            for(let x = 0; x < cartList.length; x++){
                if(productList[i].key === cartList[x].id){
                    renderList.push(productList[i]);
                }
            }
        }
    })();

    const getQty = (e) => {
            let qty = 0;
            cartList.forEach(el => {
                if(e.key === el.id){
                    qty = el.qty
                }
            },e)
            return qty;
    }

    const getPrice = (e) => {
        let price = 0;
        cartList.forEach(el => {
            if(e.key === el.id){
                price = el.qty * e.price
            }
        },e)
        return price;
}
    

    const addressValidation = () => {
        if(user.address.city && user.address.manipulacity && user.address.address1 && user.address.address2){
            return true;
        } 
        return false;
    }

    const handleFinalizeOrder = () => {
        dispatch(finalizeOrder());
        navigate('/home');
    }

    const addressFlag = addressValidation()


    return (
        <div className='orderPageContainer'>
            <div className='orderInfoWrapper'>
                <h2>Финализиране на поръчката</h2>
                <div className='orderInfo'>
                    <div className='userInfoContainer'> 
                        {addressFlag ? <>
                            <div>
                        <p className='heading'>Име и фамилия:</p>
                        <p>{user.name}</p>
                        <p className='heading'>Мобилен телефон:</p>
                        <p>{user.phone}</p>
                        </div>
                        <div>
                        <p className='heading'>Област:</p>
                        <p>{user.address.manipulacity}</p>
                        <p className='heading'>Град:</p>
                        <p>{user.address.city}</p>
                        </div>
                        <div>
                        <p className='heading'>Адрес:</p>
                        <p>{user.address.address1}</p>
                        <p>{user.address.address2}</p>
                        </div>
                        </> : <p className='heading'>Моля, попълнете личната информация в профила си.</p>}
                    </div>
                    <div className='orderInfoContainer'>
                        {renderList.map((e,id) =>
                  <OrderProductListing
                    qty={getQty(e)}
                    title={e.title}
                    price={(getPrice(e)).toFixed(2)}
                    key={id}
                  ></OrderProductListing>)}
                    </div>
                </div>
                <div>
                <ProductButton name='Завърши поръчката' onClick={() => {handleFinalizeOrder()}} />
                </div>
            </div>
        </div>
    )
}