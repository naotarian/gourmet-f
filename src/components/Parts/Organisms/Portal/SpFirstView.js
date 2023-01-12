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
import { useRouter } from 'next/router'
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
  const { areas, prefectures, mainCategories, budgets } = props
  const [areaNumber, setAreaNumber] = useState(0)
  const [prefectureNumber, setPerfectureNumber] = useState(0)
  const [mainCategory, setMainCategory] = useState(0)
  const [phase, setPhase] = useState(0)
  const router = useRouter()
  const areaReset = () => {
    setAreaNumber(0)
    setPerfectureNumber(0)
    setPhase(0)
  }
  const changeArea = areaNumber => {
    setAreaNumber(areaNumber)
    setPhase(1)
  }
  const changePrefecture = n => {
    setPerfectureNumber(n)
    setPhase(2)
  }
  const prefectureReset = () => {
    setPerfectureNumber(0)
    setPhase(1)
  }
  const changeMainCategory = n => {
    setMainCategory(n)
    setPhase(3)
  }
  const changeBudget = n => {
    router.push({
      pathname: '/portal/list',
      query: { PF: prefectureNumber, MC: mainCategory, PR: n },
    })
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
            <Typography variant="h5">検索条件を設定</Typography>
          </Grid>
          {phase === 0 && (
            <Typography
              variant="h5"
              style={{ marginTop: '1rem', textAlign: 'center' }}>
              エリアを選択してください。
            </Typography>
          )}
          {phase === 1 && (
            <Typography
              variant="h5"
              style={{ marginTop: '1rem', textAlign: 'center' }}>
              都道府県を選択してください。
            </Typography>
          )}
          {phase === 2 && (
            <Typography
              variant="h5"
              style={{ marginTop: '1rem', textAlign: 'center' }}>
              ジャンルを選択してください。
            </Typography>
          )}
          <Grid
            container
            spacing={2}
            style={{ borderBottom: '1px solid #ddd', padding: '1rem' }}>
            {phase === 0 &&
              areas.map((data, index) => (
                <Grid item xs={4} key={index} style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    style={{ width: '100px', height: '60px' }}
                    onClick={() => changeArea(data.area_number)}>
                    <Typography variant="h5">{data.name}</Typography>
                  </Button>
                </Grid>
              ))}
            {phase === 1 &&
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
                        style={{ width: '100px', height: '60px' }}
                        onClick={() => changePrefecture(data2.alias)}>
                        <Typography variant="h5">{data2.name}</Typography>
                      </Button>
                    </Grid>
                  )
                }
              })}
            {phase === 1 && (
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
            {phase === 2 &&
              mainCategories.map((data3, index3) => (
                <Grid item xs={4} key={index3} style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    style={{ width: '100px', height: '60px' }}
                    onClick={() => changeMainCategory(data3.alias)}>
                    <Typography variant="h5">{data3.name}</Typography>
                  </Button>
                </Grid>
              ))}
            {phase === 2 && (
              <Grid
                style={{
                  marginTop: '1rem',
                  width: '100%',
                  textAlign: 'right',
                }}>
                <Button variant="contained" onClick={prefectureReset}>
                  都道府県を選びなおす
                </Button>
              </Grid>
            )}
            {phase === 3 &&
              budgets.map((data4, index4) => (
                <Grid item xs={4} key={index4} style={{ textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    style={{ width: '100px', height: '60px' }}
                    onClick={() => changeBudget(data4.alias)}>
                    <Typography variant="h5">{data4.price}</Typography>
                  </Button>
                </Grid>
              ))}
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
