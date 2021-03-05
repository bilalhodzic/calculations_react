import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function ColoredBox(props) {
  const classes = useStyles(props);
  return (
    <Box className={classes.coloredBox} {...props}>
      <Typography className={classes.text}>{props.text}</Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  coloredBox: (props) => ({
    backgroundColor: props.backgroundcolor,
    color: props.color,
    width: 70,
    borderRadius: 18.25,
    position: props.position || "inherit",
    bottom: 10,
    right: 10,
    height: 21,
    textAlign: "center",
  }),
  text: {
    fontSize: 13.69,
    fontWeight: 400,
  },
}));
