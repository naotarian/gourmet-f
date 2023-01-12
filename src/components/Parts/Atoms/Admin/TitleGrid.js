import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import theme from '@/components/defaultAdmin'
const TitleGrid = styled(Grid)`
  padding: 6rem 0;
  text-align: center;
  background: ${theme.palette.secondary.main};
`
const StyledGrid = props => {
  const { title } = props
  return (
    <TitleGrid>
      <Typography variant="h1">{title}</Typography>
    </TitleGrid>
  )
}
export default StyledGrid
