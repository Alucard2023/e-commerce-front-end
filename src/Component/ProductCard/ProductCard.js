import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ProductCard.css";


const ProductCard = () => {
  return (
    <div className='product-card' style={{marginRight:'20px'}}>
     
    <Card style={{ width: '18rem' }}>
      <Card.Img className="top" src="https://www.galaxus.ch/im/Files/5/1/4/7/6/9/5/1/3_JBL_FLIP6_FRONT_BLACK_29509_x2.png?impolicy=ProductTileImage&resizeWidth=358&resizeHeight=358&cropWidth=358&cropHeight=358&resizeType=downsize&quality=high" />
      <Card.Body>
        <Card.Title className='title'>Haut-parleur - Caliber HPG440BT - Bluetooth USB Sans fil 350 x 140 x 190 mm Noir</Card.Title>
        <div className="price-and-button">
            <p className="price">$99.99</p> </div>
        <Card.Text  className='desc'>
        Bluetooth® (10m, Bluetooth v5.0), A2DP et AVRCP, TWS : Associez 2 HPG640BT pour un son plus large et fort, 70W RMS (2x15W + 1x40W), Batterie intégrée 9000mAh (jusqu'à 12h), Boutons : Lecture, pause, prev./vol -, suivant/vol+, lumières, lien, Entrée audio 3,5mm (câble inclus), Fonction Powerbank.
        </Card.Text>
        
        <Button className="buttom">Ajouter</Button>
      </Card.Body>
    </Card>
  

    </div>
  )
}

export default ProductCard
