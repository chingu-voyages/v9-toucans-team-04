import React from "react";
import Button from "./Button";

const Form = props => {
  return (
    <form onSubmit={event => props.handleUserFormSubmit(event)}>
      <label>
        <p>Search:</p>
        <input
          name="username"
          type="text"
          placeholder="Github username"
          required
          value={props.formData.username}
          onChange={props.handleFormChange}
        />
      </label>
        <Button type="submit" value="Submit">Submit</Button>
    </form>
  );
};

export default Form;
