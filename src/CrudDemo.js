import React, { useState, useEffect } from 'react';

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}

function TableAction(props) {
  const handleDelete = () => {
    props.onDelete(props.person.id);
  };

  return (
    <td>
      <button onClick={handleDelete}>Delete</button>
    </td>
  );
}

function TableRow(props) {
  return (
    <tr>
      <td>{props.person.name}</td>
      <td>{props.person.email}</td>
      <TableAction person={props.person} onDelete={props.onDelete} />
    </tr>
  );
}

function Table(props) {
  return (
    <table>
      <TableHeader />
      <tbody>
        {props.people.map((person) => (
          <TableRow key={person.id} person={person} onDelete={props.onDelete} />
        ))}
      </tbody>
    </table>
  );
}

function CrudDemo() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/people')
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  const handleDelete = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <div>
      <h1>CRUD Demo</h1>
      <Table people={people} onDelete={handleDelete} />
    </div>
  );
}

export default CrudDemo;
