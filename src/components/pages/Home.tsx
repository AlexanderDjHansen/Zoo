import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IExtendedAnimal } from "../interface/IExtendedAnimal";
import { StyledDivHungryAnimals } from "../styles/StyledDivHungryAnimals";
import { StyledSection } from "../styles/StyledSection";
import "./../styles/Layout.css";

export const Home = () => {
  const [feedAnimal, setFeedAnimal] = useState<IExtendedAnimal[]>([]);

  useEffect(() => {
    let animalFromLS: IExtendedAnimal[] = JSON.parse(
      localStorage.getItem("Animals") || "[]"
    );
    animalFromLS.map((animal) => {
      if (animal.isFed === false) {
        setFeedAnimal(animalFromLS);
      }
    });
  }, []);

  let animalsThatNeedsFeeding = feedAnimal.map((animal) => {
    if (
      animal.isFed === false &&
      Date.parse(Date()) - Date.parse(animal.lastFed) > 1000 * 60 * 60 * 4
    )
      return (
        <li key={animal.id}>
          <Link to={"/animal/" + animal.id}>{animal.name}</Link> is hungry. Was
          last fed: {animal.lastFed}
        </li>
      );
  });

  return (
    <>
      <h1>Welcome to the ZOO</h1>
      <h3>Here you can interact with the animals, feed them and learn more about their personalities</h3>
      <StyledSection>
        <aside>
      <StyledDivHungryAnimals>{animalsThatNeedsFeeding}</StyledDivHungryAnimals>
      </aside>
    
      </StyledSection>
    </>
  );
};
