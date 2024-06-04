import React from 'react'

export default function Search({searchTerm,setSearchTerm}) {
    const handleInputChange=(event)=>{
        setSearchTerm(event.target.value)
    }
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <input
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Search for a movie...'
        />
    </form>
  )
}
