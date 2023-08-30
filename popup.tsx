import axios from "axios"
import React, { useEffect, useState } from "react"

import "./popup.css"

function IndexPopup() {
  const [ip, setIp] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [load, setLoad] = useState<boolean>(false)

  const handleclick = () => {
    setLoad(true)
    axios
      .get("https://api.ipify.org")
      .then((res) => {
        setIp(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    ip &&
      axios
        .get(`https://ipinfo.io/${ip}?token=${process.env.PLASMO_PUBLIC_TOKEN}`)
        .then((result) => {
          setCity(result.data.city)
          setCountry(result.data.country)
          setLoad(false)
        })
        .catch((err) => {
          console.log(err)
        })
  })

  return (
    <div className="flex flex-col items-center justify-center w-500 h-500 border-40 border-white bg-[#0891b2]">
      {city && country && (
        <h3 className="w-80 font-bold text-center mb-4 text-2xl text-white">
          Your country is {country} and city is {city}
        </h3>
      )}
      {!load && (
        <button
          onClick={handleclick}
          className="bg-white text-black p-4 font-bold text-xl w-60">
          Show my location
        </button>
      )}
      {load && (
        <button className="bg-white text-black p-4 font-bold text-xl w-60">
          Loading..
        </button>
      )}
    </div>
  )
}

export default IndexPopup
