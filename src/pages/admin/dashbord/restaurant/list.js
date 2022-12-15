import axios from '@/lib/axios'
import { useState } from 'react'
import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import WrapperGrid from '@/components/Parts/Atoms/Admin/WrapperGrid'
import ContentsGrid from '@/components/Parts/Atoms/Admin/ContentsGrid'
import TitleGrid from '@/components/Parts/Atoms/Admin/TitleGrid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)
const list = props => {
  // const [restaurantList, setRestaurantList] = useState()
  const restaurantList = props.res
  console.log(restaurantList)
  const [open, setOpen] = useState(true)
  return (
    <>
      <>
        <AdminMenu open={open} setOpen={setOpen} />
        <WrapperGrid open={open}>
          <TitleGrid title="店舗一覧" />
          <ContentsGrid>
            <Grid container spacing={2}>
              {restaurantList.restaurants.length > 0 ? (
                <>
                  {restaurantList.restaurants.map((data, index) => (
                    <Grid item xs={4} key={index}>
                      <Card sx={{ maxWidth: 400, cursor: 'pointer' }}>
                        <CardContent>
                          {data.id === restaurantList.active_restaurant_id ? (
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom>
                              この店舗を選択中
                            </Typography>
                          ) : (
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom>
                              未選択
                            </Typography>
                          )}
                          <Typography variant="h5" component="div">
                            {data.restaurant_name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </>
              ) : (
                <>店舗が登録されていません。</>
              )}
            </Grid>
          </ContentsGrid>
        </WrapperGrid>
      </>
    </>
  )
}
export default list

export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const res = await axios.get('/api/admin/restaurant/initialize', {
    headers: {
      origin: process.env.ORIGIN,
      cookie: cookie,
    },
  })
  return {
    props: {
      res: res.data,
    },
  }
}
