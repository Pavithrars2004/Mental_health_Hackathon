import { motion } from 'framer-motion';
import { PencilIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

function Journal() {
  const [journal, setJournal] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);  // State for handling errors

  const handleChange = (evt) => {
    setJournal(evt.target.value);
  }

  const handleSubmit = () => {
    fetchResult(journal);
  }

  const fetchResult = async (journalText) => {
    const url = "http://127.0.0.1:5000/analyze_journal";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "text": journalText })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponseData(data);
      setError(null);  // Clear any previous errors
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while analyzing the journal entry. Please try again.');
    }
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6 mx-auto p-4 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 w-fit"
        >
          <PencilIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Daily Journal</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Express your thoughts and track your emotional journey in a safe, private space.
        </p>
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card p-6"
      >
        <textarea
          value={journal}
          onChange={handleChange}
          placeholder="How are you feeling today?"
          className="w-full h-32 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark outline-none transition-all duration-300"
        />
        <button className="btn-primary mt-4" onClick={handleSubmit}>
          Save Entry
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}  
      </motion.div>

      {responseData && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 card p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Analysis Dashboard</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Overall Sentiment: {responseData.data.overallSentiment || 'Unknown'}</h3>
          </div>
          {responseData.data.entries.map((entry, index) => (
            <div key={index} className="mb-4">
              <p><strong>Date:</strong> {entry.date ? entry.date : formatDate(Date.now())}</p>
              <p><strong>Time:</strong> {entry.time ? entry.time : formatTime(Date.now())}</p>
              <p><strong>Mood:</strong> {entry.mood || 'Unknown'}</p>
              <p><strong>Sentiment:</strong> {entry.sentiment || 'Unknown'}</p>
              <p><strong>Emotional Triggers:</strong> {entry.emotionalTriggers ? entry.emotionalTriggers.join(', ') : 'None'}</p>  
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default Journal;
