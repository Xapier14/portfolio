import "../common/chip-style.scss";
import Chip from "../chip";
import { useEffect, useState } from "preact/hooks";
interface ChipContainerProps {
  class?: string;
  id?: string;
  initialActiveChips?: string[];
  chips: { label: string; value: string }[];
  onChipChange?: (enabledChips: string[]) => void;
  singleSelect?: boolean;
  noSelect?: boolean;
}

export default function ChipContainer(props: ChipContainerProps) {
  var referenceChips = props.chips;
  var singleSelect = props.singleSelect ?? false;
  var noSelect = props.noSelect ?? false;
  var [activeChips, setActiveChips] = useState<string[]>(
    props.initialActiveChips ?? []
  );
  var [displayChips, setDisplayChips] = useState<JSX.Element[]>([]);

  useEffect(() => {
    var newDisplayChips = referenceChips.map((chip) => {
      return (
        <Chip
          key={chip.value}
          label={chip.label}
          value={chip.value}
          selected={activeChips.includes(chip.value)}
          onClick={chipClickHandler}
        ></Chip>
      );
    });
    setDisplayChips(newDisplayChips);
  }, [displayChips]);

  const chipClickHandler = (value: string) => {
    var newActiveChips = activeChips;
    if (singleSelect) {
      if (newActiveChips.includes(value)) {
        newActiveChips = [];
      } else {
        newActiveChips = [value];
      }
    } else {
      if (newActiveChips.includes(value)) {
        newActiveChips = newActiveChips.filter((x) => x !== value);
      } else {
        newActiveChips.push(value);
      }
    }
    setActiveChips(newActiveChips);
    props.onChipChange(newActiveChips);
  };

  return (
    <div
      class={`chip-container ${noSelect ? "chip-no-select" : ""} ${
        props.class ?? ""
      }`}
      id={props.id}
    >
      {displayChips}
    </div>
  );
}
