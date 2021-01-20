import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { atan, tan, pi } from 'mathjs'

export class fovConvert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          ifovt: "null",
          ofovt: "null",
          ifov: "null"
      };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
      return (
        <Row>
          <Col xs={6}>
            <h3>Inputs</h3>
            <Form>
              <Form.Group controlId="ifovt">
                    <Form.Label>Input FOV Type</Form.Label>
                    <Form.Control as="select" name="ifovt" onChange={this.myChangeHandler}>
                        <option value="">--Please choose an option--</option>
                        <option value="0.5625">16:9 hFOV (OW, Val, QC)</option>
                        <option value="0.75">4:3 hFOV (Source, Quake)</option>
                        <option value="1">vFOV (R6, OW(ads))</option>
                        <option value="other">Other WIP</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="ofovt">
                    <Form.Label>Output FOV Type</Form.Label>
                    <Form.Control as="select" name="ofovt" onChange={this.myChangeHandler}>
                        <option value="">--Please choose an option--</option>
                        <option value="0.5625">16:9 hFOV (OW, Val, QC)</option>
                        <option value="0.75">4:3 hFOV (Source, Quake)</option>
                        <option value="1">vFOV (R6, OW(ads))</option>
                        <option value="other">Other WIP</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input FOV</Form.Label>
                    <Form.Control type="number" onChange={this.myChangeHandler} name="ifov" placeholder="Insert FOV Value" min="1" max="180"/>
                </Form.Group>
            </Form>
          </Col>
          <Col xs={6}>
            <h3>Outputs</h3>
            <Form>
              <Form.Group>
                <Form.Label>Output FOV</Form.Label>
                <Form.Control value={((atan(((parseFloat(this.state.ifovt)) / (parseFloat(this.state.ofovt))) * tan((parseFloat(this.state.ifov) * pi) / 360)) * 360) / pi).toString()} readOnly/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      );
    }
  }

export default fovConvert;