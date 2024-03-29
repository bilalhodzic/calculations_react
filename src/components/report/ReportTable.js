import React from "react";
import {
    Box,
    TableBody,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function ReportTable(props) {
    const classes = useStyles();
    const data = props.data;
    const calculationData = props.calculationData;

    const tableItems = getTableData(data, calculationData, classes);

    return (
        <Box width={"100%"} {...props}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.titleCell} colSpan={3} align="center">
                            <Typography style={{color: "white", fontSize: "1.9vh"}} className={classes.titleText}>{props.title}</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={classes.tableCell}></TableCell>
                        <TableCell className={classes.tableCell} align="center"><Typography style={{color: "#606060"}} className={classes.text}>Exklusiva moms</Typography></TableCell>
                        <TableCell className={classes.tableCell} align="center"><Typography style={{color: "#606060"}} className={classes.text}>Inklusive moms</Typography></TableCell>
                    </TableRow>
                    {tableItems.map((e) => e)}
                </TableBody>
            </Table>
        </Box>
    );
}

function getTableData(data, calculationData, classes){
    const items = [];
    for(const entry of data){
        items.push(
            <TableRow>
                <TableCell className={classes.tableCell}><Typography style={{color: "#444444"}} className={classes.text}>{entry.label}</Typography></TableCell>
                <TableCell className={classes.tableCell} align="center"><Typography style={{color: "black"}} className={classes.text}>{(calculationData[entry.noMoms] || 0).toLocaleString()}</Typography></TableCell>
                <TableCell className={classes.tableCell} align="center"><Typography style={{color: "black"}} className={classes.text}>{(calculationData[entry.moms] || 0).toLocaleString()}</Typography></TableCell>
            </TableRow>
        );
    }
    return items;
}

//add new styles here
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    tableCell: {
        border: "1px solid #CBCBCB"
    },
    titleCell: {
        border: "1px solid #CBCBCB",
        background: "#21344D"
    },
    titleText: {
        fontSize: "1.7vh",
        [theme.breakpoints.down("xs")]: {
            fontSize: 16
        }
    },
    text: {
        fontSize: "1.5vh",
        [theme.breakpoints.down("xs")]: {
            fontSize: 14
        }
    }
}));
