import { Button, styled } from "@mui/material";

export default function ButtonLinkFooter (props) {
    const Link = styled(Button)({
        // color: 'custom.main',
        fontSize: '12px',
        textTransform: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    })
    return(
        <Link 
            color='custom'
            variant='text'
        >
        {props.name}
        </Link>
    )
}