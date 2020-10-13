import React , {Component} from "react";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom"
import Divider from "@material-ui/core/Divider";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


export default function Dashboard(){
        return (
            <div>
                <div style={{padding : '0' , margin : '0'}} >
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" >
                                Dashboard
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="FirstCard" style={{"margin":'5px'}} >
                    <Card>
                        <Link to={'/PendingRequisitions'}>
                            <Button size="small" style={{height:'100%' , width: '100%'}}>
                                <CardContent>
                                    <DonutLargeIcon style={{height:'50px' , width : '50px' }} />
                                </CardContent>

                                <CardContent>
                                    <Typography style={{height : "20%" , left : '0' , right : '0' }}>
                                        Pending Requisitions
                                    </Typography>
                                </CardContent>
                            </Button>
                        </Link>
                    </Card>

                </div>
                <div className="SecondCard" style={{"margin":'5px'}}>
                    <Card>
                        <Button size="small" style={{height:'100%' , width: '100%'}}>
                            <CardContent>
                                <CheckCircleIcon style={{height:'50px' , width : '50px', top :'0' }} />
                            </CardContent>
                            <CardContent>
                                <Typography style={{height : "20%" , left : '0' , right : '0' }} >
                                    Approved Requisitions
                                </Typography>
                            </CardContent>
                        </Button>
                    </Card>
                </div>
                <div className="FirstCard" style={{"margin":'5px'}}>
                    <Card>

                        <Button size="small" style={{height:'100%' , width: '100%'}} >
                            <CardContent>
                                <CancelIcon style={{height:'50px' , width : '50px' }} />
                            </CardContent>
                            <CardContent>
                                <Typography style={{height : "20%" , left : '0' , right : '0' }} >
                                    Order History
                                </Typography>
                            </CardContent>
                        </Button>

                    </Card>
                </div>
            </div>
         );

}
