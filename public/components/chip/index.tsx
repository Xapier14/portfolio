import "../common/chip-style.scss";

interface ChipProps {
  class?: string;
  id?: string;
  label?: string;
  value: string;
  selected?: boolean;
  onClick?: (id: string) => void;
}

export default function Chip(props: ChipProps) {
  const selected = props.selected ?? false;
  const label = props.label ?? props.value;
  const value = props.value;
  const onClick = props.onClick;
  return (
    <button
      class={`chip ${selected ? "active-chip" : ""} ${props.class ?? ""}`}
      id={props.id}
      onClick={(x) => {
        console.log("Chip clicked: " + value);
        onClick(value);
      }}
    >
      <span>{label}</span>
    </button>
  );
}
