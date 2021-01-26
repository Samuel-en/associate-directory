import React from "react";

const SearchBox = (props) => {
    return (
      //   filtering employees through searchbox 
      <div className="create-form" style={{textAlign: "center"}}>
        <div className="input-group">
        <input
          type="text"
          className="form-control mb-3 mt-3"
          placeholder="Search Employee"
          aria-label="Search Employee"
          onChange={props.onChange}
        ></input>
      </div>
    </div>
  );
};

export default SearchBox;