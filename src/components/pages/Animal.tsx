
import axios from "axios";

import {  useEffect, useState } from "react";
import {  useParams } from "react-router-dom"
import { IExtendedAnimal } from "../interface/IExtendedAnimal";
import { StyledButton } from "../styles/StyledButton";

import "./../styles/Layout.css"


export const Animal = () => {
    let params = useParams()
    const [extendedAnimalInfo, setExtendedAnimalInfo] = useState<IExtendedAnimal>()
    const [disable, setDisable] = useState<boolean>(false)
    let timestamp = new Date().toLocaleString();
    let animalFromLS = JSON.parse(localStorage.getItem("Animals") || "[]");
    
    useEffect(() => {
        axios.get("https://animals.azurewebsites.net/api/animals/" + params.id)
        .then((response) => {
            setExtendedAnimalInfo(response.data)
        })
    }, []);
    
    function handleClick(){
        animalFromLS.map((animal: IExtendedAnimal) => {
        if (params.id === animal.id.toString() && animal.isFed === false){
            animal.isFed = true;
            animal.lastFed = timestamp;
            setTimeout(() => {
                animal.isFed = false;
                console.log(animal.isFed)
                localStorage.setItem("Animals", JSON.stringify(animalFromLS));
            }, 10000);
            console.log(timestamp);
            setDisable(true);
            console.log(animal.isFed);
            localStorage.setItem("Animals", JSON.stringify(animalFromLS));
                  } 
            }  
        )
    }

    let animalInfoHTML = animalFromLS.map((animal: IExtendedAnimal) => {
        if (params.id === animal.id.toString() && animal.isFed === false) {
            return (
                    <StyledButton key={animal.id} disabled={disable} onClick={() => {
                        handleClick();
                        }}>Feed me!</StyledButton>          
                    )
                } 
            else if (params.id === animal.id.toString() && animal.isFed === true){
                return (
                    <div key={animal.id}>
                    <p>I Am fed!</p>
                    <p>You fed me at: <StyledButton>{animal.lastFed}</StyledButton></p>
                    </div>
                    )
            }
        })
    return (
            <>      
                <section>
                    <div>
                        <h3>{extendedAnimalInfo?.name}</h3>
                        <p>{extendedAnimalInfo?.longDescription}</p>
                    </div>
                </section>
                <span>
                    <img src={extendedAnimalInfo?.imageUrl} alt={extendedAnimalInfo?.name} />
                </span>
                <div>{animalInfoHTML}</div>
              
           
            
    </>
    )
}