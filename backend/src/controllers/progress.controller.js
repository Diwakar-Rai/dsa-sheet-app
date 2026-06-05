import Progress from "../models/Progress.js";

export const getProgress = async (req, res) => {
  try {
    let progress = await Progress.findOne({
      user: req.user.id,
    });

    if (!progress) {
      progress = await Progress.create({
        user: req.user.id,
        completedProblems: [],
      });
    }

    return res.status(200).json({
      success: true,
      completedProblems: progress.completedProblems,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const toggleProblem = async (req, res) => {
  try {
    const { problemId } = req.body;

    let progress = await Progress.findOne({
      user: req.user.id,
    });

    if (!progress) {
      progress = await Progress.create({
        user: req.user.id,
        completedProblems: [],
      });
    }

    const exists = progress.completedProblems.some(
      (id) => id.toString() === problemId,
    );

    if (exists) {
      progress.completedProblems = progress.completedProblems.filter(
        (id) => id.toString() !== problemId,
      );
    } else {
      progress.completedProblems.push(problemId);
    }

    await progress.save();

    return res.status(200).json({
      success: true,
      completedProblems: progress.completedProblems,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
