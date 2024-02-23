import React from 'react';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';


function Home() {
    return (
        <Container >
				<Row>
					<Col md={3} className="mt-4">
						<Card>
							<Card.Img variant="top" src="https://i0.wp.com/southjerseyfoodscene.com/wp-content/uploads/2023/05/The-Roost-Egg-Harbor-Township.jpg?fit=960%2C540&ssl=1" />
							<Card.Body>
								<Card.Title>RESTAURANT 1</Card.Title>
								<Card.Text>
									A place for food lovers to connect.
								</Card.Text>
								<Button variant="primary">more details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="mt-4">
						<Card>
							<Card.Img variant="top" src="https://image.slidesdocs.com/responsive-images/background/elegant-ambience-a-beautifully-rendered-3d-image-of-a-fine-dining-restaurant-powerpoint-background_357ae15ebf__960_540.jpg" />
							<Card.Body>
								<Card.Title>RESTAURANT 2</Card.Title>
								<Card.Text>
									Hundreds of flavors under one roof.
								</Card.Text>
								<Button variant="primary">More Details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="mt-4">
						<Card>
							<Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/58265ae8bebafb7de35ddf23/1640626609150-H40Q4VYKU6INRTGF5TLV/IMG_1060+960+x+540.jpg" />
							<Card.Body>
								<Card.Title>RESTAURANT 3</Card.Title>
								<Card.Text>
									A pinch of passion in every dish.
								</Card.Text>
								<Button variant="primary">More Details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="mt-4">
						<Card>
							<Card.Img variant="top" src="https://image.slidesdocs.com/responsive-images/background/3d-render-of-a-beautifully-decorated-fine-dining-establishment-powerpoint-background_f6272d6eee__960_540.jpg" />
							<Card.Body>
								<Card.Title>RESTAURANT 4</Card.Title>
								<Card.Text>
									Where your food dreams come true.
								</Card.Text>
								<Button variant="primary">More Details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="mt-4">
						<Card>
							<Card.Img variant="top" src="https://image.slidesdocs.com/responsive-images/background/aerial-view-of-a-restaurant-kitchen-in-a-chic-cafe-lounge-powerpoint-background_5e3a64ba40__960_540.jpg" />
							<Card.Body>
								<Card.Title>RESTAURANT 5</Card.Title>
								<Card.Text>
									A taste you will remember.
								</Card.Text>
								<Button variant="primary">More Details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="mt-4">
						<Card>
							<Card.Img variant="top" src="https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://media.newmindmedia.com/TellUs/image/%3Ffile%3DPi-Taket_utsikt_Foto_Pi-Taket_2127944379.jpg%26dh%3D540%26dw%3D960%26t%3D4" />
							<Card.Body>
								<Card.Title>RESTAURANT 6</Card.Title>
								<Card.Text>
									Good food and great vibes.
								</Card.Text>
								<Button variant="primary">More Details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="mt-4">
						<Card>
							<Card.Img variant="top" src="https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/f/db/fdb156f4-dc85-561e-85b0-931adb94c1a0/5ef79f6b6e28b.image.jpg?crop=960%2C540%2C0%2C90&resize=960%2C540&order=crop%2Cresize" />
							<Card.Body>
								<Card.Title>RESTAURANT 7</Card.Title>
								<Card.Text>
									Foodies welcome here.							
								</Card.Text>
								<Button variant="primary">More Details</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} className="mt-4">
						<Card>
							<Card.Img variant="top" src="https://www.desmondgv.com/wp-content/uploads/2017/11/RESTAURANT-DRAFT-02.jpg" />
							<Card.Body>
								<Card.Title>RESTAURANT 8</Card.Title>
								<Card.Text>
									For the love of delicious food.
								</Card.Text>
								<Button variant="primary">More Details</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
    )
}

export default Home;