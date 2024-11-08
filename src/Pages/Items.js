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
        name:'Cabbage',
        image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:3,
        name:'Cabbage',
        image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:4,
        name:'Cabbage',
        image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:5,
        name:'Cabbage',
        image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:6,
        name:'Cabbage',
        image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:7,
        name:'Cabbage',
        image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:8,
        name:'Cabbage',
        image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:9,
        name:'Cabbage',
        image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
     {
        id:10,
        name:'Cabbage',
        image:'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
        price:10.10,
        description:'Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.'
     },
]

const Items = () => {
  return (
    <div>
      <h2>Vagetable</h2>
      <ItemList items={DUMMY_DATA} />
    </div>
  );
};

export default Items;
