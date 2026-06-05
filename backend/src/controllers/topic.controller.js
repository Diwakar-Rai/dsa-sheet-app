import Problem from "../models/Problem.js";
import Topic from "../models/Topics.js";

export const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();

    const data = await Promise.all(
      topics.map(async (topic) => {
        const problems = await Problem.find({
          topic: topic._id,
        });

        return {
          ...topic.toObject(),
          problems,
        };
      }),
    );

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
