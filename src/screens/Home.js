import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
//import Carousal from '../components/Carousal';

export default function Home() {
  const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            }
        });
        response = await response.json();
        //console.log(response[0], response[1])
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    }
    useEffect(() => {
        loadData()
    }, [])


    return (
        <div>
            <div> <Navbar /> </div>
            
            





            <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !importatnt"}}>
            <div className="carousel-inner" id='carousel'>
                <div className="carousel-caption" style={{ zIndex: "10" }}>
                    <div class="d-flex justify-content-center">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                        {/* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                    </div>
                </div>

                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/900x700/?burger" style={{filter:  "brightness(40%)"}} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?pizza" style={{filter:  "brightness(40%)"}} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?barbeque" style={{filter:  "brightness(40%)"}} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div></div>









            <div className='container'> 
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3'>
                
                  <div key={data.id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr/>
                  {foodItem !== [] 
                  ? 
                  foodItem.filter((items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (

                        <div key={filterItems.id} className='col-12 cold-md-6 col-lg-3'>
                          <Card foodName={filterItems.name}
                          options={filterItems.options[0]}
                          imgSrc={filterItems.img}
                          ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
            <div> <Footer /> </div>
        </div>
    )
}