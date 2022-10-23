import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Button from "../../components/buttons/ProductButton";
import CartPageProduct from "../../components/cartPageProduct/cartPageProduct";

export default function Cart(props) {
    return (
        <Stack
            sx={{
                maxWidth: '1240px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '20px',
                paddingRight: '20px',
                position: 'relative',
                backgroundColor: 'primary.background'
            }}
            spacing={4}
        >
            <Typography sx={{marginTop: 2}} variant="h4">
                Количка
            </Typography>
            <Stack
                direction='row'
                spacing={4}
            >
                <Stack
                    spacing={2}
                    sx={{
                        width: '100%',
                    }}
                >
                    <CartPageProduct />
                    <CartPageProduct />
                    <CartPageProduct />
                    <CartPageProduct />
                    <CartPageProduct />
                    <CartPageProduct />
                    <CartPageProduct />
                    <CartPageProduct />
                    <CartPageProduct />
                    <CartPageProduct />
                </Stack>
                <Stack
                    spacing={2}
                    sx={{
                        border: '1px solid  rgba(34, 34, 34, 0.2)',
                        borderRadius: '8px',
                        width: '400px',
                        padding: '8px',
                        maxHeight: '245px',
                        position: 'sticky',
                        top: '133px',
                        backgroundColor: 'white',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'custom.main',
                            fontWeight: 'bold'
                        }}
                    >
                        Информация за поръчката
                    </Typography>
                    <Stack>
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                        >
                            <Typography
                                variant="subtitle"
                                sx={{
                                    color: 'custom.light'
                                }}
                            >
                                Всички продукти:
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'custom.light'
                                }}
                            >
                                {props.sumPrice || '200'} лв.
                            </Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                        >
                            <Typography
                                variant="subtitle"
                                sx={{
                                    color: 'custom.light'
                                }}
                            >
                                Цена за доставка:
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'custom.light'
                                }}
                            >
                                {props.sumPrice > '100' ? '0' : '10'} лв.
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'custom.main',
                            fontWeight: 'bold'
                        }}
                    >
                        Общо: {props.sumPrice > '100' ? props.sumPrice : (props.sumPrice + '10')} лв.
                    </Typography>
                    <Button name='Продължи' />
                </Stack>
            </Stack>
        </Stack>
    )
}