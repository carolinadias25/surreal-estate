/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable quotes */
import React, { useState } from "react";
import "../styles/AddProperty.css";

export default function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "1",
      bathrooms: "1",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      <form
        data-testid="form-id"
        className="form-add-property"
        onSubmit={handleAddProperty}
      >
        <div className="page-title">List your property below</div>
        <label htmlFor="title">
          Title
          <input
            data-testid="title-id"
            className="input-title"
            type="text"
            placeholder="Add a title..."
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            required
          />
        </label>

        <div className="city">
          <label htmlFor="city">
            City
            <select
              data-testid="city-id"
              className="input-city"
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
            </select>
          </label>
        </div>

        <div className="type">
          <label htmlFor="type">
            Type
            <select
              data-testid="type-id"
              className="input-type"
              id="type"
              name="Type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="button">
          <button className="add-button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
