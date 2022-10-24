import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CartPageProduct from "../../components/cartPageProduct/cartPageProduct";

export default function Love (props) {


    return(
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
            Любими продукти
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
            </Stack>
        </Stack>
    </Stack>
    )
}