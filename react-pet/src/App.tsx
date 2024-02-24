import { useState } from "react";
import "./App.css";
import RecipeCard from "./components/Recipes/RecipeCard";
import { recepies } from "./mocks";

enum Choice {
  recipes = "Recipes",
  readyMeals = "Ready Meals",
}

export default function App() {
  const [choiceType, setChoiceType] = useState<Choice>(Choice.recipes);

  function setChosenChange(type: Choice) {
    switch (type) {
      case Choice.readyMeals:
        setChoiceType(Choice.readyMeals);
        break;

      case Choice.recipes:
        setChoiceType(Choice.recipes);
        break;
    }
  }
  return (
    <div className="content">
      <h1>Recepies</h1>
      <label className="switch">
        <input
          className="checkChoise"
          type="checkbox"
          onClick={(event) => {
            event.currentTarget.checked
              ? setChosenChange(Choice.recipes)
              : setChosenChange(Choice.readyMeals);
          }}
          defaultChecked
        />
        <span className="slider round"></span>
      </label>
      <ul className="recepies">
        {choiceType === Choice.recipes && (
          <>
            <li className="recepies-list">
              Main Ingredients: {`${recepies[0].mainIngridients}`}
            </li>
            <li className="recepies-list">
              Optional Ingredients: {`${recepies[0].optionalIngridients}`}
            </li>
          </>
        )}
        {choiceType !== Choice.recipes && (
          <RecipeCard title="Meals" categories={recepies[1].meals} />
        )}
        {choiceType !== Choice.recipes && (
          <RecipeCard title="Bakery" categories={recepies[2].bakery} />
        )}
      </ul>
    </div>
  );
}
