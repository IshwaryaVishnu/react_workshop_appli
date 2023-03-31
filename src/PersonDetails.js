import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      const response = await fetch(`https://example.com/api/people/${id}`);
      const data = await response.json();
      setPerson(data);
    };
    fetchPerson();
  }, [id]);

  const handleDelete = async () => {
    await fetch(`https://example.com/api/people/${id}`, {
      method: 'DELETE',
    });
    // Update the person list if the person was removed
  };

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <p>{person.age}</p>
      <p>{person.email}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PersonDetails;
