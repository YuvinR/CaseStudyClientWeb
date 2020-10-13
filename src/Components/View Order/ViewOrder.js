import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import ApprovedJS from "./ApprovedJS";
import DeclineJS from "./DeclineJS";

export default class ViewOrder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayApprovedModel : false ,
            displayDeclinedModel : false
        }
    }


    render() {
        let closeModel = () => this.setState({
            displayApprovedModel:false,
            displayDeclinedModel:false
        });

        return (
            <div>
                <div>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton style={{height: '20px', width: '20px', marginLeft: '0', marginRight: '10px'}}
                                        aria-label="menu">
                                <Link to={'/PendingRequisitions'}>
                                    <ArrowBackIcon color="disabled"/>
                                </Link>
                            </IconButton>
                            <Typography variant="h6">
                                View Order
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div style={{margin: '10px'}}>
                    <from>
                        <label style={{marginBottom: '-10px', fontWeight: 'bold'}}>Order ID : </label>
                        <label style={{marginLeft: '10px'}}>Value of Order ID</label>
                        <br/>
                        <label style={{marginBottom: '-10px', fontWeight: 'bold'}}>Site : </label>
                        <label style={{marginLeft: '10px'}}> Value of the Site</label>
                        <br/>
                        <label style={{marginBottom: '-10px', fontWeight: 'bold'}}>Site Manager : </label>
                        <label style={{marginLeft: '10px'}}> Value of the Site Manager</label>
                        <br/>
                        <label style={{marginBottom: '-10px', fontWeight: 'bold'}}>Supplier : </label>
                        <label style={{marginLeft: '10px'}}> Value of the Supplier</label>
                        <br/>
                    </from>
                </div>
                <div>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Product</TableCell>
                                    <TableCell align="center">Qty</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </div>
                <div>

                </div>

                <div style={{margin: '5px', display: 'flex', justifyContent: 'center'}}>
                    <Button color={"primary"} variant="contained"
                            style={{height: '40px', borderRadius: '50px', margin: '5px'}}
                            onClick={() => this.setState({displayApprovedModel: true})}>Approve</Button>
                    <ApprovedJS
                        show={this.state.displayApprovedModel}
                        onHide={closeModel}
                    />
                    <Button variant="contained"
                            style={{height: '40px', borderRadius: '50px', margin: '5px'}}
                            onClick={() => this.setState({displayDeclinedModel: true})}>Decline</Button>
                    <DeclineJS
                    show={this.state.displayDeclinedModel}
                    onHide={closeModel}/>
                </div>
            </div>
        );
    }
}
