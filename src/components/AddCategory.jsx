import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, SetInputValue] = useState("");

  const onInputChange = ({ target }) => {
    SetInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
     if(inputValue.trim().length <=1) return;

    //setCategories((categories) => [inputValue, ...categories]);
   onNewCategory (inputValue.trim());
    SetInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar gifs "
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};


//wA6gYM3CwSM8Mm8UZ2nIWgRSgaJHWLiW