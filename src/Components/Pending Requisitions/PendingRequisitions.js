import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';

export default function PendingRequisitions(){
    const [orders, setOrders] = React.useState([]);

    const getOrderData = async () => {

    }

    const renderTableBody = () => {
        return orders && orders.map(({ id, site, siteManager, totalPrice,supplier }) => {
            return (
                <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{site}</TableCell>
                    <TableCell>{siteManager}</TableCell>
                    <TableCell>{totalPrice}</TableCell>
                    <TableCell>{supplier}</TableCell>
                </TableRow>
            )
        })
    }

        return(
            <div>
                <div style={{padding : '0' , margin : '0'}} >
                    <AppBar position='static' style={{padding : '0' , margin : '0'}}>
                        <Toolbar variant="dense">
                            <IconButton style = {{height : '20px' , width : '20px' , marginLeft : '0' , marginRight :'10px'}} aria-label="menu">
                                <Link to={'/Dashboard'}>
                                <ArrowBackIcon  color="disabled"/>
                                </Link>
                            </IconButton>
                            <Typography variant="h6" >
                                Pending Requisitions
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div style={{marginTop:'10px' , marginBottom : '20px' , display : 'flex' , justifyContent : 'center'}}>
                    <form  noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Search Order" />
                        <Button style={{marginTop : '10px' , marginLeft : '10px', borderRadius : '50px'}} color={"primary"} variant="contained">Search</Button>
                    </form>
                </div>
                <div>
                    <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Order ID</TableCell>
                                    <TableCell align="center">Site</TableCell>
                                    <TableCell align="center">Site Manager</TableCell>
                                    <TableCell align="center">Total Price</TableCell>
                                    <TableCell align="center">Supplier</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {renderTableBody()}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div style={{margin : '5px' , display : 'flex' , justifyContent : 'center'}}>
                    <Link to={'/ViewOrder'}>
                    <Button color={"primary"} variant="contained" style = {{width : '300px' , height : '40px' , borderRadius : '50px'}}>
                        View Order</Button>
                    </Link>
                </div>
            </div>
        );

}
