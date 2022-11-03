import { Button, styled } from "@mui/material";

export default function ButtonLinkFooter (props) {
    const Link = styled(Button)({
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