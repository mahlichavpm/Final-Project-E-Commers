import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import * as React from 'react';
import {useState, useEffect} from 'react'
import styled from "@emotion/styled";
import { Autocomplete, InputBase, TextField, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
// import { width } from '@mui/system';
import './header.scss'

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
    let { key, subCategory, globalCategory } = useParams();
    const [searchProduct, setSearchProduct] = useState('')
    console.log(searchProduct);
    // productList.filter(el => el.title === e.target.value)[0]
    useEffect(()=>{
        const product = productList.filter(el => el.title === searchProduct)[0]
        console.log(productList.filter(el => el.title === searchProduct)[0]);
        if(product !== undefined){
            navigate(`/${product.globalCat}/${product.subCat}/${product.key}`)
        }
    }, [searchProduct])

    const handleOnClick = (e) => {
        const product = productList.filter(el => el.title === e.target.value)[0]
        if(product !== undefined){
            navigate(`/${product.globalCat}/${product.subCat}/${product.key}`)
        }
    }
    return (
        <Autocomplete
            id="free-solo-demo"
            sx={{ width: '100%' }}
            options={productList.map((option) => option.title)}
            renderInput={(params) =>
                // <Stack ref={params.InputProps.ref}>
                    <div ref={params.InputProps.ref} className='search' onClick={e => setSearchProduct(e.target.value)}>
                        {/* onClick={e => setSearchProduct(e.target.value)} */}
                        {/* <label {...params.InputLabelProps} >My Label </label> */}
                        <input {...params.inputProps} autoFocus className='label' onClick={e => setSearchProduct(e.target.value)}/>
                        <SearchOutlinedIcon />
                    </div>
                // </Stack>

            }
        />
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