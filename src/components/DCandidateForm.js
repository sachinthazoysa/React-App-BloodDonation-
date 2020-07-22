import React, {useState, useEffect} from "react";
import { Grid,TextField,withStyles} from "@material-ui/core";
import useForm from "./useForm";

const styles = theme => ({
    root : {
        '& .MuiTextField-root' : {
            margin : theme.spacing(1),
            minWidth : 230,
        }
    },
})

const initialFieldValues = {
    fullName:'',
    mobile:'',
    age:'',
    email:'',
    bloodGroup:'',
    address:''
}

const DCandidateForm = ({classes, ...props}) => {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)

    return (
        <form autoComplete="off" noValidate className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    <div>Blood group</div>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="mobile"
                        variant="outlined"
                        label="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                      <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                      <TextField
                        name="address"
                        variant="outlined"
                        label="Address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </form>
    );
}

export default withStyles(styles)(DCandidateForm);