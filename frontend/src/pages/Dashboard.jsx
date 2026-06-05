import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";

import TopicAccordion from "../components/TopicAccordion";
import ProgressCard from "../components/ProgressCard";

const Dashboard = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const [topics, setTopics] = useState([]);
  const [completedProblems, setCompletedProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [topicsResponse, progressResponse] = await Promise.all([
        api.get("/topics"),
        api.get("/progress"),
      ]);

      setTopics(topicsResponse.data.data);

      setCompletedProblems(progressResponse.data.completedProblems);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleProblem = async (problemId) => {
    try {
      const response = await api.post("/progress/toggle", {
        problemId,
      });

      setCompletedProblems(response.data.completedProblems);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const totalProblems = topics.reduce(
    (total, topic) => total + topic.problems.length,
    0,
  );

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">DSA Sheet Tracker</h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <ProgressCard
          completed={completedProblems.length}
          total={totalProblems}
        />

        <div className="space-y-4">
          {topics.map((topic) => (
            <TopicAccordion
              key={topic._id}
              topic={topic}
              completedProblems={completedProblems}
              onToggle={toggleProblem}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
