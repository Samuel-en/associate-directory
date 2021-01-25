import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeRow from "../components/Employee/EmployeeRow";
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [viewEmployees, setViewEmployees] = useState([]);


  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?results=20&inc=login,name,phone,email,picture,dob&nat=us"
      )
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data.results);
        setViewEmployees(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sortBy = () => {
    let sortedEmployees = [];

    if (!sortOrder || sortOrder === "ascending") {
      sortedEmployees = [...employees].sort((a, b) =>
        a.name.first < b.name.first ? -1 : 1
      );
      setSortOrder("descending");
    } else {
      sortedEmployees = [...employees].sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      setSortOrder("ascending");
    }
    console.log(sortedEmployees);
    setViewEmployees([...sortedEmployees]);
  };