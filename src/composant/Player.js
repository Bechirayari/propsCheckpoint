import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Player = (props) => {
    const  name= props.name;
    const  team= props.team;
    const  nationality= props.nationality;
    const  jerseyNumber= props.jerseyNumber;
    const  imageUrl= props.imageUrl;
    const  age= props.age;

const myFunction=(props)=>{
    console.log('cliqué',props.name)
    alert(`My destination is ${props.name}, nice 😊`)
}

  return (
    <>
 <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{team}</Card.Title>
        <Card.Text>
         {nationality} <br/>
         {jerseyNumber} <br/>
         {age} <br/>

        </Card.Text>
        <Button  onClick={()=>myFunction(props)} variant="success" style={{marginLeft:"20%"}}>Go somewhere</Button>
      </Card.Body>
    </Card>



    </>
  )
}

export default Player