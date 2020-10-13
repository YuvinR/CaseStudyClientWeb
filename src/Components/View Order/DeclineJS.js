import React , {Component} from "react";
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import DeclineConfirm from "./DeclineConfirm";

export default class DeclineJS extends Component{

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
}
