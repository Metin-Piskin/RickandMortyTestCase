import { useState } from "react";
import "./App.css";

import Card from "./Components/Card";
import DropdownCard from "./Components/DropdownCard";
import TitleImage from "./assets/TitleImage.png";
import Get from "./Get";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedNames, setSelectedNames] = useState<Array<any>>([]);
  const { veri, loading, error } = Get(inputValue);

  if (loading) {
    console.log("loading");
  }
  if (error) {
    console.log(error);
  }

  const addOption = (e: any) => {
    if (!selectedNames.includes(e.name)) {
      setSelectedNames([...selectedNames, e.name]);
    }
  };

  const removeOption = (e: any) => {
    const updatedSelectedNames = selectedNames.filter((item) => item !== e);
    setSelectedNames(updatedSelectedNames);
  };

  return (
    <div className="AppContainer">
      <div>
        <img src={TitleImage} className="AppTitleImage"/>
        <div className="AppInputContainer">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Character Name"
            className="AppInput"
          />
        </div>
        <div className="AppDropdownCardsContainer">
          {selectedNames.map((e, index) => {
            return (
              <DropdownCard
                key={index}
                Name={e}
                RemoveClick={() => removeOption(e)}
              />
            );
          })}
        </div>
        <div className={inputValue ? "AppCardsContainer" : ""}>
          {veri.map((e: any) => {
            return (
              <div key={e.id}>
                {inputValue ? (
                  <Card
                    onClick={() =>
                      selectedNames.includes(e.name)
                        ? removeOption(e.name)
                        : addOption(e)
                    }
                    CardImg={e.image}
                    CardName={e.name}
                    CardEpisode={e.episode.length}
                    checked={selectedNames.includes(e.name) ? true : false}
                    inputValue={inputValue}
                  />
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
