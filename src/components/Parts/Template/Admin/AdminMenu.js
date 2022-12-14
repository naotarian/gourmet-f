import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/authAdmin'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const AdminMenu = props => {
  const theme = useTheme()
  const router = useRouter()
  const { logout } = useAuth()
  const { open, setOpen } = props
  const [expanded, setExpanded] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [age, setAge] = useState('')
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
    setExpanded(
      isExpanded
        ? [...expanded, panel]
        : expanded.filter((fruit, index) => fruit !== panel),
    )
  }
  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios.get('/api/admin/user')
        if (!res.data) router.push('/admin/login')
        const initialize = await axios.get('/api/admin/restaurant/initialize')
        setRestaurants(initialize.data.restaurants)
        console.log(initialize.data.active_restaurant_id)
        setAge(initialize.data.active_restaurant_id)
      } catch (error) {
        router.push('/admin/login')
      }
    })()
  }, [])
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const menuClick = path => {
    router.push(path)
  }

  const restaurantChange = event => {
    setAge(event.target.value)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
          {age && restaurants.length > 0 && (
            <Typography variant="h6" noWrap component="div">
              {restaurants.map((data, index) => {
                if (data.id === age) {
                  return <>{data.restaurant_name}様</>
                }
              })}
            </Typography>
          )}
          {age && restaurants.length > 1 && (
            <Grid style={{ position: 'absolute', right: '100px' }}>
              <Grid style={{ display: 'flex', alignItems: 'baseline' }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <Select
                    value={age}
                    style={{ background: '#fff' }}
                    onChange={restaurantChange}>
                    {restaurants.map((data, index) => (
                      <MenuItem value={data.id} key={index}>
                        {data.restaurant_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button size="small" variant="outlined" color="secondary">
                  切り替え
                </Button>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ padding: 0 }}>
          {menus.map((text, index) => {
            if (text.sub.length) {
              return (
                <Accordion
                  expanded={expanded.includes('panel' + index)}
                  onChange={handleChange('panel' + index)}
                  style={{ margin: 0, padding: 0, boxShadow: 'none' }}
                  key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1bh-header"
                    style={{
                      paddingRight: '1rem',
                      paddingLeft: 0,
                      maxHeight: '40px',
                    }}>
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text.name} />
                      </ListItemButton>
                    </ListItem>
                  </AccordionSummary>
                  <AccordionDetails style={{ padding: 0 }}>
                    <List>
                      {text.sub.map((text, index) => (
                        <ListItem key={index} disablePadding>
                          <ListItemButton onClick={() => menuClick(text.path)}>
                            <ListItemIcon>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              )
            } else {
              return (
                <>
                  <ListItem key={text} disablePadding>
                    <ListItemButton onClick={() => menuClick(text.path)}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text.name} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              )
            }
          })}
        </List>
        <Divider />

        <Button
          variant="outlined"
          style={{ width: '80%', margin: '1rem auto' }}
          onClick={logout}>
          ログアウト
        </Button>
      </Drawer>
    </Box>
  )
}

export default AdminMenu

const menus = [
  {
    name: '管理画面TOP',
    sub: [],
    path: '/admin/dashbord',
  },
  {
    name: '基本情報',
    sub: [{ name: '営業情報', path: '/admin/dashbord/salesInformation' }],
  },
  {
    name: 'スタッフ管理',
    sub: [
      { name: 'スタッフ登録', path: '/admin/dashbord/salesInformation' },
      { name: 'シフト登録', path: '/admin/dashbord/salesInformation' },
    ],
  },
  {
    name: '予約管理',
    sub: [{ name: '予約状況', path: '/admin/dashbord/salesInformation' }],
  },
  {
    name: '施設管理',
    sub: [
      { name: '座席管理', path: '/admin/dashbord/salesInformation' },
      { name: '座席予約状況', path: '/admin/dashbord/salesInformation' },
    ],
  },
  {
    name: '店舗管理',
    sub: [
      { name: '店舗登録', path: '/admin/dashbord/restaurant/register' },
      { name: '店舗一覧', path: '/admin/dashbord/restaurant/list' },
    ],
  },
]
