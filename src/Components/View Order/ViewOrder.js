import React, {Component, useEffect} from 'react';
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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import TableBody from "@material-ui/core/TableBody";
import App from "../../App";
import {getProductsByOrderNo,changestatus} from '../services'

export default function ViewOrder(props){

    const{data} = props.location;
    const [open, setOpen] = React.useState(false);

    const [dOpen , setdOpen] = React.useState(false);

    const [dConOpen , setdConOpen] = React.useState(false);

    const [items , setItems] = React.useState([]);

    const [orders, setOrders] = React.useState([]);

    const [orderDetails, setOrderDetails] = React.useState({
        orderNo : "",
        site : "",
        siteManager:"",
        supplier:""
    });

    useEffect(()=>{
        if(data != undefined || data != null){
            getProductsByNo( props.location.data.orderNo);
            setOrderDetails(data);
        }
      
       
    },[])

    async function getProductsByNo(data){
      
        const result = await getProductsByOrderNo(data);
        setItems(result)
    }
       
    async function changeOrderStatus(val){
        let data={
            status:val,
            orderno:orderDetails.orderNo
        }
        const result = await changestatus(data);
        
    }

    const handleClickOpen = () => {
        setOpen(true);
        const val = "approved";
        changeOrderStatus(val);
    };

   

    const handleClose = () => {
        setOpen(false);
    };


    const handleDeclineOpen = () => {
        setdOpen(true);
    }

    const handleDeclineClose = () =>{
        setdOpen(false);
    }

    const handleDecConOpen = () => {
        console.log("ff");
        setdConOpen(true);

        const val = "declined";
        changeOrderStatus(val);
    }

    const handleDecConClose = () =>{
        setdConOpen(false);
    }

    const approvePopUp = () => {
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Status</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        The Requisitions has been Approved.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    const declinePopUp = () => {

    }


    const renderTableBody = () =>{
        return items && items.map(({ id, name, quantity, price}) => {
            return (
                <TableRow key={id}>
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">{quantity}</TableCell>
                    <TableCell align="center">{price}</TableCell>
                </TableRow>
            )
        })
    }

   

    const renderTotalPrice = () => {
        return orders && orders.map(({id ,totalPrice}) => {
            return (
                <div>
                <form>
                    <label style={{fontWeight : 'bold' , fontSize : '25px'}}>Total Price : </label>
                    <label style={{fontWeight : 'bold' , fontSize : '20px'}}>{totalPrice}</label>
                </form>
                </div>
            )
        })
    }

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
                    <label style={{marginLeft: '10px'}}>{orderDetails.orderNo}</label>
                    <br/>
                    <label style={{marginBottom: '-10px', fontWeight: 'bold'}}>Site : </label>
                    <label style={{marginLeft: '10px'}}> {orderDetails.site}</label>
                    <br/>
                    <label style={{marginBottom: '-10px', fontWeight: 'bold'}}>Site Manager : </label>
                    <label style={{marginLeft: '10px'}}>{orderDetails.siteManager}</label>
                    <br/>
                    <label style={{marginBottom: '-10px', fontWeight: 'bold'}}>Supplier : </label>
                    <label style={{marginLeft: '10px'}}> {orderDetails.supplier}</label>
                    <br/>
                </from>
                {/* {renderOrderDetails()} */}
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
                        <TableBody>
                            {renderTableBody()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{marginTop:'10px' , display : 'flex' , justifyContent : 'center'}}>
                {/*<form>
                <label style={{fontWeight : 'bold' , fontSize : '25px'}}>Total Price : </label>
                <label style={{fontWeight : 'bold' , fontSize : '20px'}}>Value Comes to here</label>
                </form>*/}
                {/* {renderTotalPrice()} */}
            </div>

            <div style={{margin: '5px', display: 'flex', justifyContent: 'center'}}>
                <Button color={"primary"} variant="contained"
                        style={{height: '40px', borderRadius: '50px', margin: '5px'}}
                        onClick={handleClickOpen}>Approve</Button>
                {/*<ApprovedJS
                    open = {open}
                />*/}
                {/*View Order Approved JS*/}

                <div>
                    {approvePopUp()}
                </div>

                <Button variant="contained"
                        style={{height: '40px', borderRadius: '50px', margin: '5px'}}
                        onClick={handleDeclineOpen}>Decline</Button>
                <div >
                    <Dialog
                        open={dOpen}
                        onClose={handleDeclineClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Provide Reason to Decline the Order
                            </DialogContentText>
                            <FormControl style={{width : '314px'}}>
                                <TextField
                                    id="standard-multiline-static"
                                    multiline
                                    rows={4}
                                />
                            </FormControl>
                        </DialogContent>

                        <DialogActions>
                            <Button
                                onClick={handleDecConOpen} variant="contained" color="primary" autoFocus>
                                Decline
                            </Button>
                            <div>
                                <Dialog
                                    open={dConOpen}
                                    onClose={handleDecConClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">Status</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            The Requisitions has been Declined.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>

                                        <Button onClick={() => {
                                            handleDecConClose();
                                            handleDeclineClose();
                                        }} variant="contained" autoFocus>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                            <Button onClick={handleDeclineClose}
                                 variant="contained" >
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

                {/*<Button variant="contained"
                        style={{height: '40px', borderRadius: '50px', margin: '5px'}}
                        onClick={() => this.setState({displayDeclinedModel: true})}>Decline</Button>*/}
                {/*<DeclineJS
                    show={this.state.displayDeclinedModel}
                    onHide={closeModel}/>*/}
            </div>
        </div>
    );
}

/*export default class ViewOrder extends Component{
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
}*/
