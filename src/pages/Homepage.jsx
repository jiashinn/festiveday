import React, { useEffect, useState } from "react";
// import homepage from "../img/homepage.png";
import mainpage from "../img/ocean.png";
import styled, { createGlobalStyle } from "styled-components";
import SearchInput from "../components/SearchInput";
import { getHolidays } from "../utils";
import { Table } from "react-bootstrap";
import Loading from "../components/state/Loading";
import Layout from "../components/layout/Layout";
import { device } from "../utils";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`

  body {
    background: url(${mainpage}) fixed center no-repeat;
    background-size: cover;
  

  }
`;

const StyledDiv = styled.div`
  margin-top: 108px;

  h1 {
    font-family: "Bebas Neue", cursive;
  }

  .result {
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    position: relative;
    min-height: 150px;
    font-family: Poppins;

    .title {
      font-family: Montserrat;
    }

    th:nth-child(4),
    td:nth-child(4) {
      display: none;

      @media ${device.tablet} {
        display: block;
        border-bottom: none;
      }
    }
  }
`;
const variants = {
  in: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1
    }
  },
  out: {
    y: 50,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1
    }
  }
};

const Homepage = () => {
  const [holidayData, setHolidayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState({});

  const handleSearch = (startDate, country) => {
    const year = new Date(startDate).getFullYear();
    // console.log(year);
    if (!year) {
      alert("please fill in a year");
    } else if (!country) {
      alert("please fill in a country");
    } else {
      setSelected({ ...selected, year: year, country: country });
    }

    // console.log(selected.year, selected.country);
  };

  useEffect(() => {
    setLoading(true);
    getHolidays(selected)
      .then((res) => {
        setHolidayData(res.holidays);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selected]);

  //  console.log(holidayData);

  return (
    <motion.div
      // exit={{ opacity: 0, x: 0, y: 0 }}
      // initial={{ opacity: 0, x: 0, y: 0 }}
      // animate={{ opacity: 1, x: 0, y: 0 }}
      variants={variants}
      initial="out"
      animate="in"
      out="out"
    >
      <Layout>
        <GlobalStyle />
        <StyledDiv className="container">
          <div className="wrapper">
            <h1>Festive-day</h1>
            <p>
              To get away from one’s working environment is, in a sense, to get
              away from one’s self; and this is often the chief advantage of
              travel and change.
            </p>
            <SearchInput onSearch={handleSearch} />
          </div>
          <div className="result p-4 rounded my-4 title">
            {selected && Object.keys(selected).length === 0 ? (
              <p>no data</p>
            ) : loading ? (
              <div className="h-75 m-auto">
                <Loading />
              </div>
            ) : error ? (
              "Error: Request failed with status code 426 "
            ) : (
              <>
                {holidayData && (
                  <>
                    <div className="m-auto d-flex justify-content-between">
                      <h5>{holidayData[0].country.name}</h5>
                      <p>
                        <span className="text-primary">
                          {holidayData.length}
                        </span>
                        &nbsp; festivals
                      </p>
                    </div>
                    <Table hover size="sm" className="m-auto bg-white table">
                      <thead className="bg-dark text-white ">
                        <tr>
                          <th>#</th>
                          <th>Date</th>
                          <th>Name</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      {holidayData.map((holiday, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{index + 1}</td>
                              <td>
                                {holiday.date.datetime.year +
                                  "/" +
                                  holiday.date.datetime.month +
                                  "/" +
                                  holiday.date.datetime.day}
                              </td>
                              <td>{holiday.name}</td>
                              <td>{holiday.description}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </Table>
                  </>
                )}
              </>
            )}
          </div>
        </StyledDiv>
      </Layout>
    </motion.div>
  );
};

export default Homepage;
