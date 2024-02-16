import { useState } from "react";
import "./App.css";
import RecipeCard from "./components/Recipes/RecipeCard";
import { recepies } from "./mocks";

export default function App() {
  const [choiceType, setChoiceType] = useState(true);
  const [indexValue, setValue] = useState(1);
  function setChosenChange() {
    switch (indexValue) {
      case 1:
        setValue(0);
        break;
      case 0:
        setValue(1);
        break;
    }
    if (indexValue === 1) {
      setChoiceType(false);
    } else {
      setChoiceType(true);
    }
  }
  return (
    <div className="content">
      <h1>Recepies</h1>
      <label className="switch">
        <input
          className="checkChoise"
          type="checkbox"
          onClick={setChosenChange}
          defaultChecked
        />
        <span className="slider round"></span>
      </label>
      <ul className="recepies">
        {choiceType && (
          <li className="recepies-list">
            Main Ingredients: {`${recepies[0].mainIngridients}`}
          </li>
        )}
        {choiceType && (
          <li className="recepies-list">
            Optional Ingredients: {`${recepies[0].optionalIngridients}`}
          </li>
        )}
        {!choiceType && (
          <RecipeCard title="Meals" categories={recepies[1].meals} />
        )}
        {!choiceType && (
          <RecipeCard title="Bakery" categories={recepies[2].bakery} />
        )}
      </ul>
    </div>
  );
}
