import React, { useState, useEffect } from 'react'

import './List.css'
import axios from 'axios';

const url = "https://moviesdatabase.p.rapidapi.com"
const apikey = "00e8c6a6d8mshd2d4ea06b620258p181cc9jsndb8d452aa1c0"

const [movies, setMovies] = useState([]);

useEffect(() => {
    const getMovie = async() => {
        const data = await axios(url)
        setMovies(data)
        console.log(data)
    }

    getMovie()
}, []);


const List = () => {
  return (
    <div className='container'>
      List
    </div>
  )
}

export default List
