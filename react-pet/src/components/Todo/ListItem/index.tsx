type Props = {
  name: string;
  ingridients: string;
};

export default function RecipeListItem({ name, ingridients }: Props) {
  return (
    <li className="todo-ingridients">
      <div>
        <p className="name-style">{name}</p>

        <p className="ingridients-style">{ingridients}</p>
      </div>

      <input type="checkbox" className="ingridients-check"></input>
    </li>
  );
}
