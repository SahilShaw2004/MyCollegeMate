import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AcademicCapIcon, UsersIcon, CalendarDaysIcon, ExclamationTriangleIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import campusImg from '../assets/resources.jpg'; // Use your preferred campus image

const features = [
    {
        title: 'Join a Club',
        icon: <UsersIcon className="w-10 h-10 text-sky-500" />,
        desc: 'Discover and join student clubs that match your interests.',
        bg: 'bg-mint-100',
        cta: 'Explore Clubs',
        to: '/clubs',
    },
    {
        title: 'Register for Events',
        icon: <CalendarDaysIcon className="w-10 h-10 text-peach-500" />,
        desc: 'Sign up for campus events, workshops, and fests.',
        bg: 'bg-peach-100',
        cta: 'Browse Events',
        to: '/events',
    },
    {
        title: 'Report Ragging',
        icon: <ExclamationTriangleIcon className="w-10 h-10 text-lavender-500" />,
        desc: 'Report ragging incidents safely and anonymously.',
        bg: 'bg-lavender-100',
        cta: 'Report Now',
        to: '/ragging',
    },
    {
        title: 'Find Study Partners',
        icon: <AcademicCapIcon className="w-10 h-10 text-sky-400" />,
        desc: 'Connect with peers for collaborative learning.',
        bg: 'bg-sky-100',
        cta: 'Find Partners',
        to: '/studypartner',
    },
    {
        title: 'Track Academic Calendar',
        icon: <BookOpenIcon className="w-10 h-10 text-mint-500" />,
        desc: 'Stay updated with important academic dates.',
        bg: 'bg-mint-100',
        cta: 'View Calendar',
        to: '/events',
    },
];

const pastelBg = [
    'bg-mint-100',
    'bg-peach-100',
    'bg-lavender-100',
    'bg-sky-100',
    'bg-mint-100',
];

const Start = () => {
    const navigate = useNavigate();
    const [navHeight, setNavHeight] = useState(56); // default 56px
    const isResizing = useRef(false);

    // Mouse event handlers for resizing
    const handleMouseDown = (e) => {
        isResizing.current = true;
        document.body.style.cursor = 'ns-resize';
    };
    const handleMouseMove = (e) => {
        if (!isResizing.current) return;
        // Get the new height (relative to the nav's top)
        const nav = document.getElementById('resizable-navbar');
        if (!nav) return;
        const rect = nav.getBoundingClientRect();
        let newHeight = e.clientY - rect.top;
        newHeight = Math.max(48, Math.min(160, newHeight)); // min 48px, max 160px
        setNavHeight(newHeight);
    };
    const handleMouseUp = () => {
        isResizing.current = false;
        document.body.style.cursor = '';
    };
    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-mint-50 via-peach-50 to-lavender-50 font-poppins">
            {/* Sticky Nav */}
            <nav
                id="resizable-navbar"
                className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow flex items-center justify-between px-6 rounded-b-2xl border-b border-gray-100"
                style={{ height: navHeight, minHeight: 48, maxHeight: 160, transition: isResizing.current ? 'none' : 'height 0.2s' }}
            >
                <span className="text-xl font-bold text-sky-600 tracking-wide">MyCollegeMate</span>
                <div className="flex gap-6 text-gray-600 font-medium">
                    <button className="hover:text-sky-500 transition" onClick={() => navigate('/')}>Home</button>
                    <button className="hover:text-sky-500 transition" onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}>About</button>
                    <button className="hover:text-sky-500 transition" onClick={() => window.scrollTo({ top: 2000, behavior: 'smooth' })}>Contact</button>
                    <button className="hover:text-sky-500 transition" onClick={() => navigate('/student-login')}>Login</button>
                </div>
                {/* Drag handle */}
                <div
                    onMouseDown={handleMouseDown}
                    style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 8, cursor: 'ns-resize', zIndex: 10 }}
                    className="flex items-center justify-center"
                >
                    <div className="w-16 h-1 rounded bg-gray-300 mx-auto" />
                </div>
            </nav>
            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 gap-10">
                <div className="flex-1 z-10">
                    <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                        Welcome to <span className="text-sky-500">CampusConnect!</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-gray-600 mb-8">
                        Connecting students with clubs, events, and study support in one vibrant platform.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="flex gap-4">
                        <motion.button whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-full bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 transition" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
                            Explore Platform
                        </motion.button>
                        <motion.button whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-full bg-white border border-sky-500 text-sky-600 font-semibold shadow hover:bg-sky-50 transition" onClick={() => navigate('/student-login')}>
                            Login
                        </motion.button>
                        <motion.button whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-full bg-white border border-green-500 text-green-600 font-semibold shadow hover:bg-green-50 transition" onClick={() => navigate('/student-signup')}>
                            Sign Up
                        </motion.button>
                    </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="flex-1 flex justify-center items-center">
                    <img src={campusImg} alt="Campus" className="rounded-3xl shadow-xl w-full max-w-md object-cover border-4 border-white" />
                </motion.div>
                {/* Hero BG overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-mint-50 via-peach-50 to-lavender-50 opacity-80 -z-10" />
            </section>
            {/* Features Section */}
            <section className="px-6 md:px-20 py-10 md:py-16">
                <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
                    What can you do on <span className="text-sky-500">CampusConnect?</span>
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(56,189,248,0.15)' }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className={`rounded-2xl shadow-md border-0 ${pastelBg[i % pastelBg.length]} p-6 flex flex-col items-center text-center min-h-[320px]`}>
                                <CardHeader className="mb-2 flex flex-col items-center">
                                    {f.icon}
                                    <CardTitle className="text-lg font-bold mt-2 mb-1 text-gray-800">{f.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="mb-4">
                                    <CardDescription className="text-base text-gray-600 mb-2">{f.desc}</CardDescription>
                                </CardContent>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-auto px-4 py-2 rounded-full bg-sky-500 text-white font-semibold shadow hover:bg-sky-600 transition"
                                    onClick={() => navigate(f.to)}
                                >
                                    {f.cta}
                                </motion.button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Contact Section (optional) */}
            <section className="px-6 md:px-20 py-10 md:py-16 bg-white/60 rounded-3xl max-w-5xl mx-auto mt-10 shadow">
                <h3 className="text-xl font-bold mb-4 text-sky-600">Contact Us</h3>
                <p className="text-gray-700 mb-2">Have questions or feedback? Reach out at <a href="mailto:info@campusconnect.com" className="text-sky-500 underline">info@campusconnect.com</a></p>
                <p className="text-gray-700">Made with ❤️ for students.</p>
            </section>
        </div>
    );
};

export default Start;