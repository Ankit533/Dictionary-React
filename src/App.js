import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState(null);
  // const [invalid, setInavlid] = useState(null);
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`).then(
      (result) => {
        result.json().then((res) => {
          console.warn(res);
          if (res.hasOwnProperty("title")) {
            setData(res.title);
          } else {
            setData(res[0].meanings[0].definitions[0]);
          }
        });
      }
    );
  }, [search]);
  console.warn(search);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h2>English Dictionary</h2>
            </div>
            <div className="card-body">
              <input
                // className="form-control"
                type="search"
                placeholder="Search a word"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <div className="mt-3 px-2">
                {!data || !search ? (
                  search === null || search === "" ? (
                    <h6>Please enter keywords to search</h6>
                  ) : (
                    <h6>No data found</h6>
                  )
                ) : (
                  <div>
                    <h3>{search}</h3>

                    {!data.definition ? (
                      <p>No meaning found</p>
                    ) : (
                      <div className="output-div">
                        <h5>Meaning</h5>
                        <p>{data.definition}</p>
                      </div>
                    )}

                    {!data.example ? (
                      <p></p>
                    ) : (
                      <div className="output-div">
                        <h5>Example</h5>
                        <p>{data.example}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="0"
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
