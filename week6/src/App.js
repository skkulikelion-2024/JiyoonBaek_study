import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(prev => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');

  useEffect(() => {
		if (keyword !== "" && keyword.length > 5) {
			console.log("SEARCH FOR", keyword);
		}
	}, [keyword]);

  useEffect(() => {
		console.log("I run when 'counter' changes.");
	}, [counter]);

  useEffect(() => {
		console.log("I run when keyword & counter change.");
	}, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default App;
