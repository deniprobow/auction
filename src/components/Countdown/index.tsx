import React from "react";
import moment from "moment";
const { useCallback, useEffect, useRef, useState } = React;

const calculateDuration = (eventTime:number) => moment.duration(Math.max(eventTime - (Math.floor(Date.now() / 1000)), 0), 'seconds');

export default function Countdown(props:any ) {
  const [duration, setDuration] = useState(calculateDuration(props.eventTime));
  const timerRef:any = useRef(0);
  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(props.eventTime));
  }, [props.eventTime])

  useEffect(() => {
    timerRef.current = setInterval(timerCallback, props.interval);

    return () => {
      clearInterval(timerRef.current);
    }
  }, [props.eventTime]);

  return (
    <div>
       {duration.hours()} H {duration.minutes()} M {duration.seconds()} S
    </div>
  )
}