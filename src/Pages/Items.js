import React from "react";
import ItemList from "../components/items/ItemList";

const DUMMY_DATA = [
    {
       id:1,
       name:'Cabbage',
       image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
       price:10.10,
       description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
    },
    {
        id:2,
        name:'Carrot',
        image:'https://egmontseeds.co.nz/cdn/shop/files/54161_Carrot_Chantenay_Red_Core.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:3,
        name:'GreenVeg',
        image:'https://www.100daysofrealfood.com/wp-content/uploads/2023/09/shutterstock_301752452-800x659.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:4,
        name:'Salad',
        image:'https://www.producemarketguide.com/media/user_5q6Kv4eMkN/400/broccoli_commodity-page.png',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     
]

const Items = () => {
  return (
    <div>
      <ItemList items={DUMMY_DATA} />
    </div>
  );
};

export default Items;
