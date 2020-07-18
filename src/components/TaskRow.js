import React from "react";

// import { Container } from './styles';

export const TaskRow = (props) => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
  </tr>
);
