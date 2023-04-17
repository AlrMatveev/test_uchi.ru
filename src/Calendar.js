import { useEffect, useState } from "react";
import { CalendarWraper, Week, Day, Month, Button } from "./styled";
import Modal from "./Modal";
import Header from "./Header";
import TimeTable from "./TimeTable";
import Footer from "./Footer";

const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const check = week.find((day) => {
      return day === date;
    });
    if (!check) setWeek(getWeek(date));
  }, [date, week]);

  return (
    <>
      <Header setModal={setModal} />
      <CalendarWraper>
        <Modal modal={modal} setModal={setModal} date={date} time={time} />
        <Week>
          {week.map((day, i) => {
            return (
              <Day key={day} selected={date.getDate() === day.getDate()}>
                <div>{dayNames[i]}</div>
                <div
                  onClick={() => {
                    setDate(day);
                  }}
                >
                  <span>{day.getDate()}</span>
                </div>
              </Day>
            );
          })}
        </Week>
        <Month>
          <Button
            onClick={() => {
              setDate(prevOrNextDate(week[0], 0));
            }}
          >
            {"<"}
          </Button>
          <div>
            <span>{`${
              monthNames[date.getMonth()]
            } ${date.getFullYear()}`}</span>
          </div>
          <Button
            onClick={() => {
              setDate(prevOrNextDate(week[6], 1));
            }}
          >
            {">"}
          </Button>
        </Month>
      </CalendarWraper>
      <TimeTable time={time} setTime={setTime} />
      <Footer setDate={setDate} time={time} setTime={setTime} />
    </>
  );
};

export default Calendar;

function getWeek(date) {
  const monday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - date.getDay()
  );
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(
      new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i)
    );
  }
  return week;
}

function prevOrNextDate(date, route) {
  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    route ? date.getDate() + 1 : date.getDate() - 1
  );
  return newDate;
}
