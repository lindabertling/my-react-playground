import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = ({ handleSubmit, handleUserInput, btnTitle }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input handleChange={handleUserInput}></Input>
        <Button type="submit">{btnTitle}</Button>
      </form>
    </div>
  );
};

export default Form;
