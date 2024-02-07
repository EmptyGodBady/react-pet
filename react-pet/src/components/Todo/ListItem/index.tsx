type Props = {
  tag: string;
  task: string;
};

export default function ListItem({ tag, task }: Props) {
  return (
    <li className="todo-task">
      <div>
        <p className="tag-style">{tag}</p>

        <p className="task-style">{task}</p>
      </div>

      <input type="checkbox" className="task-check"></input>
    </li>
  );
}
