import React, {useState, useEffect} from "react";
import { Grid,TextField} from "@material-ui/core";


const DCandidateForm = (props) => {
    return (
        <form autoComplete="off" noValidate>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    name="fullName"
                    variant="outlined"
                    label="Full Name"
                    />
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </form>
    );
}

export default DCandidateForm;