import React, { useState } from "react";
import { List } from "./components/List";
import "./App.css";

function App() {
  interface IState {
    people: {
      name: string;
      url: string;
      age: number;
      note?: string;
    }[];
  }
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebrong Tames",
      age: 36,
      url: "https://superstarsbio.com/wp-content/uploads/2018/12/Michael-Jackson-HD-Wallpapers-For-Desktop-18.jpg",
      note: "flot",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
