import "./Component.css";
import { useState, useEffect } from "react";

export const Component = ({ title }: { title: string }) => {
  const [serverTime, setServerTime] = useState();

  useEffect(() => {
    fetch("https://api.binance.com/api/v3/exchangeInfo")
      .then((res) => res.json())
      .then((data) => {
        setServerTime(data.serverTime);
      });
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <p>Binance server time: {serverTime}</p>
    </>
  );
};
