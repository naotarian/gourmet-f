import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
const WrapperGrid = styled(Grid)`
  margin-left: ${props => (props.open ? '240px' : 0)};
  padding: 0;
`
const StyledGrid = ({ ...props }) => <WrapperGrid {...props} />
export default StyledGrid
