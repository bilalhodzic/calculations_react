import { Scrollbars } from "react-custom-scrollbars";
import { Paper, Typography, Box, makeStyles, Hidden } from "@material-ui/core";
import { ReactComponent as InfoIcon } from "../../images/infoIcon.svg";
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
                className={`${classes.paperBox} ${props.betweenStep && classes.betweenStepPaperBox}`}
                style={
                    index === selectedIndex
                        ? { border: "4px solid #21344d" }
                        : { border: "4px solid white" }
                }
            >
                {e.info && (
                        <abbr title={e.info}>
                            <Box className={classes.infoIconContainer}>
                                <InfoIcon />
                            </Box>
                        </abbr>
                    )}
                <Box className={classes.paperIcon} style={props.betweenStep && { marginLeft: "4%"}}>
                    {e.icon}
                </Box>
                <Box className={props.betweenStep && classes.textContainer}>
                    <Typography className={`${classes.paperText} ${props.betweenStep && classes.betweenStepText}`}>
                        {e.label}
                    </Typography>
                </Box>
            </Paper>
        );
    });

    const rows = [];
    const offset = props.offset || 4;

    for (let i = 0; i < items.length; i += offset) {
        const row = [];
        let element = addDummyElement(i, offset, items.length, classes);
        if(element){
            row.push(element);
        }
        for(let j = 0; j < offset; j++){
            if(i + j < items.length){
                row.push(items[i + j]);
            }else{
                break;
            }
        }
        element = addDummyElement(i, offset, items.length, classes);
        if(element){
            row.push(element);
        }
        rows.push(
            <Box
                className={`${classes.root} ${
                    i + 3 >= items.length && classes.lastRoot
                }`}
                style={{ marginTop: 20, height: props.height }}
                display={"flex"}
                flexBasis={offset}
            >
                {row}
            </Box>
        );
    }

    const responsiveRows = [];
    for (let i = 0; i < items.length; i += 2) {
        responsiveRows.push(
            <Box
                className={`${classes.root} ${
                    i + 3 >= items.length && classes.lastRoot
                }`}
                style={{ marginTop: 20 }}
                display={"flex"}
                flexBasis={2}
                width={"70%"}
            >
                {items[i]}
                {i + 1 < items.length ? items[i + 1] : addDummyElement(i, 2, items.length, classes)}
            </Box>
        );
    }

    return (
        <Box maxHeight={"80vh"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "45vh" }}>
                <Hidden xsDown>
                    {rows}
                </Hidden>
                <Hidden smUp>
                    {responsiveRows}
                </Hidden>
            </Scrollbars>
        </Box>
    );
}

function addDummyElement(i, offset, length, classes){
    if(i + offset > length){
        return <Paper className={classes.sameSizePaper} />;
    }else if(offset === 3 && i + 2 >= length){
        return <Paper className={classes.halfPaper} />;
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "25%",
        [theme.breakpoints.down("xs")]: {
            "&>*": {
                margin: 10,
            },
        },
    },
    paperBox: {
        flex: 1,
        height: "100%",
        textAlign: "center",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        border: "4px solid white",
        "&:hover": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("xs")]: {
            width: "30vw",
        },
        position: "relative"
    },
    betweenStepPaperBox: {
        display: "flex",
        flexDirection: "row",
    },
    textContainer: {
        display: "flex",
        width: "85%"
    },
    paperText: {
        fontSize: "1.9vh",
        fontWeight: 600,
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
        },
    },
    lastRoot: {
        paddingBottom: theme.spacing(4),
        [theme.breakpoints.down("xs")]: {
            paddingBottom: theme.spacing(8),
        },
    },
    sameSizePaper: {
        flex: 1,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    halfPaper: {
        flex: 0.5,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    betweenStepText: {
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "5%"
    },
    paperIcon: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "50%",
        maxHeight: "70%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "2%"
    },
    infoIconContainer: {
        position: "absolute",
        right: 5,
        display: "flex",
        flexDirection: "column",
        maxHeight: "20%",
        maxWidth: "10%"
    }
}));
