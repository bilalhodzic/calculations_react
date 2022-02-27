import React from "react";
import {
    Container,
    Divider,
    Hidden,
    Paper,
    Typography,
    Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../Layout";
import CustomStepper from "../customStepper/CustomStepper";
import { ReactComponent as ArrowIcon } from "../../images/ArrowIcon.svg";
import { useHistory, useLocation } from "react-router";

export default function NewCalculation() {
    const [steps, setSteps] = React.useState(["New Calculation"]);
    const classes = useStyles();
    const history = useHistory();

    const newStep = (newStep) => {
        setSteps(previous => [...previous, newStep]);
    };
    const emptySteps = () => {
      setSteps([]);
    }

    const customSteps = steps.map((e, index) => {
        const style = {
            fontSize: 18,
            color: "grey",
            fontWeight: 600,
            margin: 15,
            paddingTop: 20,
        };
        if (index === steps.length - 1) {
            style.color = "black";
            style.fontSize = 21;
        }
        if (index !== 0) {
            return (
                <>
                    <ArrowIcon className={classes.icon} />
                    <Typography style={style}>{e}</Typography>
                </>
            );
        }
        return <Typography style={style}>{e}</Typography>;
    });

    return (
        <Layout>
            <Paper elevation={5} className={classes.paper}>
                <Hidden xsDown>
                    <Box
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                    >
                        {customSteps}
                    </Box>
                    <Divider style={{ color: "#D3D3D3" }} />
                </Hidden>

                <div>
                    <CustomStepper pushStep={newStep} emptySteps={emptySteps}/>
                </div>
            </Paper>
        </Layout>
    );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    paper: {
        minHeight: "75vh",
        margin: theme.spacing(5),
        borderRadius: 7,
        fontFamily: "Poppins",
        minWidth: 600,
        height: "max-content",
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(1),
            minWidth: 0,
        },
    },
    icon: {
        marginTop: theme.spacing(3),
    },
}));
