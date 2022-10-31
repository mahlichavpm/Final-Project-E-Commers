import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import * as React from 'react';
import styled from "@emotion/styled";
import { Autocomplete, InputBase, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { width } from '@mui/system';

const Search = styled("div")(({ theme }) => ({
    textAlign: "center",
    color: "#666666",
    padding: "0 10px",
    display: "flex",
    border: "1px solid rgb(0, 130, 230)",
    borderRadius: "16px",
    height: "34px",
    width: "100%",
    margin: "0 40px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function AutocomplitedSearch(props) {
    const productList = useSelector(state => state.product.product);
    const navigate = useNavigate()
    let { subCategory, globalCategory } = useParams()
    return (


        <TextField sx={{width: '100%', borderRadius: "16px", backgroundColor:'primary', }}></TextField>
        //     <Autocomplete
        //     id="free-solo-demo"
        //     // freeSolo
        //     options={products.map((option) => option.title)}
        //     renderInput={(params) => <TextField {...params} label="freeSolo" />}
        //     width
        //   />
        // <Autocomplete

        //     id="free-solo-demo"
        //     // freeSolo
        //     options={productList.map((option) => option.title)}
        //     sx={{
        //         textAlign: "center",
        //         color: "#666666",
        //         padding: "0 10px",
        //         display: "flex",
        //         border: "1px solid rgb(0, 130, 230)",
        //         borderRadius: "16px",
        //         height: "34px",
        //         width: "100%",
        //         margin: "0 40px",
        //         alignItems: "center",
        //         justifyContent: "space-between",
        //     }}
        //     renderInput={(params) =>
        //         {<Search sx={{
        //             display: {
        //                 xs: "none",
        //                 sm: "none",
        //                 md: "flex",
        //                 lg: "flex",
        //                 xl: "flex"
        //             }
        //         }}>
        //             <InputBase fullWidth={true}
        //                 placeholder='Какво търсиш днес?...'
        //                 autoFocus={true} />
        //             <SearchOutlinedIcon color='primary' />
        //         </Search>}
        //     }/>
        // <TextField
        //     // sx={{
        //     //     border: 'none',

        //     //         textAlign: "center",
        //     //         color: "#666666",
        //     //         padding: "0 10px",
        //     //         display: "flex",
        //     //         border: "1px solid rgb(0, 130, 230)",
        //     //         borderRadius: "16px",
        //     //         height: "34px",
        //     //         width: "100%",
        //     //         margin: "0 40px",
        //     //         alignItems: "center",
        //     //         justifyContent: "space-between",

        //     // }}
        //     variant='filled'
        //     // onClick = {(e) => navigate(`/${globalCategory}/${subCategory}/${e.target.value}`)}
        //     onInput= {e => console.log(e.target.value)}
        //     fullWidth={true} {...params} />}


    )
}




// const products = [{ "title": "Tea - Earl Grey", "price": 11 },
// { "title": "Lemonade - Island Tea, 591 Ml", "price": 42 },
// { "title": "Pie Filling - Apple", "price": 13 },
// { "title": "Hot Chocolate - Individual", "price": 66 },
// { "title": "Sour Puss Raspberry", "price": 87 },
// { "title": "Juice Peach Nectar", "price": 78 },
// { "title": "Spring Roll Wrappers", "price": 80 },
// { "title": "Beef - Short Loin", "price": 14 },
// { "title": "Tia Maria", "price": 59 },
// { "title": "Filter - Coffee", "price": 7 },
// { "title": "Oil - Avocado", "price": 26 },
// { "title": "Bagelers - Cinn / Brown Sugar", "price": 85 },
// { "title": "Bread - English Muffin", "price": 69 },
// { "title": "Oil - Hazelnut", "price": 37 },
// { "title": "Bread - Flat Bread", "price": 46 },
// { "title": "Phyllo Dough", "price": 24 },
// { "title": "Venison - Ground", "price": 21 },
// { "title": "Vinegar - Rice", "price": 35 },
// { "title": "Cookie - Dough Variety", "price": 48 },
// { "title": "Yogurt - Banana, 175 Gr", "price": 45 },
// { "title": "Milk - Chocolate 500ml", "price": 46 },
// { "title": "Wine - Chardonnay South", "price": 23 },
// { "title": "Soap - Hand Soap", "price": 12 },
// { "title": "Molasses - Fancy", "price": 78 },
// { "title": "Bacardi Limon", "price": 76 },
// { "title": "Coffee Caramel Biscotti", "price": 36 },
// { "title": "Corn Syrup", "price": 81 },
// { "title": "Wine - Red, Cabernet Sauvignon", "price": 53 },
// { "title": "Cheese - Fontina", "price": 73 },
// { "title": "Tea - Orange Pekoe", "price": 100 },
// { "title": "Chicken Thigh - Bone Out", "price": 61 },
// { "title": "Mace", "price": 69 },
// { "title": "Rice - 7 Grain Blend", "price": 76 },
// { "title": "Fireball Whisky", "price": 18 },
// { "title": "Juice - Apple, 500 Ml", "price": 59 },
// { "title": "Wine - Prosecco Valdobiaddene", "price": 19 },
// { "title": "Jack Daniels", "price": 14 },
// { "title": "Cinnamon - Stick", "price": 67 },
// { "title": "Fork - Plastic", "price": 90 },
// { "title": "Wine - Valpolicella Masi", "price": 53 },
// { "title": "Turnip - Mini", "price": 7 },
// { "title": "Ecolab - Hobart Upr Prewash Arm", "price": 90 },
// { "title": "Appetizer - Shrimp Puff", "price": 97 },
// { "title": "Banana - Leaves", "price": 84 },
// { "title": "Veal - Heart", "price": 51 },
// { "title": "Table Cloth 54x72 Colour", "price": 90 },
// { "title": "Sauce - Vodka Blush", "price": 44 },
// { "title": "Wine - Gewurztraminer Pierre", "price": 81 },
// { "title": "Wine - Shiraz Wolf Blass Premium", "price": 21 },
// { "title": "Snapple Raspberry Tea", "price": 18 }];