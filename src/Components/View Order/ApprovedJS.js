import React , {Component} from "react";
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default  function ApprovedJS(){
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
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
/*export default class ApprovedJS extends Component{
    constructor(props) {
        super(props);
    }
    render() {

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
                            Status
                        </Modal.Title>
                    </Modal.Header>
                    <div style={{textAlign: 'center'}}>
                        <Modal.Body>
                            <div style={{height : '100px'}}>
                            <h6 style={{paddingTop : '25px'}}>The Requisitions has been Approved.</h6>
                            </div>
                            <div style={{textAlign: 'center', width: '100%'}}>
                                <Button className="ml-2" style={{width: '30%'}} variant="primary"
                                        onClick={this.props.onHide}>Close</Button>
                            </div>
                        </Modal.Body>
                    </div>
                </Modal>
            </div>
        );
    }
}*/
