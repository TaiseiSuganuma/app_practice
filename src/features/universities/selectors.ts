import { useSelector } from "react-redux";
import { votingState } from "./slice";

export const useCounterState = () => {
  return useSelector((state: { counter: votingState }) => state);
};
