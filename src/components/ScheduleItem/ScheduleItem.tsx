import { FC, useState, useEffect } from "react";
import "./SchedultItem.css";

const COLORS = [
  "#DA635D",
  "#ecebbd",
  "#bcf60c",
  "#FEC6C2",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#46f0f0",
  "#f032e6",
  "#fabebe",
  "#008080",
  "#e6beff",
  "#9a6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#808000",
  "#ffd8b1",
  "#000075",
  "#808080",
  "#7cfc00",
  "#FFCE94",
  "#3C2410",
  "#8DB0E5",
];

type TProps = {
  subIndex: number;
};

const SchedultItem: FC<TProps> = ({ subIndex }) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [color, setColor] = useState("#DA635D");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === COLORS.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    if (subIndex >= 4) {
      setColor(COLORS[1]);
    }
  }, [subIndex]);

  const handlesetColor = (evt: any, color: string) => {
    if (!evt.target.closest(".schedule__container")) {
      setPopoverOpen(false);
      return;
    }

    setColor(color);
    setPopoverOpen(false);
  };

  return (
    <div className="schedule__container">
      <button
        className={`schedule__button`}
        style={{ backgroundColor: color }}
        onClick={() => setPopoverOpen(true)}
      />
      {isPopoverOpen && (
        <div className="popover">
          <ul className="popover__list">
            {COLORS.map((color) => (
              <li className="popover__list-item" key={color}>
                <button
                  className="schedule__button"
                  style={{ backgroundColor: color }}
                  onClick={(evt) => handlesetColor(evt, color)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SchedultItem;
