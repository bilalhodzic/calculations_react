import {
    Box,
    InputAdornment,
    InputLabel,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";

import getFields from "../../helper/Fields";
import { ReactComponent as InfoIcon } from "../../images/infoIcon.svg";

export default function Step3(props) {
    const classes = useStyles();

    const fields = getFields(props.type);

    const inputProps = {
        endAdornment: <InputAdornment position="end"></InputAdornment>,
    };
    const formItems = fields.map((entry) => {
        return (
            <Box className={classes.paperBox}>
                <InputLabel>{entry.label}</InputLabel>
                <Box position="relative" display="inline-block">
                    <TextField
                        type="number"
                        placeholder={!entry.isRight ? entry.placeholder : null}
                        variant="outlined"
                        InputProps={
                            entry.isRight
                                ? {
                                      endAdornment: (
                                          <InputAdornment position="end">
                                              <Typography>{entry.placeholder}</Typography>
                                              <sup>{entry.superscript}</sup>
                                          </InputAdornment>
                                      ),
                                  }
                                : null
                        }
                    ></TextField>
                    {entry.info ? <abbr title={entry.info}><InfoIcon style={{ position: "absolute", right: 5, top: 5, height: 15, width: 15}} /></abbr>: null}
                </Box>
            </Box>
        );
    });
    let form = [];
    for (let i = 0; i < formItems.length; i += 3) {
        form.push(
            <Box className={classes.root}>
                {formItems[i]}
                {i + 1 < formItems.length ? formItems[i + 1] : null}
                {i + 2 < formItems.length ? formItems[i + 2] : null}
            </Box>
        );
    }

    return <Box maxHeight={260} overflow="auto">{form.map((item) => item)}</Box>;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        height: 140,
        textAlign: "center",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        [theme.breakpoints.down("xs")]: {
            width: 140,
        },
    },
}));
