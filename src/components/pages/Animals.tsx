import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react"
import { IAnimals } from "../interface/IAnimals";

export const Animals = () => {

    const [animals, setAnimals] = useState<IAnimals[]>([]);
    
    useEffect(() => {
        axios.get("https://animals.azurewebsites.net/api/animals")
        .then((res) => {
            setAnimals(res.data);
        });
    }, []);

    localStorage.setItem("List of animals", JSON.stringify(animals));

    return (
        <>
        {animals.map((animal, index) => {
            return (
                <>
                <div key={index}>
                    <h3>{animal.name}</h3>
                    {/* <img src={animal.imageUrl} alt={animal.name} /> */}
                </div>
                </>
            )
        })}
        </>
    )
}