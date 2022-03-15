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
                className={classes.paperBox}
                style={
                    index === selectedIndex
                        ? { border: "4px solid #21344d" }
                        : { border: "4px solid white" }
                }
            >
                {e.info && (
                        <abbr title={e.info}>
                            <InfoIcon
                                style={{ position: "absolute", right: 5 }}
                            />
                        </abbr>
                    )}
                {e.icon}
                <Typography className={classes.paperText}>
                    {e.label}
                </Typography>
            </Paper>
        );
    });

    const rows = [];
    const offset = props.offset || 3;

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
                style={{ marginTop: 20 }}
                display={"flex"}
                flexBasis={offset}
                width={"70%"}
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
    if(i + 1 >= length){
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
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.down("xs")]: {
            "&>*": {
                margin: 10,
            },
        },
    },
    paperBox: {
        flex: 1,
        minHeight: 140,
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
    paperText: {
        fontSize: 18,
        fontWeight: 600,
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
        },
    },
    lastRoot: {
        paddingBottom: theme.spacing(2),
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
    }
}));
