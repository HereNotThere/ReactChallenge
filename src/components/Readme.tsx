import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Counter from "./Counter";
import { Link } from "react-router-dom";

const README_PATH =
  "https://raw.githubusercontent.com/HereNotThere/ReactChallenge/main/README.md";

function Readme() {
  const [md, setMd] = useState<string>("");

  useEffect(() => {
    fetch(README_PATH, { mode: "cors" })
      .then((response) => response.text())
      .then((response) => {
        setMd(`${response}
---

## About Unit Tests:
The component below has a suite of tests to that could serve as guidance to unit test the calendar functionality, tests are located at \`src/components/Counter.test.jsx\`
        
`);
      });
  }, []);

  return (
    <div className="readme">
      <ReactMarkdown children={md} skipHtml={true} />
      {md && (
        <>
          <Counter limit={3} />
          <h2>Use our existing route to create you calendar!</h2>
          <Link to="/calendar">Go to Calendar page</Link>
        </>
      )}
    </div>
  );
}

export default Readme;
