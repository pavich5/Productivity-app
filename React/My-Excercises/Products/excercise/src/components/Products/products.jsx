import React from "react";
import "./products.css";

const Products = () => {
  const products = [
    {
      name: "Creatine Monohydrate",
      description:
        "Enhance your workout performance and build lean muscle with our high-quality Creatine Monohydrate powder.",
      price: 19.99,
      image:
        "http://cdn.shopify.com/s/files/1/0222/4128/0074/products/NTC_CreatineMonohydrate_Powder_FruitPunch_500gm_46oz_Front1_1200x1200.jpg?v=1668617082",
    },
    {
      name: "Whey Protein Powder",
      description:
        "Fuel your muscles and aid in muscle recovery with our premium Whey Protein Powder, packed with essential amino acids.",
      price: 29.99,
      image:
        "https://i5.walmartimages.com/asr/d535f07c-a555-4932-8ba2-291e87ee14aa.1ab7b39157b8c49c200c1c2b328180e8.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      name: "Pre-Workout Energy Booster",
      description:
        "Get an energy boost and maximize your workout potential with our Pre-Workout formula, designed to increase focus and endurance.",
      price: 39.99,
      image:
        "https://content.optimumnutrition.com/i/on/gold-standard-pre-workout_Image_01?layer0=$PDP$",
    },
    {
      name: "Advanced Creatine Formula",
      description:
        "Experience explosive strength and power gains with our Advanced Creatine Formula, perfect for intense workouts and fast muscle growth.",
      price: 49.99,
      image:
        "https://i5.walmartimages.com/asr/1852574c-9ec6-42ca-8b25-3346a5f8101c.331a2e0584db8beb9991e7c93a33b918.jpeg",
    },
    {
      name: "Plant-Based Protein Blend",
      description:
        "Fuel your body with our Plant-Based Protein Blend, sourced from high-quality plant proteins to support muscle development and recovery.",
      price: 59.99,
      image:
        "https://cdn.shopify.com/s/files/1/2440/0931/products/Creatine-2020-_RENDERING_6e9c9ed1-85f0-48e5-bba1-58c505f7e954_1000x.png?v=1603002236",
    },
    {
      name: "Performance-Enhancing Pre-Workout",
      description:
        "Unlock your full potential with our Performance-Enhancing Pre-Workout formula, scientifically formulated to improve energy, focus, and endurance.",
      price: 69.99,
      image:
        "https://cdn.shopify.com/s/files/1/0650/4526/6673/products/The_Curse_Pre_Workout_Powder_Blue_Raspberry_a.png?v=1675978585",
    },
  ];

  const mostUsed = [
    {
      name: "Pre-Workout Energy Booster",
      description:
        "Get an energy boost and maximize your workout potential with our Pre-Workout formula, designed to increase focus and endurance.",
      price: 39.99,
      image:
        "https://content.optimumnutrition.com/i/on/gold-standard-pre-workout_Image_01?layer0=$PDP$",
    },
    {
      name: "Advanced Creatine Formula",
      description:
        "Experience explosive strength and power gains with our Advanced Creatine Formula, perfect for intense workouts and fast muscle growth.",
      price: 49.99,
      image:
        "https://i5.walmartimages.com/asr/1852574c-9ec6-42ca-8b25-3346a5f8101c.331a2e0584db8beb9991e7c93a33b918.jpeg",
    },  {
      name: "Pre-Workout Energy Booster",
      description:
        "Get an energy boost and maximize your workout potential with our Pre-Workout formula, designed to increase focus and endurance.",
      price: 39.99,
      image:
        "https://content.optimumnutrition.com/i/on/gold-standard-pre-workout_Image_01?layer0=$PDP$",
    },
    {
      name: "Advanced Creatine Formula",
      description:
        "Experience explosive strength and power gains with our Advanced Creatine Formula, perfect for intense workouts and fast muscle growth.",
      price: 49.99,
      image:
        "https://i5.walmartimages.com/asr/1852574c-9ec6-42ca-8b25-3346a5f8101c.331a2e0584db8beb9991e7c93a33b918.jpeg",
    },  {
      name: "Pre-Workout Energy Booster",
      description:
        "Get an energy boost and maximize your workout potential with our Pre-Workout formula, designed to increase focus and endurance.",
      price: 39.99,
      image:
        "https://content.optimumnutrition.com/i/on/gold-standard-pre-workout_Image_01?layer0=$PDP$",
    },
    {
      name: "Advanced Creatine Formula",
      description:
        "Experience explosive strength and power gains with our Advanced Creatine Formula, perfect for intense workouts and fast muscle growth.",
      price: 49.99,
      image:
        "https://i5.walmartimages.com/asr/1852574c-9ec6-42ca-8b25-3346a5f8101c.331a2e0584db8beb9991e7c93a33b918.jpeg",
    },
  ];

  return (
    <>
    <div className="product-container">
      {products.map((product, index) => (
        <div key={product.name + index} className="product-item">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2 className="product-name">{product.name}</h2>
          <h3 className="product-description">{product.description}</h3>
          <h4 className="product-price">{product.price}$</h4>
          <button className="buy-button">Buy</button>
        </div>
      ))}
    </div>

    <div className="product-container">
      {mostUsed.map((mostUsed, index) => (
        <div key={mostUsed.name + index} className="product-item">
          <img
            src={mostUsed.image}
            alt={mostUsed.name}
            className="product-image"
          />
          <h2 className="product-name">{mostUsed.name}</h2>
          <h3 className="product-description">{mostUsed.description}</h3>
          <h4 className="product-price">{mostUsed.price}$</h4>
          <button className="buy-button">Buy</button>
        </div>
      ))}
    </div>
  </>
  );
};

export default Products;
