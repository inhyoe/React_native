import { Goal } from '../DTO/dto';

export const deleteCourseGoal = (
  index: number,
  setCourseGoals: React.Dispatch<React.SetStateAction<Goal[]>>,
): void => {
  setCourseGoals((currentCourseGoals) => {
    const updatedCourseGoals = [...currentCourseGoals];
    updatedCourseGoals.splice(index, 1);
    return updatedCourseGoals;
  });
};
