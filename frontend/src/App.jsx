import { useState } from 'react';

export default function App() {
  const [note, setNote] = useState('');

  const handleStart = () => {
    console.log("Timer started");
  };

  const handleStop = () => {
    console.log("Timer stopped");
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>TimeTracker</h1>
      <textarea
        placeholder="What are you working on?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={3}
        style={{ width: '100%' }}
      />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop} style={{ marginLeft: '1rem' }}>Stop</button>
      </div>
    </div>
  );
}