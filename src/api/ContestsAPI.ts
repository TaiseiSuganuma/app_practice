import ContestsEntity from "~/entities/ContestsEntity";
import axios from "~/utils/axios";

export type ListContestsResponse = ContestsEntity[];
export type FetchContestsRequest = { id: string };
export type FetchContestsResponse = ContestsEntity;

const ContestsAPI = {
  list: async (): Promise<ListContestsResponse> =>
    (await axios.get("/contests")).data,
  fetch: async (req: FetchContestsRequest): Promise<FetchContestsResponse> =>
    (await axios.get(`/contests/${req.id}`)).data,
};
export default ContestsAPI;
