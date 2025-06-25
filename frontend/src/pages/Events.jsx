import React, { useState } from 'react';
import { CalendarDaysIcon, MapPinIcon, ClockIcon, MagnifyingGlassIcon, Squares2X2Icon, CalendarIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const pastelColors = [
  'bg-gradient-to-br from-mint-200 to-green-100',
  'bg-gradient-to-br from-blue-200 to-blue-100',
  'bg-gradient-to-br from-yellow-100 to-orange-100',
  'bg-gradient-to-br from-violet-200 to-purple-100',
];

const mockEvents = [
  {
    id: 1,
    club: 'Tech Society',
    clubShort: 'TS',
    title: 'Tech Talk: AI Revolution',
    description: 'A deep dive into the future of AI and its impact on society.',
    date: '2025-06-25',
    time: '3:00 PM - 5:00 PM',
    location: 'Engineering Building, Room 305',
    category: 'Technology',
    icon: <SparklesIcon className="w-8 h-8 text-green-500" />, // Example icon
  },
  {
    id: 2,
    club: 'Debate Club',
    clubShort: 'DC',
    title: 'Annual Debate Competition',
    description: 'Compete with the best debaters on campus.',
    date: '2025-06-28',
    time: '1:00 PM - 4:00 PM',
    location: 'Arts Center Auditorium',
    category: 'Academic',
    icon: <SparklesIcon className="w-8 h-8 text-blue-500" />, // Example icon
  },
  {
    id: 3,
    club: 'Music Society',
    clubShort: 'MS',
    title: 'Summer Music Festival',
    description: 'Enjoy performances by student bands and artists.',
    date: '2025-07-05',
    time: '5:00 PM - 10:00 PM',
    location: 'Campus Green',
    category: 'Entertainment',
    icon: <SparklesIcon className="w-8 h-8 text-yellow-500" />, // Example icon
  },
  {
    id: 4,
    club: 'Business Club',
    clubShort: 'BC',
    title: 'Entrepreneurship Workshop',
    description: 'Learn how to launch your own startup.',
    date: '2025-07-10',
    time: '2:00 PM - 5:00 PM',
    location: 'Business School, Room 120',
    category: 'Career',
    icon: <SparklesIcon className="w-8 h-8 text-violet-500" />, // Example icon
  },
  {
    id: 5,
    club: 'Photography Club',
    clubShort: 'PC',
    title: 'Photography Exhibition',
    description: 'Showcase your best campus moments.',
    date: '2025-07-15',
    time: '11:00 AM - 6:00 PM',
    location: 'Student Center Gallery',
    category: 'Arts',
    icon: <SparklesIcon className="w-8 h-8 text-blue-400" />, // Example icon
  },
  {
    id: 6,
    club: 'Community Service Club',
    clubShort: 'CSC',
    title: 'Charity Run',
    description: 'Join the run for a good cause!',
    date: '2025-07-20',
    time: '8:00 AM - 11:00 AM',
    location: 'Campus Track',
    category: 'Sports',
    icon: <SparklesIcon className="w-8 h-8 text-green-400" />, // Example icon
  },
];

const clubs = ['All Clubs', 'Tech Society', 'Debate Club', 'Music Society', 'Business Club', 'Photography Club', 'Community Service Club'];
const categories = ['All Categories', 'Technology', 'Academic', 'Entertainment', 'Career', 'Arts', 'Sports'];

function getMonthMatrix(year, month) {
  // month: 0-indexed
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const matrix = [];
  let week = [];
  let dayOfWeek = firstDay.getDay();
  // Fill initial empty days
  for (let i = 0; i < dayOfWeek; i++) week.push(null);
  for (let d = 1; d <= lastDay.getDate(); d++) {
    week.push(d);
    if (week.length === 7) {
      matrix.push(week);
      week = [];
    }
  }
  // Fill trailing empty days
  if (week.length) {
    while (week.length < 7) week.push(null);
    matrix.push(week);
  }
  return matrix;
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Events = () => {
  const [selectedClub, setSelectedClub] = useState('All Clubs');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [view, setView] = useState('grid');
  const [calendarMonth, setCalendarMonth] = useState(6); // July (0-indexed)
  const [calendarYear, setCalendarYear] = useState(2025);

  // Filter logic
  const filteredEvents = mockEvents.filter(event => {
    const clubMatch = selectedClub === 'All Clubs' || event.club === selectedClub;
    const categoryMatch = selectedCategory === 'All Categories' || event.category === selectedCategory;
    const searchMatch = event.title.toLowerCase().includes(search.toLowerCase()) || event.club.toLowerCase().includes(search.toLowerCase());
    const dateMatch = !date || event.date === date;
    return clubMatch && categoryMatch && searchMatch && dateMatch;
  });

  // Calendar event mapping
  const eventsByDate = {};
  mockEvents.forEach(event => {
    const [y, m, d] = event.date.split('-').map(Number);
    if (y === calendarYear && m === calendarMonth + 1) {
      if (!eventsByDate[d]) eventsByDate[d] = [];
      eventsByDate[d].push(event);
    }
  });

  const monthMatrix = getMonthMatrix(calendarYear, calendarMonth);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-900 font-poppins">Events Dashboard</h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-white w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-200 font-inter"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex bg-gray-100 rounded-2xl p-1 shadow-sm">
            <button
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-medium transition-all duration-150
                ${view === 'grid' ? 'bg-white text-black shadow-sm z-10' : 'bg-transparent text-gray-500'}`}
              style={{ fontWeight: view === 'grid' ? 600 : 500 }}
              onClick={() => setView('grid')}
            >
              <Squares2X2Icon className={`w-6 h-6 ${view === 'grid' ? 'text-black' : 'text-gray-400'}`} />
              Grid
            </button>
            <button
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-medium transition-all duration-150
                ${view === 'calendar' ? 'bg-white text-black shadow-sm z-10' : 'bg-transparent text-gray-500'}`}
              style={{ fontWeight: view === 'calendar' ? 600 : 500 }}
              onClick={() => setView('calendar')}
            >
              <CalendarIcon className={`w-6 h-6 ${view === 'calendar' ? 'text-black' : 'text-gray-400'}`} />
              Calendar
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-8">
        <select value={selectedClub} onChange={e => setSelectedClub(e.target.value)} className="px-4 py-2 rounded-lg border border-gray-200 bg-white font-inter">
          {clubs.map(club => <option key={club}>{club}</option>)}
        </select>
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-4 py-2 rounded-lg border border-gray-200 bg-white font-inter">
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 bg-white font-inter"
        />
      </div>
      <motion.div layout>
        <AnimatePresence mode="wait">
          {view === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(124,58,237,0.12)' }}
                  className={`rounded-2xl p-0 flex flex-col shadow-md transition-all cursor-pointer ${pastelColors[idx % pastelColors.length]} font-poppins`}
                >
                  <div className="flex items-center gap-3 px-6 pt-6">
                    {event.icon}
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700 font-inter">{event.clubShort}</div>
                    <span className="text-sm text-gray-500 font-medium font-inter">{event.club}</span>
                  </div>
                  <div className="px-6 pt-3 flex-1 flex flex-col">
                    <h2 className="font-bold text-lg text-gray-900 mb-1 font-poppins">{event.title}</h2>
                    <p className="text-gray-600 text-sm mb-2 font-inter">{event.description}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-1 gap-2">
                      <CalendarDaysIcon className="w-4 h-4 mr-1" />
                      <span>{event.date.replace(/-/g, '/')}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-1 gap-2">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-3 gap-2">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/80 text-blue-700 text-xs font-medium font-inter">{event.category}</span>
                    </div>
                    <button className="mt-auto mb-4 px-5 py-2 rounded-md bg-white text-gray-900 font-semibold shadow hover:bg-gray-100 transition">Register</button>
                  </div>
                </motion.div>
              ))}
              {filteredEvents.length === 0 && (
                <div className="col-span-full text-center text-gray-400 py-12">No events found.</div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-lg font-semibold font-poppins">Calendar View</span>
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={() => {
                      if (calendarMonth === 0) {
                        setCalendarMonth(11);
                        setCalendarYear(calendarYear - 1);
                      } else {
                        setCalendarMonth(calendarMonth - 1);
                      }
                    }}
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <span className="font-medium font-inter">{monthNames[calendarMonth]} {calendarYear}</span>
                  <button
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={() => {
                      if (calendarMonth === 11) {
                        setCalendarMonth(0);
                        setCalendarYear(calendarYear + 1);
                      } else {
                        setCalendarMonth(calendarMonth + 1);
                      }
                    }}
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl shadow-inner p-6 overflow-x-auto">
                <table className="w-full table-fixed text-center select-none border-separate border-spacing-0">
                  <thead>
                    <tr className="text-gray-400 text-sm">
                      <th className="py-3 font-poppins">Sun</th>
                      <th className="font-poppins">Mon</th>
                      <th className="font-poppins">Tue</th>
                      <th className="font-poppins">Wed</th>
                      <th className="font-poppins">Thu</th>
                      <th className="font-poppins">Fri</th>
                      <th className="font-poppins">Sat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthMatrix.map((week, i) => (
                      <tr key={i}>
                        {week.map((day, j) => (
                          <td key={j} className="h-24 align-top relative px-2 py-2">
                            {day && (
                              <div className="flex flex-col items-start gap-2">
                                <span className="text-gray-700 font-medium font-poppins mb-1 text-base">{day}</span>
                                <div className="flex flex-col gap-1 w-full">
                                  {eventsByDate[day] && eventsByDate[day].map((event) => (
                                    <button
                                      key={event.id}
                                      className="block text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 font-poppins hover:bg-blue-200 transition text-left w-fit max-w-full truncate"
                                      onClick={() => alert(`Event: ${event.title}\n${event.date.replace(/-/g, '/')}\n${event.time}\n${event.location}`)}
                                    >
                                      {event.title.length > 16 ? event.title.slice(0, 15) + '…' : event.title}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Events;