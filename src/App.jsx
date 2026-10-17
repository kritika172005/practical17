import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
        Student List
      </h1>

      {loading ? (
        <p className="text-center">Loading students...</p>
      ) : students.length === 0 ? (
        <p className="text-center text-red-600">
          Unable to load students.
        </p>
      ) : (
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {students.map(student => (
            <div
              key={student.id}
              className="rounded-xl bg-white p-5 shadow-md"
            >
              <h2 className="mb-2 text-xl font-bold text-blue-600">
                {student.name}
              </h2>

              <p className="text-gray-700">
                Email: {student.email}
              </p>

              <p className="mt-2 text-gray-700">
                City: {student.address.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;