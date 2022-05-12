
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IExtendedAnimal } from "../interface/IExtendedAnimal"
import "./../styles/Layout.css"



export const Home = () => {
    const [feedAnimal, setFeedAnimal] = useState<IExtendedAnimal[]>([])
    let animal = JSON.parse(localStorage.getItem("Animals") || "[]")

    useEffect(() => {
        setFeedAnimal(animal)
    },[]);

    let animals = feedAnimal.map((animal) => {
        if (animal.isFed === false)
        return (
            <li key={animal.id}><Link to={"/animal/" + animal.id}>{animal.name}</Link> is hungry. Was last fed: {animal.lastFed}</li>
        )
    })


    return (
    <>
        <ul>
            {animals}
        </ul>
        
    </>
    )
}