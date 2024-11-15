import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponent';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { UserNameValidator } from '../utils/validator';

function Login() {

    const [isLogin, setIsLogin] = useState("true");

    const ToggleLogin = () => setIsLogin((prev) => !prev);

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", UserNameValidator);
    const password = useStrongPassword();

    const avatar = useFileHandler("single")

    const handleLogin = (e) => {
        e.preventDefault();
    }
    const handleSignUp = (e) => {
        e.preventDefault();
    }
    return (
        <div
            style={{
                backgroundImage:"linear-gradient(rgba(200,200,200,0.5),rgba(120,110,220,0.5))",
                backgroundSize: "cover",
                height: "100vh",
                width: "100vw",

            }}>

        <Container component={"main"} maxWidth="xs" sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Paper elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: '3rem'
                }}>

                {
                    isLogin ? (<>

                        <Typography variant="h5">Login</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: "1rem"
                        }}
                            onSubmit={handleLogin}>
                            <TextField required fullWidth label="UserName" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />
                            <TextField required fullWidth label="Password" type='password' margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler} />
                            <Button sx={{ marginTop: "1rem" }} fullWidth variant='contained' color='primary' type='submit'>Login</Button>
                            <Typography textAlign={'center'} m={'1rem'}>OR</Typography>

                            <Button fullWidth variant='text' onClick={ToggleLogin}>Sign In Instead</Button>
                        </form>

                    </>)
                        : (<>

                            <Typography variant="h5">Sign Up</Typography>
                            <form style={{
                                width: "100%",
                                marginTop: "1rem"
                            }}
                                onSubmit={handleSignUp}>

                                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                    <Avatar sx={{
                                        width: "10rem",
                                        height: "10rem",
                                        objectFit: "contain"
                                    }}
                                        src={avatar.preview} />

                                    <IconButton sx={{
                                        position: "absolute",
                                        bottom: "0",
                                        right: "0",
                                        color: "white",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        ":hover": {
                                            bgcolor: "rgba(0,0,0,0.7)"
                                        }

                                    }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                        </>
                                    </IconButton>
                                </Stack>

                                {avatar.error && (
                                    <Typography m={"1rem"} width={"fit-content"} display={"block"} color="error" variant='caption'>
                                        {avatar.error}
                                    </Typography>
                                )}

                                <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler} />
                                <TextField required fullWidth label="Bio" margin='normal' variant='outlined' value={bio.value} onChange={bio.changeHandler} />
                                <TextField required fullWidth label="UserName" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />
                                {
                                    username.error && (
                                        <Typography color="error" variant='caption'>
                                            {username.error}
                                        </Typography>
                                    )
                                }
                                <TextField required fullWidth label="PassWord" type='password' margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler} />
                                {
                                    password.error && (
                                        <Typography color="error" variant='caption'>
                                            {password.error}
                                        </Typography>
                                    )
                                }
                                <Button sx={{ marginTop: "1rem" }} fullWidth variant='contained' color='primary' type='submit'>Sign Up</Button>
                                <Typography textAlign={'center'} m={'1rem'}>OR</Typography>

                                <Button fullWidth variant='text' onClick={ToggleLogin}>Log In Instead</Button>
                            </form>

                        </>
                        )}

            </Paper>
        </Container>

        </div>
    )
}

export default Login