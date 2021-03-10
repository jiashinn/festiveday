import { Button } from "react-bootstrap";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../src/styles.css";
import ReactFlagsSelect from "react-flags-select";
import styled from "styled-components";
import { device } from "../utils";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }

  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      input {
        height: 44px;
        padding: 0 20px;
        border-radius: 5px;
        border: thin solid rgba(77, 77, 77, 0.3);
        width: 100%;
        font-size: 1rem;
        outline: none;
        margin-bottom: 5px;
        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #4d4d4d;
        }

        @media ${device.tablet} {
          width: 160px;
        }
      }
    }
  }

  .react-datepicker__header {
    font-family: Helvetica, sans-serif;
    background: #fff;
    border-bottom: none;
    font-size: 1rem;
  }

  .react-datepicker__year-wrapper {
    /* flex-direction: column;
    flex-wrap: nowrap; */
    width: 180px;
  }

  .react-datepicker__year .react-datepicker__year-text {
    width: 100%;
    font-size: 1rem;
    margin: 0;
  }

  .ReactFlagsSelect-module_selectBtn__19wW7 {
    background: #fff;
  }

  .flag {
    @media ${device.tablet} {
      margin: 0 15px;
    }
  }

  .button {
    height: 44px;
  }

  .btn:focus {
    box-shadow: none;
  }
`;

const SearchInput = ({ onSearch }) => {
  const [startDate, setStartDate] = useState();
  const [country, setCountry] = useState("");

  return (
    <StyledDiv className="my-5">
      <DatePicker
        selected={startDate === "" ? null : startDate}
        onChange={(date) => setStartDate(date)}
        showYearPicker
        dateFormat="yyyy"
        maxDate={new Date()}
        placeholderText="Select a year"
      />
      <ReactFlagsSelect
        selected={country}
        onSelect={(code) => setCountry(code)}
        fullWidth={false}
        className="flag"
      />
      <Button
        variant="info"
        type="submit"
        className="button"
        onClick={(e) => {
          e.preventDefault();
          onSearch && onSearch(startDate, country);
        }}
      >
        Search
      </Button>
    </StyledDiv>
  );
};

export default SearchInput;
