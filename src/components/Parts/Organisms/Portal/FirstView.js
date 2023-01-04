import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
//mui
import Grid from '@mui/material/Grid'
//style
import styled from 'styled-components'
const Wrapper = styled.div`
  background: gray;
`
const StyledImg = styled.img`
  // max-width: 800px;
`
const FirstView = () => {
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <p>xs=8</p>
        </Grid>
        <Grid item xs={8}>
          <Slider {...settings}>
            <div style={{ marginBottom: '-10px' }}>
              <StyledImg src="/images/01.jpg" alt="" />
            </div>
            <div>
              <StyledImg src="/images/02.jpg" alt="" />
            </div>
          </Slider>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
export default FirstView
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
