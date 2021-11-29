import React from "react";
import { Box, Fab, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as ArrowRigth } from "../../images/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../images/arrowLeft.svg";
import ColoredBox from "../ColoredBox";
import useWindowDimensions from "../windowDimension";

export default function ScrollList(props) {
  const { list, type } = props;
  const { width } = useWindowDimensions();
  const [startSlice, setStartSlice] = React.useState(0);
  const [endSlice, setEndSlice] = React.useState(width < 600 ? 1 : 3);
  const [displayList, setDisplayList] = React.useState([]);
  const listLength = list.length;
  const classes = useStyles({
    listLength: listLength,
    displayLength: displayList.length,
  });

  React.useEffect(() => {
    //call this when window width changes and set display list to responsive-- 1 element
    if (width < 600) {
      setEndSlice(1);
      setDisplayList(list.slice(startSlice, endSlice));
    }
    if (width > 600 && endSlice === 1) {
      setDisplayList(list.slice(startSlice, 3));

      setEndSlice(3);
    }
  }, [width]);

  React.useEffect(() => {
    //call function when list changes
    setDisplayList(list.slice(startSlice, endSlice));
  }, [list]);

  const handleNextItem = () => {
    //execute only if there is more element in list
    if (endSlice < listLength) {
      //because useState is asynchronous-- first change the display list
      setDisplayList(list.slice(startSlice + 1, endSlice + 1));
      setStartSlice(startSlice + 1);
      setEndSlice(endSlice + 1);
    }
  };

  //execute only if the dispaylist has changed
  const handlePrevItem = () => {
    if (startSlice > 0) {
      setDisplayList(list.slice(startSlice - 1, endSlice - 1));
      setStartSlice(startSlice - 1);
      setEndSlice(endSlice - 1);
    }
  };

  return (
    <Box className={classes.wraper}>
      <Fab
        size="medium"
        aria-label="prev"
        style={{ marginLeft: -35, left: 0 }}
        className={classes.arrowBtn}
        onClick={handlePrevItem}
      >
        <ArrowLeft />
      </Fab>
      {displayList &&
        displayList.map((el, index) =>
          type === "calculations" ? (
            el.item
          ) : (
            <Box className={classes.menuItem} key={index}>
              <Box className={classes.menuIcon}>{el.icon}</Box>
              <Typography style={{ fontWeight: 600, margin: 8 }}>
                {el.name}
              </Typography>
              <Typography
                style={{ color: "#6B6B6B", fontSize: 13.69, margin: 10 }}
              >
                {el.price}$
              </Typography>

              <ColoredBox
                color={el.color}
                backgroundcolor={el.backgroundColor}
                text={el.type}
                position="absolute"
              />
            </Box>
          )
        )}
      <Fab
        size="medium"
        aria-label="next"
        style={{ right: 0, marginRight: -35 }}
        className={classes.arrowBtn}
        onClick={handleNextItem}
      >
        <ArrowRigth />
      </Fab>
    </Box>
  );
}

//add new styles here
const useStyles = makeStyles((theme) => ({
  menuItem: {
    width: 207,
    height: 200,
    boxShadow: "0px 0px 14px 3px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    fontSize: 15,
    fontWeight: 600,
    position: "relative",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  menuIcon: {
    paddingTop: theme.spacing(3),
  },
  wraper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(3),
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },

  coloredBox: {
    width: 70,
    borderRadius: 18.25,
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: 13.69,
    fontWeight: 400,
  },
  arrowBtn: (props) => ({
    backgroundColor: "white",
    color: "#21344D",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    display:
      props.listLength === 3 && props.displayLength === 3 ? "none" : "inherit",
  }),
}));
