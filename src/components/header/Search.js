import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import * as React from 'react';
import {useState, useEffect} from 'react'
import { Autocomplete } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './header.scss'


export default function AutocomplitedSearch() {
    const productList = useSelector(state => state.product.product);
    const navigate = useNavigate()
    const [searchProduct, setSearchProduct] = useState('');

    useEffect(()=>{
        const product = productList.filter(el => el.title === searchProduct);
        if(product[0]){
            navigate(`/${product[0].globalCat}/${product[0].subCat}/${product[0].key}`)
        }
    }, [searchProduct])


    return (
        <Autocomplete
            id="free-solo-demo"
            sx={{ width: '100%' }}
            options={productList.map((option) => option.title)}
            renderInput={(params) =>
                    <div ref={params.InputProps.ref} className='search' >
                        <input {...params.inputProps} className='label' onKeyUp={e => setSearchProduct(e.target.value)}/>
                        <SearchOutlinedIcon />
                    </div>
            }
        />
    )
}