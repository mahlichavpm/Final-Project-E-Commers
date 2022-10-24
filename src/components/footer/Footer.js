import { TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ButtonLinkFooter from '../buttons/ButtonLinkFooter';
import './Footer.scss';

export default function Footer() {
  return (
    <>
    
    <Stack
      sx={{
        backgroundColor: '#e7eff8',
        maxWidth: '1240px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '20px',
        paddingLight: '20px'
      }}
      direction='row'
      spacing={2}
      justifyContent='space-between'
    >
      <Stack
        direction='column'
        alignItems='flex-start'
        spacing={0}
      >
        <Typography
          variant='h6'
          color='primary.footer'
          sx={{
            margin:'20px 0 10px'
          }}
        >
          Услуги
        </Typography>
        <ButtonLinkFooter name='Проверка на пратката' />
        <ButtonLinkFooter name='30 дни право на връщане' />
        <ButtonLinkFooter name='Гаранция и сервиз' />
        <ButtonLinkFooter name='Плащане на вноски, чрез eCREDIT' />
        <Stack
          direction='row'
          spacing={2}
        >
        </Stack>
      </Stack>
      {/* ---------------ROW 2------------------ */}
      <Stack
        direction='column'
        alignItems='flex-start'
        spacing={0}
      >
        <Typography
          variant='h6'
          color='primary.footer'
          sx={{
            margin:'20px 0 10px'
          }}
        >
          Поръчки и доставка
        </Typography>
        <ButtonLinkFooter name='Как да поръчам онлайн' />
        <ButtonLinkFooter name='Доставка на поръчките' />
        <ButtonLinkFooter name='Блог' />
      </Stack>
      {/* ---------------ROW 3------------------ */}
      <Stack
        direction='column'
        alignItems='flex-start'
        spacing={0}
      >
        <Typography
          variant='h6'
          color='primary.footer'
          sx={{
            margin:'20px 0 10px'
          }}
        >
          Връзка с нас
        </Typography>
        <ButtonLinkFooter name='Контакт'/>
        <ButtonLinkFooter name='Формуляр поправка на продукт'/>
        <ButtonLinkFooter name='Формуляр връщане на продукт'/>
        <ButtonLinkFooter name='Формуляр въпроси и рекламации'/>
      </Stack>
      {/* ---------------ROW 4------------------ */}
      <Stack
        direction='column'
        alignItems='flex-start'
        spacing={0}
      >
        <Typography
          variant='h6'
          color='primary.footer'
          sx={{
            margin:'20px 0 10px'
          }}
        >
          eMAG.bg
        </Typography>
        <ButtonLinkFooter name='Политика за използване на бисквитки'/>
        <ButtonLinkFooter name='Условия за ползване - актуализирани'/>
        <ButtonLinkFooter name='Лични данни'/>
        <ButtonLinkFooter name='Платформа за ОРС'/>
        <ButtonLinkFooter name='Black Friday'/>
      </Stack>
    </Stack>
    <div className="footer">
            <div className="justify-content-center d-flex">
           <div className="card-name">
               <img
                  alt="mastercard"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
                />
              </div>
              <div className="card-name">
                <img
                  alt="visa"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                />
              </div>
              <div className="card-name">
                <img
                  alt="paypal"
                  src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
                />
              </div>
              <div className="card-name">
                <img
                  alt="express"
                  src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
                />
              </div>
              <div className="card-name">
                <img
                  alt="discover"
                  src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
                />
              </div>
            </div>
          </div>
    </>

  )
}

