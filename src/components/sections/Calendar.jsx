import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import CalendarWidget from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarSection = () => {
  const [date, setDate] = useState(new Date());
  // eslint-disable-next-line no-unused-vars
  const [events, setEvents] = useState([
    { date: new Date(2023, 3, 15), title: 'Livraison des commandes de la semaine' },
    { date: new Date(2023, 3, 20), title: 'Nouveaux designs disponibles' },
    { date: new Date(2023, 3, 25), title: 'Promotion spéciale weekend' }
  ]);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  // Function to check if a date has events
  const hasEvent = (date) => {
    return events.some(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  // Function to get events for the selected date
  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  // Custom tile content to mark dates with events
  const tileContent = ({ date, view }) => {
    if (view === 'month' && hasEvent(date)) {
      return <div className="event-marker"></div>;
    }
    return null;
  };

  return (
    <section id="calendar" className="calendar-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Calendrier
        </motion.h2>
        
        <motion.div 
          className="calendar-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="calendar-wrapper">
            <CalendarWidget 
              onChange={onChange} 
              value={date}
              tileContent={tileContent}
              className="custom-calendar"
            />
          </div>
          
          <div className="events-list">
            <h3>Événements du {date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</h3>
            {getEventsForDate(date).length > 0 ? (
              <ul>
                {getEventsForDate(date).map((event, index) => (
                  <li key={index}>{event.title}</li>
                ))}
              </ul>
            ) : (
              <p>Aucun événement prévu pour cette date.</p>
            )}
            
            <div className="calendar-info">
              <p>
                Ce calendrier vous permet de suivre les dates importantes comme les livraisons prévues,
                les nouvelles collections et les promotions spéciales.
              </p>
              <p>
                Pour le suivi personnalisé de votre commande, n'hésitez pas à me contacter directement via WhatsApp.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Calendar = CalendarSection; 
