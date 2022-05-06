import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { IAnimals } from "../interface/IAnimals";

export const Animals = () => {

    const [animals, setAnimals] = useState<IAnimals[]>([]);
    const [animals2, setAnimals2] = useState<IAnimals[]>([]);
    
    useEffect(() => {
        axios.get("https://animals.azurewebsites.net/api/animals")
        .then((res) => {
            setAnimals(res.data);
        });
    }, []);
   

    localStorage.setItem("Animals", JSON.stringify(animals));

    

    

    return (
        <>
        {animals.map((animal) => {
            return (
                <>
                <Link to={"/animal/" + animal.id}>
                <div>
                    <h3>{animal.name}</h3>
                    <p>{animal.shortDescription}</p>
                    {/* <img src={animal.imageUrl} alt={animal.name} /> */}
                </div>
                </Link>
                </>
            )
        })}
        </>
    )
}