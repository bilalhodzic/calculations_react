import React from "react";
import { Box, TextField } from "@material-ui/core";

export default function Step6(props) {
    const [isDateType, setDateType] = React.useState(false);

    return (
        <>
            <Box>
                <Box>
                    <TextField
                        type={isDateType ? "date" : "text"}
                        onMouseOver={() => {
                            console.log("Ovdje");
                            setDateType(!isDateType);
                        }}
                        label="Start date"
                        InputLabelProps={{
                            shrink: true
                        }}
                    ></TextField>
                </Box>
                <Box>
                    <TextField type="date"></TextField>
                </Box>
            </Box>
        </>
    );
}
