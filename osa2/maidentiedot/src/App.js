import { useState, useEffect } from 'react'
import axios from "axios"

const Filter = (props) => {
    return(
    <div>
    Filter by: <input
    value = {props.filter}
    onChange = {props.handlefilterchange}
    />
</div>)
}

const CountryName = ({country}) => {
    return (<div>
        {country.name.common} 
    </div>)
}
const Country = ({country}) => {
    const objectValues = Object.values(country.languages)
    return (
        <div>
        <h2>{country.name.common}</h2>
        Capital: {country.capital} <br></br>
        Area: {country.area} m2<br></br>
        <b>Languages:</b>
        <ul>
            {objectValues.map((language, index) =>
                <li key={index}>
                    {language}
                </li>)}
        </ul>
        <img src={country.flags.png}/>
        </div>
        

    )
}

const ReturnCountries = ({countries}) => {
    if (countries.length <= 10 && countries.length>1) {
    return <ul>
    {countries.map((country, index) => 
    <CountryName key={index} country={country} />
    )}
    </ul>}

    else if (countries.length === 1) {
        return (
    <Country country={countries[0]}/>
    )
    }
    
    else if (countries.length > 10) {
        return <ul>Too many matches, try being more specific</ul>
    }
    return <ul></ul>

}

const App = () => {
    const [filter, setFilter] = useState("")
    const [countries, setCountries] = useState([])

    const handleFilterChange = (event) => {
        setFilter(event.target.value)      
  }

    const countriesToShow = (filter === "")
    ? countries
    : countries.filter(country => country.name.common.toUpperCase().includes(filter.toUpperCase()))

    useEffect(() => {
        axios
          .get('https://restcountries.com/v3.1/all')
          .then(response => {
            setCountries(response.data)
          })
      }, [])

    return (
        <div>
        <Filter filter={filter} handlefilterchange={handleFilterChange}/>
        <ReturnCountries countries={countriesToShow}/>

        </div>
    )
}

export default App;
