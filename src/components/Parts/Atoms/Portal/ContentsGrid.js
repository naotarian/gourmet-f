import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

const ContentsGrid = styled(Grid)`
  padding-top: 60px;
`
const StyledGrid = ({ ...props }) => <ContentsGrid {...props} />
export default StyledGrid
