import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your API endpoint
        fetch('/api/leaderboard')
            .then((res) => res.json())
            .then((data) => {
                setLeaders(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Loading leaderboard...</div>;
    }

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto' }}>
            <h2>Leaderboard</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Rank</th>
                        <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Name</th>
                        <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaders.map((user, idx) => (
                        <tr key={user.id || idx}>
                            <td>{idx + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;