import { Scrollbars } from "react-custom-scrollbars";
import { Paper, Typography, Box, makeStyles } from "@material-ui/core";
import types from "../../helper/data.json";

export default function CardRows(props) {
    const dataItems = props.items;
    const classes = useStyles();

    const items = dataItems.map((e) => {
        return (
            <Paper
                elevation={4}
                onClick={() => props.handleClickPaper(e.category)}
                className={classes.paperBox}
                style={
                    props.data.type === types.types.new_production
                        ? props.data.category === e.category
                            ? { border: "4px solid #21344d" }
                            : { border: "4px solid white" }
                        : props.data.rebuildingCategory === e.category
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
            <Box className={classes.root} style={{ marginTop: 20 }}>
                {items[i]}
                {i + 1 < items.length && items[i + 1]}
                {i + 2 < items.length && items[i + 2]}
            </Box>
        );
    }
    return (
        <Box maxHeight={"30em"} overflow="auto">
            <Scrollbars style={{ width: "100%", height: "20em" }}>
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
        fontSize: 20,
        fontWeight: 600,
        color: "black",
        [theme.breakpoints.down("xs")]: {
            fontSize: 20,
        },
    },
}));
