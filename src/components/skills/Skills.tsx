import { useEffect, useState } from "react";
import { SkillsProps } from "./skillls.types";

export const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // findBy - video 31
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {/* addedd button for queryBy - video 30 */}
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
