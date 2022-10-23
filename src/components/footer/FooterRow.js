import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ButtonLinkFooter from '../buttons/ButtonLinkFooter';
import './Footer.scss';

export default function FooterRow(props) {
    return (
        <Stack
            direction='column'
            alignItems='flex-start'
            spacing={0}
        >
            <Typography
                variant='h6'
                color='primary.footer'
            >
                Услуги
            </Typography>
            <ButtonLinkFooter name={props.linkOne || ''} />
            <ButtonLinkFooter name={props.linkTwo || ''} />
            <ButtonLinkFooter name={props.linkThree || ''} />
            <ButtonLinkFooter name={props.linkFour || ''} />
            <ButtonLinkFooter name={props.linkFive || ''} />
            <Stack
                direction='row'
                spacing={2}
            >
                <img
                    alt={props.imgOneAlt || 'image'}
                    src={props.imgOneSrc || ''}
                    className='card-img'
                />
                <img
                    alt={props.imgTwoAlt || 'image'}
                    src={props.imgTwoSrc || ''}
                    className='card-img'
                />
                <img
                    alt={props.imgThreeAlt || 'image'}
                    src={props.imgThreeSrc || ''}
                    className='card-img'
                />
            </Stack>
        </Stack>
    )
}