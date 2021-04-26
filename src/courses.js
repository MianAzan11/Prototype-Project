import React, { Component } from "react"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Button } from 'bootstrap';
class courses extends Component {
    render(){
        return(
<div>
<CardDeck>
  <Card>
    <Card.Body>
      <Card.Title>Chemistry</Card.Title>
      <Card.Text>
      Chemistry is a branch of science that involves the study of the composition, structure and properties of matter.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button type="submit" className="btn btn-primary btn-lg btn-block">Buy This Course</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Physics</Card.Title>
      <Card.Text>
      Physics is the branch of science that deals with the structure of matter and how the fundamental constituents of the universe interact.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button type="submit" className="btn btn-primary btn-lg btn-block">Buy This Course</button>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
        );
    }
    
}
export default courses