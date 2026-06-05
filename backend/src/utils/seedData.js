import dotenv from "dotenv";
import mongoose from "mongoose";

import Problem from "../models/Problem.js";
import Topic from "../models/Topics.js";

import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const dsaData = [
  {
    topic: "Arrays",
    problems: [
      {
        title: "Two Sum",
        difficulty: "Easy",
        codingLink: "https://leetcode.com/problems/two-sum/",
        articleLink: "https://neetcode.io/problems/two-sum",
        youtubeLink: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
      },
      {
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        codingLink:
          "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        articleLink: "https://neetcode.io/problems/buy-and-sell-crypto",
        youtubeLink: "https://www.youtube.com/watch?v=1pkOgXD63yU",
      },
      {
        title: "Product of Array Except Self",
        difficulty: "Medium",
        codingLink:
          "https://leetcode.com/problems/product-of-array-except-self/",
        articleLink:
          "https://neetcode.io/problems/products-of-array-discluding-self",
        youtubeLink: "https://www.youtube.com/watch?v=bNvIQI2wAjk",
      },
    ],
  },

  {
    topic: "Strings",
    problems: [
      {
        title: "Valid Anagram",
        difficulty: "Easy",
        codingLink: "https://leetcode.com/problems/valid-anagram/",
        articleLink: "https://neetcode.io/problems/is-anagram",
        youtubeLink: "https://www.youtube.com/watch?v=9UtInBqnCgA",
      },
      {
        title: "Group Anagrams",
        difficulty: "Medium",
        codingLink: "https://leetcode.com/problems/group-anagrams/",
        articleLink: "https://neetcode.io/problems/anagram-groups",
        youtubeLink: "https://www.youtube.com/watch?v=vzdNOK2oB2E",
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        codingLink:
          "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        articleLink:
          "https://neetcode.io/problems/longest-substring-without-duplicates",
        youtubeLink: "https://www.youtube.com/watch?v=wiGpQwVHdE0",
      },
    ],
  },

  {
    topic: "Linked List",
    problems: [
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        codingLink: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        codingLink: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        codingLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
    ],
  },

  {
    topic: "Stack",
    problems: [
      {
        title: "Valid Parentheses",
        difficulty: "Easy",
        codingLink: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        title: "Min Stack",
        difficulty: "Medium",
        codingLink: "https://leetcode.com/problems/min-stack/",
      },
      {
        title: "Daily Temperatures",
        difficulty: "Medium",
        codingLink: "https://leetcode.com/problems/daily-temperatures/",
      },
    ],
  },

  {
    topic: "Queue",
    problems: [
      {
        title: "Implement Queue using Stacks",
        difficulty: "Easy",
      },
      {
        title: "Design Circular Queue",
        difficulty: "Medium",
      },
      {
        title: "Moving Average from Data Stream",
        difficulty: "Easy",
      },
    ],
  },

  {
    topic: "Trees",
    problems: [
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
      },
      {
        title: "Invert Binary Tree",
        difficulty: "Easy",
      },
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
      },
    ],
  },

  {
    topic: "Graphs",
    problems: [
      {
        title: "Number of Islands",
        difficulty: "Medium",
      },
      {
        title: "Clone Graph",
        difficulty: "Medium",
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
      },
    ],
  },

  {
    topic: "Dynamic Programming",
    problems: [
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
      },
      {
        title: "House Robber",
        difficulty: "Medium",
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
      },
    ],
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected");

    await Problem.deleteMany({});
    await Topic.deleteMany({});

    console.log("Existing data removed");

    for (const item of dsaData) {
      const topic = await Topic.create({
        name: item.topic,
      });

      const problems = item.problems.map((problem) => ({
        ...problem,
        topic: topic._id,
      }));

      await Problem.insertMany(problems);
    }

    console.log("Database seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();
