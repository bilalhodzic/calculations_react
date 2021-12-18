
import { Box, InputLabel, makeStyles, TextField } from "@material-ui/core";

import getFields from "../../helper/Fields";

export default function Step3 (props){
    const classes = useStyles();

    const fields = getFields(props.type);
    const formItems = fields.map((entry) => {
        return <Box className={classes.paperBox}>
            <InputLabel>{entry.label}</InputLabel>
            <TextField variant="outlined"></TextField>
        </Box>
    });
    let form = [];
    for(let i = 0; i < formItems.length; i+=3){
        form.push(
            <Box className={classes.root}>
                {formItems[i]}
                {i + 1 < formItems.length ? formItems[i+1] : null}
                {i + 2 < formItems.length ? formItems[i+2] : null}
            </Box>
        );
    }
    
    return (
        <>
            {form.map((item) => item)} 
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
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
      [theme.breakpoints.down("xs")]: {
        width: 140,
      },
    },
  }));