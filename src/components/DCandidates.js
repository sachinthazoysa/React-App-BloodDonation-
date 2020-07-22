import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import { Grid,Paper,TableContainer,Table,TableHead,TableRow,TableCell,TableBody, withStyles} from "@material-ui/core";
import DCandidateForm from "./DCandidateForm";


const styles = theme => ({
    root: {
      "& .MuiTableCell-head":{
          fontSize:"1.25rem",
      }
    },  

    paper: {
        margin : theme.spacing(2),
        padding : theme.spacing(2)
    }
})

const DCandidates = ({classes,...props}) => {
    // const [x, setX] = useState(0)
    // setX(5)

    useEffect(()=>{
        props.fetchAllDCandidates()
    },[])


    return (
        <Paper className={classes.paper} elevation = {3}>
        <Grid container>

            <Grid item xs = {6} >
                <DCandidateForm/>
            </Grid>
            
            <Grid item xs = {6} >
                <TableContainer>
                    <Table>

                        <TableHead className = {classes.root}> 
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell>Blood group</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                props.dCandidateList.map((record, index) => {
                                    return(<TableRow key={index} hover>
                                        <TableCell>{record.fullName}</TableCell>
                                        <TableCell>{record.mobile}</TableCell>
                                        <TableCell>{record.bloodGroup}</TableCell>
                                    </TableRow>)
                                }) 

                            }
                        </TableBody>

                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
        </Paper>
        );
}

const mapStateToProps = state=>(
    {
          dCandidateList : state.dCandidate.list
    })

const mapActionsToProps = {
    fetchAllDCandidates : actions.fetchAll
}

export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(DCandidates));