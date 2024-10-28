import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, useState } from 'react'
import { beige } from '../../constants/color'
import { Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const SearchDialog = React.lazy(() => import("../specific/Search"));
const NotificationDialog = React.lazy(() => import("../specific/Notifications"));
const NewGroupDialog = React.lazy(() => import("../specific/NewGroups"));


function Header() {

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleIcon = () => {
    setIsMobile(prev => !prev);
  };

  const handleSearch = () => {
    setIsSearch(prev => !prev)
  };

  const handleAdding = () => {
    setIsNewGroup(prev => !prev)
  }

  const handleNotification = () => {
    setIsNotification(prev => !prev)
  }

  const LogOuthandler = () => {
    console.log("Logout")
  }

  const navigateGroup = () => navigate("/groups")
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position='static'
          sx={{
            bgcolor: beige
          }}
        >
          <Toolbar>

            <Typography
              variant='h6'
              sx={{
                display: { xs: "none", sm: "block" }
              }}
            >
              Converse Hub
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" }
              }}
            >
              <IconButton color='inherit' onClick={handleIcon}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                flexGrow: 1
              }}
            >

            </Box>

            <Box>

              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={handleSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={handleAdding}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={navigateGroup}
              />

              <IconBtn
                title={"Notification"}
                icon={<NotificationsIcon />}
                onClick={handleNotification}
              />


              <IconBtn
                title={"LogOut"}
                icon={<LogoutIcon />}
                onClick={LogOuthandler}
              />

            </Box>

          </Toolbar>
        </AppBar>
      </Box>


      {
        isSearch && (
          <Suspense fallback={<Backdrop open />}>
            <SearchDialog />
          </Suspense>
        )
      }

      {
        isNewGroup && (
          <Suspense fallback={<Backdrop open />}>
            <NewGroupDialog />
          </Suspense>
        )
      }

      {
        isNotification && (
          <Suspense fallback={<Backdrop open />}>
            <NotificationDialogDialog />
          </Suspense>
        )
      }
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' size='large' onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header