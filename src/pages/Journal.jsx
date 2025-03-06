import { motion } from 'framer-motion';
import { PencilIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

function Journal() {
  const [journal, setJournal] = useState("");
  const [label, setLabel] = useState("");
  const [score , setScore] = useState(0)
  const [error, setError] = useState(null);  // State for handling errors
  const [allEntries, setAllEntries] = useState([]);  // State to store all journal entries
  const [expandedEntry, setExpandedEntry] = useState(null);  // State to store the currently expanded entry

  const handleChange = (evt) => {
    setJournal(evt.target.value);
  }

  const handleSubmit = () => {
    console.log("Submit clicked"); // Debugging statement
    fetchResult(journal);
  }

  const fetchResult = async (journalText) => {
    const url = "http://127.0.0.1:5000/analyze_journal";
    try {
      console.log("Fetching analysis for journal entry"); // Debugging statement
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
      setLabel( data["data"][0].label)
      setScore(data["data"][0].score*100)
      console.log("Analysis response data:", data["data"][0].score*100); // Debugging statement
      setError(null);  // Clear any previous errors
      fetchJournals();  // Refresh the list of all entries
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while analyzing the journal entry. Please try again.');
    }
  }

  const fetchJournals = async () => {
    try {
      console.log("Fetching all journal entries"); // Debugging statement
      const response = await fetch("http://127.0.0.1:5000/retrive_journal");
      if (!response.ok) {
        throw new Error(`Some error occurred while retrieving journal entries: ${response.status}`);
      }
      const data = await response.json();
      setAllEntries(data);  // Assuming the response is an array of journal entries
      console.log("Fetched journal entries:", data); // Debugging statement
    } catch (error) {
      console.error('Error retrieving journals:', error);
      setError('An error occurred while retrieving journal entries. Please try again.');
    }
  }

  const handleEntryClick = (index) => {
    console.log(`Entry ${index + 1} clicked`); // Debugging statement
    setExpandedEntry(expandedEntry === index ? null : index);  // Toggle expand/collapse
  }

  useEffect(() => {
    fetchJournals();
  }, []);

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
        
        
          <h2 className="text-2xl font-bold mb-4">Analysis Dashboard</h2>
            <div className="mb-4">
              <p><strong>Sentiment:</strong> {label}</p>
              <p><strong>Emotional Triggers:</strong> {score}</p>  
            </div>
          
       
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12 card p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Previous Journal Entries</h2>
        <ul className="space-y-4">
          {allEntries.map((entry, index) => (
            <li key={index}>
              <div
                className="cursor-pointer p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                onClick={() => handleEntryClick(index)}
              >
                <div className="flex justify-between items-center">
                  <p><strong>Entry {index + 1}</strong></p>
                  <span>{expandedEntry === index ? '▲' : '▼'}</span>
                </div>
                {expandedEntry === index && (
                  <div className="mt-4">
                    <p>{entry.text}</p> 
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Journal;
