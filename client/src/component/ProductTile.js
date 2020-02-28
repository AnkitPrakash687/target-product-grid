import React from 'react';
import starIcon from './../images/star.png';
import starIconEmpty from './../images/star-empty.png';
import AddToCart from './AddToCart';

function ProductTile(props) {
  const {
      imageurl,
    url,
    price,
    offerPrice,
    displayOfferPrice,
    title,
    averageRating,
    brand,
    totalReviews,
    isOfsOnline,
    isOfsStore
  } = props;
  const pertentageRating = (averageRating / 5) * 100;
  const classes = {
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      height: '700px',
      width: '100%',
      border: '.5px solid #aaa',
    
    },
    imageContainer: {
      height: '350px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    divider: {
      border: '.5px solid #aaa',
      width: '80%',
      alignSelf: 'center'
    },
    title: {
      width: '80%',
      height: '200px',
      margin: '10px',
      alignSelf: 'center',
      textAlign: 'start'
    },
    price: {
      width: '80%',
      alignSelf: 'center',
      textAlign: 'start',
      margin:'20px 0px'
    },
    sprite: {
      background: `url(${starIconEmpty}) repeat-x`,
      fontSize: 0,
      height: '16px',
      lineHeight: 0,
      overflow: 'hidden',
      textIndent: '-999em',
      width: '80px',
      margin: '5px 0px'
    },
    ratingSprite: {
      background: `url(${starIcon}) repeat-x`,
      backgroundPosition: '0 100%',
      float: 'left',
      height: '16px',
      display: 'block',
      width: `${pertentageRating}%`
    },
    ratingContainer: {}
  };

  const handleClick = () =>{
      window.open('https://www.target.com'+url, '_blank')
  }
  return (
    <div style={classes.container} onClick={handleClick}> 
      <div style={classes.imageContainer}>
        <img width={300} height={300} src={imageurl} alt={title}></img>
      </div>
      <div style={classes.divider} />
      <div style={classes.title}>
        <div style={{ fontWeight: 'bold' }}>{title}</div>
        <div style={{ fontSize: '14px' }}>{brand}</div>
        <div style={classes.sprite}>
          <span style={classes.ratingSprite}></span>
        </div>
        <span>{Number(averageRating).toFixed(1)}</span>
        <span>{`(${totalReviews})`}</span>
      </div>
      <div style={classes.price}>
        <span
          style={
            displayOfferPrice
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }>
          {price}
        </span>
        {displayOfferPrice && (
          <span
            style={{ marginLeft: '2px', color: 'green', fontWeight: 'bold' }}>
            {offerPrice}
          </span>
        )}
      </div>
       
        <div style={classes.price}>
          <span >
         { (!isOfsOnline || !isOfsStore)? 'In Stock':'Out of Stock' }
          </span>
        </div>
      
      <div style={classes.price}>
      <AddToCart></AddToCart>
      </div>
      
    </div>
  );
}

export default ProductTile;
