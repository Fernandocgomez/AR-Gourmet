import React from 'react'
import { Container, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MyMenus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return (
            <>
                <Container style={{ marginTop: '60px', marginBottom: '100px' }}>
                    <CardColumns>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.washingtonpost.com/resizer/7-gVChh4xgpm5Ykzg9e8aA5RzRA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y2ZKDBOKS45UFJANLPKL7PWOOU.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <div className='flex-container'>
                                    <Link className='child' style={btnMenu}>Edit</Link>
                                    <Link className='child' style={btnMenu}>Delete</Link>
                                </div>
                                <div className='flex-container-2'>
                                    <a href="#" className='child' style={btnMenuAction}>
                                        Add Item
                                    </a>                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Container>

            </>
        );
    }
}

export default MyMenus;


const btnMenu = {
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#black',
    color: 'black',


};

const btnMenuAction = {
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#black',
    color: 'black',
};


