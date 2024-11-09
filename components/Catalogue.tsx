import React from 'react'
import { SearchBar, CustomFilter, CarCard } from "./";
import { fetchCars } from "@/utils";
import { CarProps } from '@/types';


const Catalogue = async() => {
  const allCars = await fetchCars()
  console.log(allCars)
  const isDataEmpty = !allCars || allCars.length < 1 || !Array.isArray(allCars)

  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">

        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like..</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-containers">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>

        {!isDataEmpty 
          ? <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            </section>
          : (
            <div className="home__error-container">
              <h2 className="text-black text-xl">
                Oops, No results
              </h2>
            </div>
          )
        }
    </div>
  )
}

export default Catalogue