// import React from "react";
// import { v4 as uuid } from "uuid";
// import { TaskInput } from "./TaskInput";
// import { TaskItem } from "./TaskItem";
// import { ShowCompletedTodos } from "./showCompletedTodos";
// import OptionsWrapper from "./OptionsWrapper";

// const TaskListClone = () => {
//   const [todo, setTodo] = React.useState(() => {
//     // getting stored value
//     console.log('local storage called');
//     const saved = localStorage.getItem('todo');
//     const initialValue = JSON.parse(saved);
//     return initialValue || [];
//   });
//   const [completedTodos, setCompletedTodos] = React.useState(() => {
//     // getting stored value
//     console.log('local storage called');
//     const saved = localStorage.getItem('completed_todos');
//     const initialValue = JSON.parse(saved);
//     return initialValue || todo;
//   });
//   const [pendingTodos, setPendingTodos] = React.useState(() => {
//     // getting stored value
//     console.log('local storage called');
//     const saved = localStorage.getItem('pending_todos');
//     const initialValue = JSON.parse(saved);
//     return initialValue || todo;
//   });
//     const [option, setOption] = React.useState(1);

//   React.useEffect(() => {
//     console.log('local storage updated');
//     localStorage.setItem('todo', JSON.stringify(todo));
//     localStorage.setItem('completed_todos', JSON.stringify(completedTodos));
//     localStorage.setItem('pending_todos', JSON.stringify(pendingTodos));
//   }, [todo, completedTodos, pendingTodos]);
  
//   const handleTodo = (taskName) => {
//     const payload = {
//       id: uuid(),
//       title: taskName,
//       status: false,
//       bgcolor: "#FF5C5C"
//     };
//     setTodo([...todo, payload]);
//   };
//   const handleToggle = (id) => {
//     const data = todo.map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             status: !item.status,
//             bgcolor: item.bgcolor === "#FF5C5C" ? "#8FF389" : "#FF5C5C"
//           }
//         : item
//     );
//     setTodo(data);
//   };

//   const handleDelete = (id) => {
//     const data = todo.filter((item) => item.id !== id);
//     todo.map((item) =>
//       item.id === id ? window.alert(`${item.title} Deleted!`) : item
//     );
//     setTodo(data);
//   };
//   const handleShowCompletedTodos = () => {
//     const data = [];
//     for (let i = 0; i < todo.length; i++) {
//       if (todo[i].status !== false) {
//         data.push({ ...todo[i]});
//       }
//     }
//     setCompletedTodos(data);
//   };
//   return (
//     <>
//       <TaskInput handleTodo={handleTodo} />
//       <OptionsWrapper/>
//       {option === 1
//         ? pendingTodos?.map((item) => (
//             <div className="w-96 mx-2 my-2" style={{ backgroundColor: item.bgcolor }}>
//               <TaskItem
//                 key={item.id}
//                 {...item}
//                 handleDelete={handleDelete}
//                 handleToggle={handleToggle}
//               />
//             </div>
//           ))
//         : option === 2 ? completedTodos?.map((item) => (
//             <div className="w-96 mx-2 my-2" style={{ backgroundColor: item.bgcolor }}>
//               <TaskItem
//                 key={item.id}
//                 {...item}
//                 handleDelete={handleDelete}
//                 handleToggle={handleToggle}
//               />
//             </div>))
//             : todo?.map((item) => (
//             <div
//               key={item.id}
//               className="w-96 my-2 mx-2"
//               style={{ backgroundColor: item.bgcolor }}
//             >
//               <TaskItem
//                 key={item.id}
//                 {...item}
//                 handleDelete={handleDelete}
//                 handleToggle={handleToggle}
//               />
//             </div>
//           ))}
//     </>
//   );
// };
// export { TaskListClone };