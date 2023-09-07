import React from 'react'
import Player from './Player'
import players from '../Data/players'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PlayersList = () => {
  return (
    <> 
<Container>
   <Row>
    {players.map(({name,team,nationality,jerseyNumber,age,imageUrl})=>
    <Col>
    <Player
          name={name} 
          team={team}
          nationality={nationality}
          jerseyNumber={jerseyNumber}
          age={age}
          imageUrl={imageUrl}
          />
    </Col>)}
   </Row>
</Container>
         
         </>
  )
}

export default PlayersList