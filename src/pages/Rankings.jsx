import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "../components/layout/Layout";
import Loading from "../components/state/Loading";
import homepage from "../img/rank.jpg";
import { getCountries } from "../utils";
const GlobalStyle = createGlobalStyle`

  body {
    background: url(${homepage}) fixed center no-repeat;
    background-size: cover;
   

  }
`;

const StyledDiv = styled.div`
  .wrapper {
    color: #fff;
    h1 {
      font-family: "Bebas Neue", cursive;
    }
  }
  .rank {
    margin: 0 0.2rem;
    position: relative;
    min-height: 5vh;
  }

  .rank-chart {
    padding-left: 2rem;
    margin: 0 auto;

    .item {
      position: relative;
      display: flex;
      align-items: center;
      background: white;
      height: 5rem;
      border-radius: 4rem;
      margin-bottom: 2rem;
      background: #fff;
      transform-origin: left;
      cursor: pointer;
      transition: transform 200ms ease-in-out;
      box-shadow: 0 0 4rem 0 rgba(0, 0, 0, 0.1),
        0 1rem 2rem -1rem rgba(0, 0, 0, 0.3);
    }

    .item:first-child {
      border: 5px solid #c9a959;
    }

    .item:nth-child(2) {
      border: 5px solid #ac8181;
    }

    .item:nth-child(3) {
      border: 5px solid #83b799;
    }
    .item .rank {
      font-weight: 900;
      position: absolute;
      left: -3rem;
      text-align: center;
      font-size: 1.25rem;
      width: 1.5rem;
      color: white;
      opacity: 0.6;
      transition: opacity 200ms ease-in-out;
    }

    .item .name {
      flex-grow: 2;
      flex-basis: 10rem;
      font-size: 1.1rem;
    }
    .item .score {
      margin-right: 1.5rem;
      opacity: 0.5;
    }

    .item:hover {
      transform: scale(1.05);
    }
    .item:hover .pos {
      opacity: 0.8;
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

const Rankings = () => {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    getCountries()
      .then((res) => {
        setCountries(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <motion.div variants={variants} initial="out" animate="in" out="out">
      <Layout>
        <GlobalStyle />
        <StyledDiv className="container">
          <div className="wrapper">
            <h1>
              Rankings <p>of country </p>with most holidays.
            </h1>
            <p>
              All rankings are based on year
              <span className="text-danger font-weight-bold"> 2021</span>{" "}
              holidays.
            </p>
            <p>
              (Observance, religious ,local and national holidays are included.)
            </p>
          </div>
          <div className="rank">
            {loading ? (
              <div className="my-5">
                <Loading />
              </div>
            ) : error ? (
              <div className="text-danger font-weight-bold">
                Error: Request failed with status code 426
              </div>
            ) : (
              <div className="rank-chart">
                {countries &&
                  countries
                    .sort((a, b) => b.total_holidays - a.total_holidays)
                    .map((country, index) => {
                      return (
                        <div className="item" key={country.uuid}>
                          <div className="rank">{index + 1}</div>
                          <div className="name px-4">
                            {country.country_name}
                          </div>
                          <div className="days px-4">
                            {country.total_holidays} days
                          </div>
                        </div>
                      );
                    })}
              </div>
            )}
          </div>
        </StyledDiv>
      </Layout>
    </motion.div>
  );
};

export default Rankings;
