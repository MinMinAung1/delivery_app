import React from "react";
import CategorieList from "../components/items/CategorieList";


const DUMMY_DATA = [
  {
    id: 1,
    name: "Vegatable",
    image:
      "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      quantity: 50,
    description:
      "Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.",
  },
  {
    id: 2,
    name: "Fruit",
    image:
      "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      quantity: 50,
    description:
      "Most of the benefits of carrots can be attributed to their beta-carotene and fiber content. This root vegetable is also a good source of antioxidant agents. Furthermore, carrots are rich in vitamin A, Vitamin C, Vitamin K, vitamin B8, pantothenic acid, folate, potassium, iron, copper, and manganese. Carrots contain just 44 calories per 100gm.",
  },
];

const Categories = () => {
  return (
<div>
   <CategorieList items={DUMMY_DATA} />
</div>
  )
   
};

export default Categories;
