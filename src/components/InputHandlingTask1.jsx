import React, { useState } from 'react'

export const InputHandlingTask1 = () => {

    const countries = [
        {
            country: "India",
            states: ["Maharashtra", "Gujarat", "Karnataka", "Delhi"]
        },
        {
            country: "USA",
            states: ["California", "Texas", "Florida", "New York"]
        },
        {
            country: "Canada",
            states: ["Ontario", "Quebec", "British Columbia"]
        }
    ]

    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)

    const countryHandler = (event) => {

        setCountry(event.target.value)
    }

    const stateHandler = (event) => {
        setState(event.target.value)
    }

    const submitHandler = () => {
        setisSubbmited(true)
    }

    
    const selectCountry = countries.find((c) => c.country == country)

    return (
        <div>
            <div>
                <label>Country</label>
                <select onChange={countryHandler}>
                    <option>select Country</option>
                    {
                        
                        countries.map((c) => {
                            return <option>{c.country}</option>
                        })
                    }
                </select>
            </div>

            <div>
                <label>State</label>
                <select onChange={stateHandler}>
                    <option>select state</option>
                    {

                        selectCountry && selectCountry.states.map((state) => {
                            return <option>{state}</option>
                        })
                    }
                </select>
            </div>

            <div>
                <button onClick={submitHandler}>SUBMIT</button>
            </div>

            {
                isSubbmited &&
                <div>
                    <h2>OUTPUT</h2>
                    <h3>Country = {country}</h3>
                    <h4>State = {state}</h4>
                </div>
            }
        </div>


    )
}