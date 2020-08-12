import React from 'react';
import moment from "moment";
import {Typography} from '@material-ui/core';

const Timer = ({time}) => {
  const makeMeTwoDigits = (n) => (n < 10 ? "0" : "") + n;
  const tempTime = moment.duration(time);
  const seconds = makeMeTwoDigits(tempTime.seconds());
  const minutes = makeMeTwoDigits(tempTime.minutes());
  const hours = makeMeTwoDigits(tempTime.hours());
  const days = makeMeTwoDigits(tempTime.days());
  return (
    <>
      <Typography variant="body2" component="span" gutterBottom>затраченное время</Typography>
      <Typography variant="caption" component="span" display="block" gutterBottom>
        дни: {days} часы: {hours} минуты: {minutes} секунды: {seconds}
      </Typography>
    </>
  );
};

export default Timer;