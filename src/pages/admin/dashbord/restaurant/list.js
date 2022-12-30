import axios from '@/lib/axios'
import { useState, useEffect, useContext, useRef } from 'react'
import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import WrapperGrid from '@/components/Parts/Atoms/Admin/WrapperGrid'
import ContentsGrid from '@/components/Parts/Atoms/Admin/ContentsGrid'
import TitleGrid from '@/components/Parts/Atoms/Admin/TitleGrid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import { ActiveIdContext } from '@/pages/_app'
import Link from 'next/link'
const list = props => {
  const [restaurantList, setRestaurantList] = useState(props.res)
  const [open, setOpen] = useState(true)
  const firstRef = useRef(true)
  const { activeIdCxt } = useContext(ActiveIdContext)

  useEffect(() => {
    ;(async () => {
      if (firstRef.current) {
        firstRef.current = false
        return
      }
      if (restaurantList.active_restaurant_id !== activeIdCxt) {
        const res = await axios.get('/api/admin/restaurant/initialize')
        setRestaurantList(res.data)
      }
    })()
  }, [activeIdCxt])
  return (
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
              <>
                <Alert
                  variant="filled"
                  severity="warning"
                  style={{ margin: '2rem auto' }}>
                  <AlertTitle>店舗が登録されていません。</AlertTitle>

                  <Typography variant="h6">
                    <Link href="/admin/dashbord/restaurant/register">
                      こちら
                    </Link>
                    から店舗を登録できます。
                  </Typography>
                </Alert>
              </>
            )}
          </Grid>
        </ContentsGrid>
      </WrapperGrid>
    </>
  )
}
export default list

export const getServerSideProps = async ctx => {
  const cookie = ctx.req?.headers.cookie
  const res = await axios
    .get('/api/admin/restaurant/initialize', {
      headers: {
        origin: process.env.ORIGIN,
        cookie: cookie,
      },
    })
    .catch(error => {
      ctx.res.writeHead(302, { Location: '/admin/login' })
      ctx.res.end()
    })
  // console.log(res.statusCode)
  return {
    props: {
      res: res.data,
    },
  }
}
