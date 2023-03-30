import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableAction = (props) => {
  return (
    <td>
      <button className="btn btn-primary" onClick={props.handleEdit}>Edit</button>
      <button className="btn btn-danger" onClick={props.handleDelete}>Delete</button>
    </td>
  );
};

const TableRow = (props) => {
  const { id, name, age, gender } = props.person;

  const handleEdit = () => {
    console.log(`Editing person with ID ${id}`);
  };

  const handleDelete = () => {
    console.log(`Deleting person with ID ${id}`);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <TableAction handleEdit={handleEdit} handleDelete={handleDelete} />
    </tr>
  );
};

const Table = (props) => {
  const { people } = props;

  return (
    <table className="table">
      <TableHeader />
      <tbody>
        {people.map((person) => (
          <TableRow key={person.id} person={person} />
        ))}
      </tbody>
    </table>
  );
};

const CrudDemo = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>People List</h2>
      <Table people={people} />
    </div>
  );
};

export default CrudDemo;
