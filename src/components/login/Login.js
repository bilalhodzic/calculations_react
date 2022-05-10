import React from "react";
import {
    Container,
    Button,
    Typography,
    Box,
    Modal,
    Input,
    CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import axios from "axios";
import config from "../../config.json";

export default function Login() {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isInvalidLogin, setIsInvalidLogin] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const { t } = useTranslation();

    const history = useHistory();
    const classes = useStyles();

    const onKeyPressed = (props) => {
        console.log(props);
        if(props.key === 'Enter'){
            document.getElementById("submitLogin").click();
        }
    }

    return (
        <Container className={classes.root}>
            <img
                src={"./static-header-1.png"}
                alt={"background"}
                className={classes.bgImage}
            />
            <Box className={classes.calcButton}>
                <img
                    src={"/logo.png"}
                    alt="logo"
                    height="130"
                    width="200"
                    className={classes.logo}
                />
            </Box>

            {!openDialog && (
                <>
                    <Box className={classes.box}>
                        <Typography className={classes.header}>
                            {t('Calculations.1')}
                        </Typography>
                        <Typography className={classes.loginText}>
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give{" "}
                        </Typography>
                        <Button
                            className={classes.button}
                            onClick={() => setOpenDialog(true)}
                        >
                            {t('Log in.1')}
                        </Button>
                        <Button
                            className={`${classes.button} ${classes.aboutButton}`}
                            onClick={() => history.push("/about")}
                            style={{ marginLeft: "10%" }}
                        >
                            About us
                        </Button>
                    </Box>
                </>
            )}
            <Modal
                open={openDialog}
                className={classes.dialog}
                onClose={() => setOpenDialog(false)}
            >
                <Box className={classes.paper} onKeyDown={onKeyPressed}>
                    <Typography className={classes.paperHeader}>
                        {t('Log in.1')}
                    </Typography>
                    <Typography className={classes.paperText}>
                        {t('Enter your details.1')}
                    </Typography>
                    <Input
                        placeholder={t('Email or username.1')}
                        disableUnderline={true}
                        disabled={isLoading}
                        className={classes.input}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {isInvalidLogin ? (
                        <Typography className={classes.errorMessage}>Invalid username or password!</Typography>
                    ) : null}
                    <Input
                        type="password"
                        placeholder={t('Password.1')}
                        disableUnderline={true}
                        disabled={isLoading}
                        className={classes.input}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        className={classes.button2}
                        id="submitLogin"
                        onClick={async () => {
                            setIsInvalidLogin(false);
                            setIsLoading(true);
                            if (!(await login(username, password, history))){
                                setIsInvalidLogin(true);
                            }
                            else setIsInvalidLogin(false);
                            setIsLoading(false);
                        }}
                    >
                        {t('Log in.1')}
                    </Button>
                    <Box className={classes.loading}>
                        {isLoading && <CircularProgress/>}
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
}

//given measure from desgin are in px
//I'm trying to convert them to %
const calculate = (objectPx, totalPx = 1433) => {
    return (objectPx / totalPx) * 100 + "%";
};

async function login(username, password, history) {
    const axiosOptions = {
        url: `${config.baseUrl}/auth/login`,
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        data: {
            username: username,
            password: password,
        },
    };
    try {
        const response = await axios(axiosOptions);
        if (response.status === 200) {
            localStorage.setItem('token', response.data.data);
            history.push('/home');
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        color: "white",
        margin: 0,
        padding: 0,
    },
    bgImage: {
        minHeight: "100%",
        minWidth: 1024,
        width: "100%",
        height: "auto",
        position: "fixed",
        top: 0,
        left: 0,
    },
    logo: {
        [theme.breakpoints.down("xs")]: {
            width: "110px",
            height: 70,
        },
    },
    calcButton: {
        position: "absolute",
        width: calculate(217.75),

        left: calculate(134),
        top: calculate(50, 1024),

        minWidth: 130,
        "&:hover": {
            cursor: "pointer",
        },
    },
    box: {
        position: "absolute",
        left: calculate(128),
        top: calculate(300, 1024),
        fontSize: 15,
        maxWidth: 620,
    },
    header: {
        fontWeight: 600,
        lineHeight: "128%",
        letterSpacing: "0.015em",
        color: "#FFFCFC",
        fontSize: "9vmin",
        marginBottom: theme.spacing(10),
    },
    loginText: {
        fontWeight: 500,
        lineHeight: "217.5%",
        fontSize: "3.4vmin",
        fontStyle: "normal",
    },
    button: {
        width: calculate(170, 600),

        minWidth: 100,
        background: "#21344D",
        borderRadius: "9.77948px",
        textTransform: "none",
        marginTop: 50,
        fontWeight: 500,
        color: "white",
        fontSize: "3.3vmin",
        "&:hover": {
            background: "#1b2c44",
        },
    },
    aboutButton: {
        background: "white",
        color: "#21344D",
        boxShadow: "1px 1px 8px 8px rgba(0, 0, 0, 0.25)",
        "&:hover": {
            background: "#dedbd5",
        },
    },
    button2: {
        width: 159,
        height: 50.34,
        background: "#21344D",
        borderRadius: "15.3475px",
        textTransform: "none",
        fontWeight: 500,
        color: "white",
        fontSize: "22.81px",
        "&:hover": {
            background: "#1b2c44",
        },
    },
    dialog: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        outline: 0,
        background: "white",
        maxWidth: 472,
        minWidth: 330,
        height: 472,
        borderRadius: 50,
        textAlign: "center",
        fontWeight: 500,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            borderRadius: 0,
        },
    },
    paperHeader: {
        color: "#606060",
        fontSize: 35,
        fontWeight: 600,
        marginTop: 30,
    },
    paperText: {
        color: "#797979",
        fontSize: 20,
        fontWeight: 500,
        marginTop: 10,
    },
    input: {
        width: 369,
        height: 62,
        background: "rgba(17, 17, 17, 0.05)",
        borderRadius: 18.67,
        margin: theme.spacing(3.5),
        paddingLeft: theme.spacing(3),
        fontSize: 18,
        [theme.breakpoints.down("xs")]: {
            width: 250,
            fontSize: 15,
        },
    },
    errorMessage: {
      fontSize: 12,
      color: "red",
      fontWeight: "bold",
      marginTop: theme.spacing(-2),
      textAlign: "start",
      marginLeft: theme.spacing(8)
    },
    loading: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(2)
    }
}));
