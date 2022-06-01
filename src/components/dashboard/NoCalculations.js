import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

import { ReactComponent as CalculationIcon } from "../../images/calculationIcon.svg";
import { ReactComponent as PlusIcon } from "../../images/plusIcon.svg";

export default function NoCalculations(props) {
    const classes = useStyles();
    const { t } = useTranslation();
    const history = useHistory();

    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.paperBox}>
                    <CalculationIcon />
                </Box>
                <Box className={`${classes.paperBox} ${classes.paperBoxBig}`}>
                    <Typography className={classes.paperText}>
                        {t("Currently there arent any added calculations.1")}
                    </Typography>
                    <Button
                        className={classes.button}
                        onClick={() => {
                            history.push({
                                pathname: "/add"
                            });
                        }}
                    >
                        <PlusIcon style={{ paddingRight: 10 }} />
                        {t("Add new calculation.1")}
                    </Button>
                </Box>
            </Box>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: 100,
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            display: "inline-flex",
            "&>*": {
                margin: 10,
            },
        },
        flexBasis: 5,
    },
    paperBox: {
        width: 250,
        height: 140,
        textAlign: "left",
        border: "4px solid white",
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
        flex: 2,
    },
    paperBoxBig: {
        flex: 3,
    },
    paperText: {
        fontSize: "2.3vh",
        fontWeight: 600,
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: 20,
        },
    },
    button: {
        marginTop: 40,
        backgroundColor: "#21344D",
        borderRadius: 42,
        textTransform: "none",
        fontSize: "1.9vh",
        color: "white",
        "&:hover": {
            background: "#1b2c44",
        },
        paddingRight: 10,
    },
}));
