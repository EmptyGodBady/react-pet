type Props = {
  tag: string;
  task: string;
};

export default function ListItem({ tag, task }: Props) {
  return (
    <li className="todo-task">
      <p>{tag}</p>

      <p>{task}</p>
    </li>
  );
}
