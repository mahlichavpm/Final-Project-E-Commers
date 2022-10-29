import { TextField } from '@mui/material';
import './OrderPage.scss';

export default function OrderPage() {

    return (
        <div className='orderPageContainer'>
            <div className='orderInfoWrapper'>
                <h2>Финализиране на поръчката</h2>
                <div className='orderInfo'>
                    <div className='userInfoContainer'> 
                        <TextField
              variant="standard"
              disabled
              size="small"
              id={"name"}
              width="true"
              value={'ivan'}
              type={"text"}
              label={"Име и Фамилия"}
            />
            <TextField
              variant="standard"
              type={"text"}
              size="small"
              id={"phone"}
              width="true"
              value={'0987'}
              label={"Телефон"}
            />
                        <TextField variant='standard'/>
                        <TextField variant='standard'/>
                        <TextField variant='standard'/>
                        <TextField variant='standard'/>
                    </div>
                    <div className='orderInfoContainer'>
                        <TextField />
                    </div>
                </div>
            </div>
        </div>
    )
}