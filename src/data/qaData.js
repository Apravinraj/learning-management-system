export const qaData = {
  student: [
    {
      q: "How am I doing this week?",
      a: "You completed 3/5 modules and scored 80% in quizzes this week."
    },
    {
      q: "Show my weekly progress",
      a: "chart", 
      chartData: [
        { day: "Mon", progress: 20 },
        { day: "Tue", progress: 40 },
        { day: "Wed", progress: 50 },
        { day: "Thu", progress: 70 },
        { day: "Fri", progress: 80 }
      ]
    }
  ],
  admin: [
    {
      q: "How is my class doing this week?",
      a: "Your class average is 75% with 60% completion."
    },
    {
      q: "Show class performance",
      a: "chart",
      chartData: [
        { student: "Alice", score: 85 },
        { student: "Bob", score: 72 },
        { student: "Charlie", score: 90 }
      ]
    },
  {
    q: "Which course has the highest enrollment?",
    a: "Web Development with 120 students enrolled."
  }
  ,
  
  ]
};
