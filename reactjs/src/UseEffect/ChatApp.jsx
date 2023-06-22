import React, { useState } from "react";

export default function ChatApp() {
  const lessons = [
    { id: 1, name: "lesson1" },
    { id: 2, name: "lesson2" },
    { id: 3, name: "lesson3" },
  ];
  const [lessonId, setLessonId] = useState(1);
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
