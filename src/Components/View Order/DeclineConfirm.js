import React , {Component} from "react";
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";

export default class DeclineConfirm extends Component{
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
                                <h6 style={{paddingTop : '25px'}}>The Requisitions has been Declined.</h6>
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
}
