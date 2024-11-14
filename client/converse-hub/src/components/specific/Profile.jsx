import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon
} from '@mui/icons-material';
import moment from "moment"


const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar sx={{
        width: 200,
        height: 200,
        objectFit: "contain",
        marginBottom: "1rem",
        border: "5px solid white"
      }} />
      <ProfileCard
        heading={"Bio"}
        text={"random random random"}
      />
      <ProfileCard
        heading={"Username"}
        text={"adityasriv07"}
        Icon={<UsernameIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={"Aditya Srivastava"}
        Icon={<FaceIcon />}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment().format}
        Icon={<CalendarIcon />}
      />
    </Stack>
  )
}

const ProfileCard = ({ text, Icon, heading }) =>
  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"} textAlign={"center"}>

    {Icon && Icon}

    <Stack>
      <Typography variant='body1'>{text}</Typography>
      <Typography color={"grey"} variant='caption'>{heading}</Typography>
    </Stack>
  </Stack>

export default Profile