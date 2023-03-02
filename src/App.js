import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const getCurrentLocation = () =>
    new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          return resolve(coordinates);
        },
        (error) => {
          reject(error?.message);
        }
      );
    });

  const onClick = () => {
    getCurrentLocation()
      .then((position) => {
        alert("".concat(position.lat).concat("\n").concat(position.lng));
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => onClick()}>Position</button>
      </header>
    </div>
  );
}

export default App;
