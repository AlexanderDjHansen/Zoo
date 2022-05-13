import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IExtendedAnimal } from "../interface/IExtendedAnimal";
import { StyledButton } from "../styles/StyledButton";
import { StyledDivAlignItems } from "../styles/StyledDivAlignItems";
import { StyledDivInformation } from "../styles/StyledDivInformation";
import { StyledPWhenFeeded } from "../styles/StyledPWhenFeeded";
import { StyledSection } from "../styles/StyledSection";

import "./../styles/Layout.css";

export const Animal = () => {
  let params = useParams();

  const [extendedAnimalInfo, setExtendedAnimalInfo] = useState<IExtendedAnimal>(
    {
      id: 0,
      name: "",
      latinName: "",
      yearOfBirth: 0,
      shortDescription: "",
      longDescription: "",
      imageUrl: "",
      medicine: "",
      isFed: false,
      lastFed: "",
    }
  );

  let timestamp = Date();

  useEffect(() => {
    let animalFromLS: IExtendedAnimal[] = JSON.parse(
      localStorage.getItem("Animals") || "[]"
    );
    animalFromLS.map((animal) => {
      if (params.id == animal.id.toString()) {
        setExtendedAnimalInfo(animal);
      }
    });
  }, []);

  function caluclateFeeding() {
    let dateParse = Date.parse(Date());
    if (
      dateParse - Date.parse(extendedAnimalInfo.lastFed) >
      1000 * 60 * 60 * 3
    ) {
      return true;
    }
    return false;
  }
  function setToFalse() {
    let animalFromLS: IExtendedAnimal[] = JSON.parse(
      localStorage.getItem("Animals") || "[]"
    );
    animalFromLS.map((animal, i) => {
      if (params.id == animal.id.toString()) {
        animalFromLS[i] = {
          ...extendedAnimalInfo,
          isFed: false,
          lastFed: timestamp,
        };
      }
    });
    localStorage.setItem("Animals", JSON.stringify(animalFromLS));
    setExtendedAnimalInfo({
      ...extendedAnimalInfo,
      isFed: false,
    });
  }

  function handleClick() {
    let animalFromLS: IExtendedAnimal[] = JSON.parse(
      localStorage.getItem("Animals") || "[]"
    );
    animalFromLS.map((animal, i) => {
      if (params.id == animal.id.toString()) {
        animalFromLS[i] = {
          ...extendedAnimalInfo,
          isFed: true,
          lastFed: timestamp,
        };
      }
    });
    localStorage.setItem("Animals", JSON.stringify(animalFromLS));
    setExtendedAnimalInfo({
      ...extendedAnimalInfo,
      isFed: true,
      lastFed: timestamp,
    });
    setTimeout(() => {
      setToFalse();
    }, 1000 * 60 * 60 * 3);
  }

  let animalHtml =
    !extendedAnimalInfo.isFed || caluclateFeeding() ? (
      <StyledButton
        key={extendedAnimalInfo.id}
        onClick={() => {
          handleClick();
        }}
      >
        Feed me!
      </StyledButton>
    ) : (
      <div key={extendedAnimalInfo.id}>
        <p>I Am fed!</p>
        <span>
          You fed me at:{" "}
          <StyledPWhenFeeded>{extendedAnimalInfo.lastFed}</StyledPWhenFeeded>
          Come back and feed me in 3 hours
        </span>
      </div>
    );

  return (
    <>
      <StyledSection>
        <div>
          <h3>{extendedAnimalInfo?.name}</h3>
          <p>{extendedAnimalInfo?.longDescription}</p>
        </div>
      </StyledSection>
      <StyledSection>
        <img
          src={extendedAnimalInfo?.imageUrl}
          alt={extendedAnimalInfo?.name}
        />
        <StyledDivInformation>
          <p>Latin name: {extendedAnimalInfo.latinName}</p>
          <p>Year of birth: {extendedAnimalInfo.yearOfBirth}</p>
          <p>Medicin: {extendedAnimalInfo.medicine}</p>
        </StyledDivInformation>
      </StyledSection>
      <StyledDivAlignItems>{animalHtml}</StyledDivAlignItems>
    </>
  );
};
