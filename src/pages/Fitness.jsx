import { useState } from "react";
import { motion } from "framer-motion";

function Fitness() {
  const [priority, setPriority] = useState("");
  const [level, setLevel] = useState("");
  const [showResult, setShowResult] = useState(false);

  const mentalHealthData = {
    easy: [
      { activity: "Meditation", description: "Relax and focus on breathing", emoji: "🧘‍♂️" },
      { activity: "Breathing Exercises", description: "Simple deep breathing exercises", emoji: "🌬️" },
      { activity: "Gratitude Journaling", description: "Write down three things you're grateful for", emoji: "📖" },
      { activity: "Guided Visualization", description: "Mental imagery to relieve stress", emoji: "🌅" },
      { activity: "Listening to Calming Music", description: "Relax with soothing music", emoji: "🎶" },
      { activity: "Aromatherapy", description: "Use calming scents like lavender", emoji: "🌸" },
    ],
    medium: [
      { activity: "Guided Meditation", description: "Meditation with audio guidance", emoji: "🧘‍♀️" },
      { activity: "Mindfulness Practice", description: "Focus on the present moment", emoji: "💭" },
      { activity: "Progressive Muscle Relaxation", description: "Tense and relax muscle groups", emoji: "💪" },
      { activity: "Affirmations", description: "Positive self-talk to boost confidence", emoji: "🗣️" },
      { activity: "Breathing Techniques", description: "Box breathing or 4-7-8 breathing technique", emoji: "🌬️" },
      { activity: "Journaling for Mental Clarity", description: "Write down thoughts to clear the mind", emoji: "✍️" },
    ],
    hard: [
      { activity: "Advanced Meditation", description: "Longer sessions, deeper focus", emoji: "🧘‍♀️" },
      { activity: "Visualization Techniques", description: "Use mental imagery for stress reduction", emoji: "🌄" },
      { activity: "Mindful Walking", description: "Walk while focusing entirely on your steps and breathing", emoji: "🚶‍♀️" },
      { activity: "Extended Yoga Practice", description: "A 60-minute yoga flow for mental peace", emoji: "🧘‍♂️" },
      { activity: "Breathing to Calm Anxiety", description: "Breathe through moments of high anxiety", emoji: "😌" },
      { activity: "Digital Detox", description: "Take a break from screens for a few hours", emoji: "📵" },
    ]
  };

  const physicalHealthData = {
    easy: [
      { activity: "Walking", description: "A simple walk for 20-30 minutes", emoji: "🚶‍♂️" },
      { activity: "Stretching", description: "Basic stretches for flexibility", emoji: "🤸‍♀️" },
      { activity: "Light Yoga", description: "Gentle stretches to improve flexibility", emoji: "🧘‍♀️" },
      { activity: "Bodyweight Squats", description: "Simple squats for leg strength", emoji: "🏋️‍♂️" },
      { activity: "Basic Push-ups", description: "Simple push-ups for upper body strength", emoji: "💪" },
      { activity: "Plank Hold", description: "Hold a plank position for 30 seconds", emoji: "💥" },
    ],
    medium: [
      { activity: "Jogging", description: "Jogging for 15-20 minutes", emoji: "🏃‍♂️" },
      { activity: "Bodyweight Squats", description: "Simple bodyweight exercises", emoji: "🏋️‍♀️" },
      { activity: "Lunges", description: "Lunges for leg strength and stability", emoji: "🤸‍♂️" },
      { activity: "Push-ups", description: "Standard push-ups for upper body strength", emoji: "💪" },
      { activity: "Plank with Shoulder Taps", description: "Plank with shoulder taps for core strength", emoji: "🔥" },
      { activity: "Jumping Jacks", description: "Basic cardio exercise", emoji: "🤸‍♂️" },
    ],
    hard: [
      { activity: "HIIT Cardio", description: "High-intensity interval training", emoji: "🔥" },
      { activity: "Push-ups", description: "Intense upper body workout", emoji: "💪" },
      { activity: "Burpees", description: "High-intensity full-body workout", emoji: "🤸‍♂️" },
      { activity: "Mountain Climbers", description: "Full-body cardio exercise", emoji: "🏞️" },
      { activity: "Plank to Push-up", description: "Alternate between plank and push-up", emoji: "🔥" },
      { activity: "Jump Squats", description: "Explosive squats for lower body strength", emoji: "💥" },
    ]
  };

  const handleSubmit = () => {
    setShowResult(true);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto p-8 text-black"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Choose Your Priority</h2>
        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={() => setPriority("Mental Health")}
            className={`p-4 w-full rounded-lg ${priority === "Mental Health" ? "bg-blue-600" : "bg-blue-200"}`}
          >
            Mental Health
          </button>
          <button
            onClick={() => setPriority("Physical Health")}
            className={`p-4 w-full rounded-lg ${priority === "Physical Health" ? "bg-green-600" : "bg-green-200"}`}
          >
            Physical Health
          </button>
        </div>

        {priority && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">Choose Difficulty Level</h3>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => setLevel("easy")}
                className={`p-4 w-full rounded-lg text-white ${level === "easy" ? "bg-yellow-500" : "bg-yellow-200"}`}
              >
                Easy
              </button>
              <button
                onClick={() => setLevel("medium")}
                className={`p-4 w-full rounded-lg text-white ${level === "medium" ? "bg-orange-500" : "bg-orange-200"}`}
              >
                Medium
              </button>
              <button
                onClick={() => setLevel("hard")}
                className={`p-4 w-full rounded-lg text-white ${level === "hard" ? "bg-red-600" : "bg-red-200"}`}
              >
                Hard
              </button>
            </div>
          </div>
        )}

        {priority && level && (
          <motion.button
            onClick={handleSubmit}
            className="text-white p-4 rounded-lg w-full mt-6 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        )}
      </motion.div>

      {showResult && priority && level && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-100 rounded-lg shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Activities</h2>
          <div className="space-y-6">
            {(priority === "Mental Health" ? mentalHealthData[level] : physicalHealthData[level]).map((entry, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{entry.emoji}</div>
                  <div>
                    <h4 className="font-semibold text-xl">{entry.activity}</h4>
                    <p className="text-gray-700">{entry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Fitness;
