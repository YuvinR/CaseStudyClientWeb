import React , {Component} from "react";
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import DeclineConfirm from "./DeclineConfirm";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { FormControl } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

export default function DeclineJS() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
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
                        <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
                            Decline
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
    );
}


/*export default class DeclineJS extends Component{

    constructor(props) {
        super(props);
        this.state = {
            displayDeclinedConfirmModel : false
        }
    }

    render() {
        let closeModel = () => this.setState({
            displayDeclinedConfirmModel:false
        });

        return (

            <div>
                <Modal
                    {...this.props}
                    dialogClassName="modal-60w"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Alert
                        </Modal.Title>
                    </Modal.Header>
                    <div style={{textAlign: 'center'}}>
                        <Modal.Body>
                            <Form style={{display: "inline-block"}}>
                                <Form.Group controlId="DeclineTxt" >
                                    <Form.Label
                                        style={{float: 'left', fontSize: '15px', fontFamily: 'Square Sans Serif'}}>Please
                                        Provide Reason to Decline the Order</Form.Label>
                                    <Form.Control type="text" name="declineResInput" as="textarea" rows="3" style={{height:'100px'}} required/>
                                </Form.Group>

                                <div style={{textAlign: 'center', width: '100%'}}>
                                    <Button className="mr-2"variant="primary"
                                            style={{float : 'left' , marginLeft : '110px'}}
                                            type="submit" onClick={() =>
                                        this.setState({displayDeclinedConfirmModel: true })
                                        }
                                    >Decline</Button>
                                    <DeclineConfirm
                                        show={this.state.displayDeclinedConfirmModel}
                                        onHide={closeModel}/>
                                    <Button className="ml-2" variant = "light"
                                            onClick={this.props.onHide}>Cancel</Button>
                                </div>
                            </Form>
                        </Modal.Body>
                    </div>
                </Modal>
            </div>
        );
    }
}*/
