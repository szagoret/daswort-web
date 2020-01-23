import React from "react";
import {Segment} from "semantic-ui-react";
import {Calendar, momentLocalizer, Views} from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Event = ({event}) => {
    return (
        <span>
      <strong>{event.title}</strong>
            {event.desc && ':  ' + event.desc}
    </span>
    )
};

const EventAgenda = ({event}) => {
    return (
        <span>
      <em style={{color: 'magenta'}}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
    )
};

const customDayPropGetter = date => {
    if (date.getDate() === 7 || date.getDate() === 15)
        return {
            className: 'special-day',
            style: {
                border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
            },
        };
    else return {}
};

const customSlotPropGetter = date => {
    if (date.getDate() === 7 || date.getDate() === 15)
        return {
            className: 'special-day',
        };
    else return {}
};
const localizer = momentLocalizer(moment);

const EventsPage = () => (
    <Segment>
        <h3>Events</h3>
        <Calendar
            events={events}
            localizer={localizer}
            defaultDate={new Date(2015, 3, 1)}
            defaultView={Views.AGENDA}
            dayPropGetter={customDayPropGetter}
            slotPropGetter={customSlotPropGetter}
            style={{height: '500px'}}
            components={{
                event: Event,
                agenda: {
                    event: EventAgenda,
                },
            }}
        />
    </Segment>
);

export default EventsPage;