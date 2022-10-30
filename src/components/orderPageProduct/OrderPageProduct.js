import './OrderPageProduct.scss'
export default function OrderProductListing(props) {

    return (
        <div className="orderProductContainer">
            <span>{props.qty}x</span><span>{props.title}</span><span>{props.price}</span>
        </div>
    )

}