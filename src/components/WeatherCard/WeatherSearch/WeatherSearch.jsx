import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./WeatherSearch.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherSearch = ({ setCity }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setCity(searchValue);
    setSearchValue("");
  };
  const handleKeyUp =(e)=>{
    e.key == 'Enter' && handleSearch();
  }
  return (
    <div className="search my-3 w-100 d-flex justify-content-center align-items-center">
      <Form.Group controlId="search">
        <Form.Control
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={handleKeyUp}
          className="px-3 py-3 rounded-5"
          type="text"
          placeholder="search"
        />
      </Form.Group>
      <Button
        onClick={handleSearch}
        className={`${styles.searchIcon} d-flex justify-content-center align-items-center border-0 ms-4 p-3 bg-white rounded-circle bg-black`}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="fs-6" />
      </Button>
    </div>
  );
};

export default WeatherSearch;
