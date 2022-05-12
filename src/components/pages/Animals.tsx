
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { IAnimals } from "../interface/IAnimals";

export const Animals = () => {
    const [animals, setAnimals] = useState<IAnimals[]>([]);
   
    useEffect(() => {  
        axios.get("https://animals.azurewebsites.net/api/animals/")
        .then((res) => {
            setAnimals(res.data);
        });
         }, []
    );
 
    if (animals === []){
    localStorage.setItem("Animals", JSON.stringify(animals));
     }

  
    
   let listOfAnimals = animals.map((animal) => {
        return (
            <div key={animal.id}>   
                <Link to={"/animal/" + animal.id}><h3>{animal.name}</h3></Link>    
                <p>{animal.shortDescription}</p>
            </div>
        )}
    );

    return (
        <>
        <div>{listOfAnimals}</div>
        </>
    )
}