interface ChipsProps {
  items: string[];
  cls?: string;
}

/** Pill list of room features or meta labels. */
export default function Chips({ items, cls = "chip" }: ChipsProps) {
  return (
    <ul className="chips">
      {items.map((i) => (
        <li key={i} className={cls}>
          {i}
        </li>
      ))}
    </ul>
  );
}
