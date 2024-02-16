type Props = {
  categories?: { name: string; ingridients: string[] }[];
  title: string;
};
export default function RecipeCard({ categories, title }: Props) {
  return (
    <li className="recepies-list">
      {title}:
      <ul>
        {categories?.map((item) => (
          <li>
            {item.name}: {`${item.ingridients}`}
          </li>
        ))}
      </ul>
    </li>
  );
}
