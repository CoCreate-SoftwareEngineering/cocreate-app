import './EventCalendar.css';
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import isBefore from 'dayjs';

dayjs.extend(isBefore);

const EventCalendar = (props) => {
          return (
          <span className="calendar">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                         orientation="portrait"
                    />
               </LocalizationProvider>
               
          </span>
     )
}
export default EventCalendar;