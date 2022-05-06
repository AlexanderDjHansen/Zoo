import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IExtendedAnimal } from "../interface/IExtendedAnimal";

export const Animal = () => {
    let param = useParams();
    const [extendedAnimalInfo, setExtendedAnimalInfo] = useState<IExtendedAnimal[]>([])

    useEffect(() => {
        axios.get("https://animals.azurewebsites.net/api/animals" + param.id)
        .then((response) => {
            setExtendedAnimalInfo(response.data)
        })
    }, []);


   
    return (
        <>
        <div>
            <h3>{}</h3>
        </div>
        </>
    )
}