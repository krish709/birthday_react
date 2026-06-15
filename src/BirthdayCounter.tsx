import React, { useEffect, useState } from "react";
import "./BirthdayCounter.css";
import { useNavigate } from "react-router-dom";

interface Props {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const BirthdayCounter: React.FC<Props> = ({ targetDate }) => {
    const navigate = useNavigate();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

    const handleNavigate = () => {
    navigate("/opening");
  };


  return (
    <div className="glass-card">
      <h1 className="title">🎂 Birthday Countdown</h1>

      <div className="countdown-grid">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>

        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>

        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>

        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
      <button className="celebrate-btn" onClick={handleNavigate}>
        🎉 View Birthday Wishes
      </button>
    </div>
  );
};

export default BirthdayCounter;