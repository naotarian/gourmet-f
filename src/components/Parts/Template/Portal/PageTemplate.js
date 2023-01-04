import Header from '@/components/Parts/Template/Header'
import Grid from '@mui/material/Grid'
import ContentsGrid from '@/components/Parts/Atoms/Portal/ContentsGrid'
const PageTemplate = ({ ...props }) => {
  return (
    <Grid>
      <Header />
      <ContentsGrid {...props} />
    </Grid>
  )
}
export default PageTemplate
