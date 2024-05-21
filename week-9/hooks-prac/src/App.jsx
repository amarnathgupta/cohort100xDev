import React, { useEffect, useState } from 'react'

export default function App() {
  
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (res) => await res.json())
    .then((data) => setTodos(data.todos))
  }, [])

  return (
    <div>
      {
        todos.map(({id, title, description, completed}) => (
          <div key={id}>
            {title}
            <br />
            {description}
            <hr />
          </div>
        ))
      }
    </div>
  );
}

// function MyComponent() {
//   useEffect(() => {
//     console.log("Component mounted!")

//     return () => {
//       console.log("Component unmounted!")
//     }
//   }, [])
//   return (
//     <div>
//       From inside my component
//     </div>
//   )
// }

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count => count + 1)}>
//       Count ({count})
//     </button>
//   );
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0};
//   }

//   incrementCount = () => {
//     this.setState({count: this.state.count + 1});
//   }
  
//   render() {
//     return (
//       <div>
//         <button onClick={this.incrementCount}>
//           Count ({this.state.count})
//         </button>
//       </div>
//     );
//   }
// }
