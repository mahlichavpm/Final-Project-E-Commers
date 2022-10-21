// const needData = [
//     [props.Data[0], props.Data[1], props.Data[2], props.Data[3]],
//     [props.Data[4], props.Data[5], props.Data[6], props.Data[7]],
//     [props.Data[8], props.Data[9], props.Data[10], props.Data[11]],
//     [props.Data[12], props.Data[13], props.Data[14], props.Data[15]],
//     [props.Data[16], props.Data[17], props.Data[18], props.Data[19]]
// ];
// needData.forEach(e => console.log(e))  

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, Slide } from '@mui/material'
import ProductCard from './ProductCard';
import { Stack } from '@mui/system';

export default function Example(props) {
    // const needData = [
    //     // [props.Data[0], props.Data[1], props.Data[2], props.Data[3]],
    //     [props.Data[4], props.Data[5], props.Data[6], props.Data[7]],
    //     [props.Data[8], props.Data[9], props.Data[10], props.Data[11]],
    //     [props.Data[12], props.Data[13], props.Data[14], props.Data[15]],
    //     [props.Data[16], props.Data[17], props.Data[18], props.Data[19]]
    // ];
    return (
        <>
            <Typography variant='h1'>Stava</Typography>
            <Carousel
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                animation='slide'
                navButtonsWrapperProps={
                    {
                        className: 'button',
                        style: React.CSSProperties
                    } & React.AriaAttributes
                }
            >

                {/* <Stack direction='row' spacing={2}>
                    {needData.map(
                        (e,i) => <ProductCard 
                                key={i}
                                title={e.title} 
                                description={e.description}
                                rating={e.rating}

                            > </ProductCard>
                    )}
                </Stack> */}
                <Stack direction='row' spacing={2}>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </Stack>
            </Carousel>
        </>
    )
}
