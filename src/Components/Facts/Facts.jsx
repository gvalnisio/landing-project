import React from 'react'

const Facts = () => {

    const search = async () => {
        let url = 'https://cat-fact.herokuapp.com/facts'

        let response = await fetch(url)
        let data = await response.json()

        const catfacts = document.getElementsByClassName('cat-fact')
        catfacts[0].innerHTML = data[2].text
    } 

    search()

  return (
    <div>
        <div className="text">
            Here's a random cat fact:
        </div>
        <div className="cat-fact">
            Cats are cute
        </div>
    </div>
  )
}
 export default Facts