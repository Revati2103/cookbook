import './Create.css'
import {useState} from 'react';

import React from 'react'

function Create() {

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);

  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a new recipe</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          />
        </label>

        <label>
          <span>Recipe method:</span>
          <textarea 
          onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
          />
        </label>

        {/* ingredients */}

        <label>
          <span>Cooking Time(minutes):</span>
          <input 
          type="number"
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Create