import React, { useState } from 'react';

const StudentSignup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        // TODO: Replace with actual signup logic (API call)
        setSuccess('Signup successful!');
        setForm({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
            <h2>Student Signup</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 12 }}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                        required
                    />
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                        required
                    />
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                        required
                    />
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
                {success && <div style={{ color: 'green', marginBottom: 12 }}>{success}</div>}
                <button type="submit" style={{ width: '100%', padding: 10, background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default StudentSignup;