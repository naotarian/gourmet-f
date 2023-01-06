import { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
//mui
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
//style
import styled from 'styled-components'
const Wrapper = styled.div`
  background: #fff9f9;
  padding-bottom: 3rem;
`
const StyledImg = styled.img`
  // max-width: 800px;
  max-height: 500px;
  width: 100%;
`
const SearchUl = styled.ul`
  display: flex;
  gap: 20px;
`
const SearchLl = styled.li`
  list-style: none;
`
const StyledGrid = styled(Grid)`
  padding: 0 !important;
`
const PcStyledGrid = styled(Grid)`
  @media screen and (max-width: 767px) {
    display: none;
  }
  padding: 0 !important;
`
const FirstView = props => {
  const { areas, prefectures } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(0)
  const handleOpen = (event, index) => {
    setAnchorEl(event.currentTarget)
    if (open === index + 1) {
      setOpen(0)
      return
    }
    setOpen(index + 1)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpen(0)
  }
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <StyledGrid item xs={12}>
          <Slider {...settings}>
            <div style={{ marginBottom: '-10px' }}>
              <StyledImg src="/images/01.jpg" alt="" />
            </div>
            <div>
              <StyledImg src="/images/02.jpg" alt="" />
            </div>
          </Slider>
        </StyledGrid>
        {areas && prefectures && (
          <PcStyledGrid item xs={8} style={{ margin: '1rem auto' }}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Grid
                container
                spacing={2}
                style={{ alignItems: 'center', paddingTop: '1rem' }}>
                <Grid
                  item
                  xs={2}
                  style={{
                    textAlign: 'center',
                    borderRight: '1px solid #ddd',
                    padding: '.5rem',
                  }}>
                  <Typography variant="h5">現在地から探す</Typography>
                </Grid>
                <Grid item xs={10} style={{ padding: 0, textAlign: 'center' }}>
                  <SearchUl>
                    {areas.map((data, index) => (
                      <SearchLl key={index}>
                        <Button
                          aria-owns={open ? `menu${index + 1}` : null}
                          aria-haspopup="true"
                          style={{ zIndex: 1301 }}
                          onMouseOver={event => handleOpen(event, index)}>
                          {data.name}
                        </Button>
                        <Menu
                          id={`menu${index}`}
                          style={{ marginTop: '1rem' }}
                          anchorEl={anchorEl}
                          open={open === index + 1}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            onMouseLeave: handleClose,
                          }}>
                          {prefectures.map((data2, index2) => {
                            if (data2.area_id == data.id) {
                              return (
                                <MenuItem key={index2}>{data2.name}</MenuItem>
                              )
                            }
                          })}
                        </Menu>
                      </SearchLl>
                    ))}
                  </SearchUl>
                </Grid>
              </Grid>
            </Paper>
          </PcStyledGrid>
        )}
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
