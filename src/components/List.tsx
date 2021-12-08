import React from "react";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

export const List: React.FC<IProps> = ({ people }) => {
  people.map((person) => {
    console.log(person.name);
  });

  const renderList = (): JSX.Element[] => {
    return people.map((person, key: number) => {
      console.log(key);
      return (
        <li className="List" key={key}>
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age}</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};
