import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
//mui
import Grid from '@mui/material/Grid'
const TopContent = props => {
  const imgs = [
    {
      original:
        'https://cdn.pixabay.com/photo/2020/03/09/23/04/plum-4917370_960_720.jpg',
      thumbnail:
        'https://cdn.pixabay.com/photo/2020/03/09/23/04/plum-4917370_960_720.jpg',
    },
    {
      original:
        'https://cdn.pixabay.com/photo/2020/02/21/18/43/kosmeen-4868375_960_720.jpg',
      thumbnail:
        'https://cdn.pixabay.com/photo/2020/02/21/18/43/kosmeen-4868375_960_720.jpg',
    },
    {
      original:
        'https://cdn.pixabay.com/photo/2016/04/16/12/50/chrysanthemum-1332994_960_720.jpg',
      thumbnail:
        'https://cdn.pixabay.com/photo/2016/04/16/12/50/chrysanthemum-1332994_960_720.jpg',
    },
  ]
  const { images } = props
  return (
    <>
      {images.length > 0 && (
        <Grid style={{ width: '400px' }}>
          <ImageGallery items={images} />
        </Grid>
      )}
      {/* {images.map((data, index) => (
        <img key={index} src={data} alt="" />
      ))} */}
      <p>aa</p>
      <p>aa</p>
    </>
  )
}
export default TopContent
