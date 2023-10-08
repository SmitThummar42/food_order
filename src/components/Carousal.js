import React from 'react'

export default function Carousal() {
    return (
        <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !importatnt"}}>
            <div className="carousel-inner" id='carousel'>
                <div className="carousel-caption" style={{ zIndex: "10" }}>
                    <form class="d-flex">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
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
    )
}
