import { Box } from "@mui/system";
import React, { useState } from "react";
import Hero from "../Assets/Images/hero-desktop.jpg";
import Bg from "../Assets/Images/bg-pattern-desktop.svg";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import Logo from "../Assets/Images/logo.svg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Home() {
  const style = {
    mainCon: {
      display: "flex",
    },
    infoCon: {
      backgroundImage: `url(${Bg})`,
      width: "100vw",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundColor: "(0, 93%, 68%)",
      backgroundSize: "cover",
    },
    hero: {
      height: "100vh",
    },
    infoSubCon: {
      margin: "75px 185px",
    },
    textCon: {
      marginTop: "115px",
    },
    textFirst: {
      fontFamily: "Josefin Sans",
      fontSize: "65px",
      letterSpacing: "20px",
      fontWeight: "300",
      color: "hsl(0, 36%, 70%)",
    },
    textTwo: {
      fontFamily: "Josefin Sans",
      fontSize: "65px",
      letterSpacing: "20px",
      fontWeight: "600",
      lineHeight: "75px",
    },
    textThird: {
      fontFamily: "Josefin Sans",
      fontSize: "15px",
      fontWeight: "400",
      color: "hsl(0, 36%, 70%)",
      width: "400px",
      marginTop: "25px",
    },
    textField : {
        width : "400px",
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#413a3a',
              borderRadius: 18,
               },
             },
        marginTop : "50px"
    },
    button : {
        height : "55px",
        borderRadius : "50px",
        background : "linear-gradient(135deg , hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        width : "100px",
        marginRight : "-12.9px",
        color : "white",

    }
  };
  const [email, setEmail] = useState("");
  const [isEmpty, setisEmpty] = useState(false)
  const [isValid, setisValid] = useState(true)
  const [error, setError] = useState(false)
  const handleChange = (e) => { 
    setEmail(e.target.value)
    setisEmpty(false)
    setError(false)
  }
  const handleClick = () => {
    const regex = /^(([^<>()[],;:\s@\]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;
    if (email === "")
    {
      setisEmpty(true);
      setError(true)
    }
    else if (regex.test(email) === false)
    {
      setisValid(false)
    }
    else {
      setisValid(true)
      alert("succes")

    }
  }
  return (
    <Box sx={style.mainCon}>
      <Box sx={style.infoCon}>
        <Box sx={style.infoSubCon}>
          <Box component="img" src={Logo}></Box>
          <Box sx={style.textCon}>
            <Typography sx={style.textFirst}>WE'RE</Typography>
            <Typography sx={style.textTwo}>COMING SOON</Typography>
            <Typography sx={style.textThird}>
              Hello fellow shoppers! We're currently building our new fashion
              store, Add your email below to stay up-to-date with announcements
              and launch deals.
            </Typography>
            <Box>
                <TextField 
                placeholder="Email Address"
                variant="outlined"
                error = {error}
                onChange={handleChange}
                sx = {style.textField}
                value = {email}
                InputProps = {{
                    endAdornment : (
                        <InputAdornment>
                            <Button sx = {style.button} onClick = {handleClick}><KeyboardArrowRightIcon style={{fontSize : "40px"}}/></Button>
                        </InputAdornment>
                    )
                }}
                helperText = {isEmpty ? "Please Enter Your Email" : isValid ?  "" : "Please Enter A Valid Email"}
                />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component="img" src={Hero} sx={style.hero}></Box>
    </Box>
  );
}
