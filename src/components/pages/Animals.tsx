import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimals } from "../interface/IAnimals";
import { StyledDivAnimalList } from "../styles/StyledDivAnimalList";
import { StyledDivNeedsFeeding } from "../styles/StyledDivNeedsFeeding";
import { StyledDivForLinks } from "../styles/StyledDivForLink";
import { StyledP } from "../styles/StyledP";
import { StyledDivContainer } from "../styles/StyledDivContainer";
import { Styledh3 } from "../styles/Styledh3";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimals[]>([]);

  useEffect(() => {
    if (localStorage.getItem("Animals")) {
      setAnimals(JSON.parse(localStorage.getItem("Animals") || "[]"));
    } else {
      axios
        .get("https://animals.azurewebsites.net/api/animals/")
        .then((res) => {
          localStorage.setItem("Animals", JSON.stringify(res.data));
          setAnimals(res.data);
        });
    }
  }, []);

  let listOfAnimals = animals.map((animal) => {
    if (Date.parse(Date()) - Date.parse(animal.lastFed) > 1000 * 60 * 60 * 4) {
      return (
        <StyledDivContainer key={animal.id}>
          <StyledDivNeedsFeeding>
            <Link to={"/animal/" + animal.id}>
              <Styledh3>{animal.name} </Styledh3>
            </Link>
          </StyledDivNeedsFeeding>
          <StyledP>
            was last fed 4 or more hours ago. Go and feed the animal!
          </StyledP>
          <p>{animal.shortDescription}</p>
        </StyledDivContainer>
      );
    } else {
      return (
        <StyledDivContainer key={animal.id}>
          <StyledDivForLinks>
            <Link to={"/animal/" + animal.id}>
              <Styledh3>{animal.name}</Styledh3>
            </Link>
          </StyledDivForLinks>
          <p>{animal.shortDescription}</p>
        </StyledDivContainer>
      );
    }
  });

  return (
    <>
      <StyledDivAnimalList>{listOfAnimals}</StyledDivAnimalList>
    </>
  );
};
