import { Scrollbars } from "react-custom-scrollbars";
import { Paper, Typography, Box, makeStyles } from "@material-ui/core";
import React from "react";

export default function CardRows(props) {
    const dataItems = props.items;
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const items = dataItems.map((e, index) => {
        return (
            <Paper
                elevation={4}
                onClick={() => {
                    props.handleClickPaper(e.category);
                    setSelectedIndex(index);
                }}
                className={classes.paperBox}
                style={
                    index === selectedIndex
                        ? { border: "4px solid #21344d" }
                        : { border: "4px solid white" }
                }
            >
                {e.icon}
                <Typography className={classes.paperText}>{e.label}</Typography>
            </Paper>
        );
    });

    const rows = [];
    for (let i = 0; i < items.length; i += 3) {
        rows.push(
            <Box className={`${classes.root} ${i + 3 >= items.length && classes.lastRoot}`} style={{ marginTop: 20 }}>
                {items[i]}
                {i + 1 < items.length && items[i + 1]}
                {i + 2 < items.length && items[i + 2]}
            </Box>
        );
    }
    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "55vh" }}>
                {rows.map((e) => e)}
            </Scrollbars>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            display: "inline-flex",
            "&>*": {
                margin: 10,
            },
        },
    },
    paperBox: {
        width: 250,
        minHeight: 140,
        textAlign: "center",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        border: "4px solid white",
        "&:hover": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
    },
    paperText: {
        fontSize: 18,
        fontWeight: 600,
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: 16
        }
    },
    lastRoot: {
        [theme.breakpoints.down("xs")]: {
            paddingBottom: theme.spacing(8)
        }
    }
}));
