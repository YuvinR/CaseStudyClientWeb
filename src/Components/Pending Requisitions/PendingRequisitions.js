import React, {Component,useEffect} from 'react';
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
import {getorders} from '../services'
import EditIcon from '@material-ui/icons/Edit';

export default function PendingRequisitions(props){
    const [orders, setOrders] = React.useState([]);

    const getOrderData = async () => {

    }

    useEffect(()=>{
        getPendingorders();
    },[])

     async function getPendingorders(){
        console.log("gg");
        const result =  await getorders();
        setOrders(result)
    }

    function handleOnClick(e,item){
        props.history.push({
            pathname:'ViewOrder',
            data:item
        })
    }
       

    const renderTableBody = () => {
        return orders && orders.map((item) => {
            return (
                <TableRow key={item.orderNo}>
                    <TableCell align="center">{item.orderNo}</TableCell>
                    <TableCell align="center">{item.site}</TableCell>
                    <TableCell align="center">{item.siteManager}</TableCell>
                    <TableCell align="center">{item.totalPrice}</TableCell>
                    <TableCell align="center">{item.supplier}</TableCell>
                    <TableCell align="center">
                    <div class="font-icon-wrapper" onClick={(e) => handleOnClick(e,item)}>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <EditIcon />
                        </IconButton>
                    </div>
                    </TableCell>
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
                                    <TableCell align="center">Order No</TableCell>
                                    <TableCell align="center">Site</TableCell>
                                    <TableCell align="center">Site Manager</TableCell>
                                    <TableCell align="center">Total Price</TableCell>
                                    <TableCell align="center">Supplier</TableCell>
                                    <TableCell align="center">View</TableCell>
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
