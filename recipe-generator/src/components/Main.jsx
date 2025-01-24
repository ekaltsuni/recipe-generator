import React from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  /* Get the state of ingredients, an empty array */
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  function addIngredient(event) {
    event.preventDefault();
    const formIn = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    /* Get each new ingrdient added from the input field */
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    formIn.reset();
  }

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipe);
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. rice"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      ) : null}
      {recipe ? <Recipe recipe={recipe} /> : null}
    </main>
  );
}
