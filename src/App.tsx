import { useMemo } from "react";
import "./App.css";
import SchedultItem from "./components/ScheduleItem/ScheduleItem";

const MONTH_LENGTH = 31;
const NUMBER_OF_ROOMS = 8;
const ALL_INITIAL_COLORS = 0;

const App = () => {
  const createSchedule = useMemo(
    () =>
      Array.from({ length: NUMBER_OF_ROOMS }, (_, subIndex) => (
        <SchedultItem key={subIndex} subIndex={subIndex} />
      )),
    []
  );

  const createDates = useMemo(
    () =>
      Array.from({ length: MONTH_LENGTH }, (_, index) => (
        <div className="day" key={index}>
          <ul className="schedule">{createSchedule}</ul>
          <p className="day__date">{index + 1}</p>
        </div>
      )),
    [createSchedule]
  );

  return (
    <div className="page">
      {/* <div className="page__button-container">
        <button
          type="button"
          className="page__button"
          onClick={() => window.location.reload()}
        >
          Обновить
        </button>
      </div> */}
      <div className="calendar">{createDates}</div>
    </div>
  );
};

export default App;
