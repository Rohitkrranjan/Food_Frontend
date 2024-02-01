import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);
  const [search,setSearch] = useState('');
  // const [foodCat] = useState(["Biryani/Rice", "Starter", "Pizza"]);

  useEffect(() => {
    loadFood();
  }, []);

  const loadFood = async () => {
    let result = await fetch("http://localhost:5000/api/foodlist", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    //  console.log(result);
    setFoodItems(result);
  };

  return (
    <div>
      <div>
        {" "}
        <Navbar />
      </div>
      <div>
      
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          style={{ objectFit: "contain !important" }} >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="my">
                <h1>My_Food</h1> <br/>
                <h2>"A bad day can be made better with some good food." </h2>
              </div>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1"
                className="d-block w-100"
                style={{ filter: "brightness(25%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1"
                className="d-block w-100"
                style={{ filter: "brightness(25%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1"
                className="d-block w-100"
                style={{ filter: "brightness(25%)" }}
                alt="..."
              />
            </div>
          </div>
          
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row mb-3">
          {foodItems.filter((item)=>(item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((food) => {
            return (
              <div className="col-12 col-md-4 col-lg-13">
                <div className="p-1">
                  <Card
                    foodItem = {food}
                    options={food.options[0]}
                    desc={food.description}
                  ></Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Footer />{" "}
      </div>
    </div>
  );
}
