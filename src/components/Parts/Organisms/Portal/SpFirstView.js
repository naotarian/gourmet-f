import { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
//mui
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
//style
import styled from 'styled-components'
const Wrapper = styled.div`
  background: #fff9f9;
  padding-bottom: 3rem;
`
const SpStyledImg = styled.img`
  height: 300px !important;
  width: 100%;
`
const StyledGrid = styled(Grid)`
  padding: 0 !important;
`
const SpFirstView = props => {
  const { areas, prefectures } = props
  const [areaNumber, setAreaNumber] = useState(0)
  const areaReset = () => {
    setAreaNumber(0)
  }
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <StyledGrid item xs={12}>
          <Slider {...settings}>
            <div style={{ marginBottom: '-10px' }}>
              <SpStyledImg src="/images/01.jpg" alt="" />
            </div>
            <div>
              <SpStyledImg src="/images/02.jpg" alt="" />
            </div>
          </Slider>
        </StyledGrid>
      </Grid>
      {areas && prefectures && (
        <>
          <Grid
            style={{
              borderTop: '1px solid #ddd',
              borderBottom: '1px solid #ddd',
              padding: '1rem',
              textAlign: 'center',
            }}>
            <Typography variant="h5">エリアを選択する</Typography>
          </Grid>
          <Typography
            variant="h5"
            style={{ marginTop: '1rem', textAlign: 'center' }}>
            エリアを選択してください。
          </Typography>
          <Grid
            container
            spacing={2}
            style={{ borderBottom: '1px solid #ddd', padding: '1rem' }}>
            {areaNumber === 0 &&
              areas.map((data, index) => (
                <Grid item xs={4} key={index} style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    style={{ width: '100px', height: '60px' }}
                    onClick={() => setAreaNumber(data.area_number)}>
                    <Typography variant="h5">{data.name}</Typography>
                  </Button>
                </Grid>
              ))}
            {areaNumber !== 0 &&
              prefectures.map((data2, index2) => {
                if (data2.area_id === areaNumber) {
                  return (
                    <Grid
                      item
                      xs={4}
                      key={index2}
                      style={{ textAlign: 'center' }}>
                      <Button
                        variant="outlined"
                        style={{ width: '100px', height: '60px' }}>
                        <Typography variant="h5">{data2.name}</Typography>
                      </Button>
                    </Grid>
                  )
                }
              })}
            {areaNumber !== 0 && (
              <Grid
                style={{
                  marginTop: '1rem',
                  width: '100%',
                  textAlign: 'right',
                }}>
                <Button variant="contained" onClick={areaReset}>
                  エリアを選びなおす
                </Button>
              </Grid>
            )}
          </Grid>
        </>
      )}
    </Wrapper>
  )
}
export default SpFirstView
const settings = {
  dots: false,
  fade: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
}
