import React, { useEffect, useState } from 'react';
import ProductTile from './../component/ProductTile';

export default function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'secret-key':
          '$2b$10$rHnFBuMfArpGciyF.iOhse8FGJ0GN2Nd8vpT21RYDzY.UOKAp7UKW'
      }
    };
    fetch('https://api.jsonbin.io/b/5e58a42e4f8493291971ee2d', options)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        const productList = json.search_response.items.Item;
        console.log(productList);
        setProductList(productList);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const list = productList.map(p => {
    const { base_url, primary } = p.images[0];
    const {
      pick_up_in_store,
      ship_to_store,
      ship_from_store,
      rush_delivery,
      is_out_of_stock_in_all_store_locations,
      is_out_of_stock_in_all_online_locations,
      average_rating,
      total_reviews,
      title,
      list_price,
      offer_price,
      brand
    } = p;

    const displayOfferPrice =
      list_price.price > offer_price.price ? true : false;

    return (
      <ProductTile
        key={p.tcin}
        imageurl={base_url + primary}
        url={p.url}
        brand={brand}
        averageRating={average_rating}
        totalReviews={total_reviews}
        title={title}
        price={list_price.formatted_price}
        offerPrice={offer_price.formatted_price}
        pickUpInStore={pick_up_in_store}
        shipToStore={ship_to_store}
        isOfsOnline={is_out_of_stock_in_all_online_locations}
        isOfsStore={is_out_of_stock_in_all_store_locations}
        displayOfferPrice={displayOfferPrice}
      />
    );
  });

  return (
    <div
      style={{
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
      }}>
      {list}
    </div>
  );
}
