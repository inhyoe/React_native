export const addGoalHandler = (
  newGoal: string,
  setCourseGoals: React.Dispatch<React.SetStateAction<string[]>>,
): void => {
  if (newGoal.trim().length === 0) return; // 빈 입력값 방지
  setCourseGoals((currentCourseGoals) => [...currentCourseGoals, newGoal]);
};
