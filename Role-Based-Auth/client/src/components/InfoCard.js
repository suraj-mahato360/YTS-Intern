import Card from 'react-bootstrap/Card';
import Details from "./Details";

const InfoCard = (props)=> {
  return (
    <Card style={{ width: '24rem',height:'10rem', backgroundColor: "#020304" }}>
      <Card.Body style={{color:"white"}}>
        <Card.Title style={{fontSize:"1.9rem"}}><Details detailInfo={props.title} /></Card.Title>
        <Card.Text style={{fontSize:"1.5rem"}}>
        <Details detailInfo={props.money} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InfoCard;