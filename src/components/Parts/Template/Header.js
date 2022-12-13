import styled from 'styled-components'
import AppBar from '@mui/material/AppBar'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import HeaderCss from '../../../../styles/Parts/Template/Header.module.css'

const StyledAppBar = styled(AppBar)`
  padding: 1rem;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  height: 60px;
  position: fixed;
  top: 0;
  background-color: #fff;
`
const Header = () => {
  const { user } = useAuth({ middleware: 'guest' })
  const { logout } = useAuth()
  return (
    <StyledAppBar>
      <div className={`fixed top-0 right-0 px-6 py-4 sm:block`}>
        {user ? (
          <div>
            <a
              className={`ml-4 text-sm ${HeaderCss.headerLink}`}
              onClick={logout}>
              ログアウト
            </a>
          </div>
        ) : (
          <>
            <Link href="/portal/login">
              <a className={`ml-4 text-sm ${HeaderCss.headerLink}`}>Login</a>
            </Link>

            <Link href="/portal/register">
              <a className={`ml-4 text-sm ${HeaderCss.headerLink}`}>Register</a>
            </Link>
            <Link href="/admin/login">
              <a className={`ml-4 text-sm ${HeaderCss.headerLink}`}>
                加盟店様はこちら
              </a>
            </Link>
          </>
        )}
      </div>
    </StyledAppBar>
  )
}
export default Header
