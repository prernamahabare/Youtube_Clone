import React from 'react'

const MapTutorial = () => {
  const array = [
    {
      "name": "Alice",
      "major": "Computer Science",
      "age": 21
    },
    {
      "name": "Bob",
      "major": "Mechanical Engineering",
      "age": 22
    },
    {
      "name": "pop",
      "major": "Mechanical Engineering",
      "age": 22
    }
  ]

  const filter_students = array.filter((student) => student.age === 22 && student.name === "pop")
  return (
    <>
      <div>
        {
          filter_students.map(({ name, major, age }) => (
            <div style={{ border: "1px solid black", margin: "2px" }}>
              name:{name}
              major:{major}
              age:{age}
            </div>
          )
          )
        }

      </div>
    </>
  )
}

export default MapTutorial