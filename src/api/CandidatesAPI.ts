import CandidatesEntity from "~/entities/CandidatesEntity";
import axios from "~/utils/axios";

export type ListCandidatesResponse = CandidatesEntity[];
export type FetchCandidatesRequest = { id: string };
export type FetchCandidatesResponse = CandidatesEntity;

const CandidatesAPI = {
  list: async (): Promise<ListCandidatesResponse> =>
    (await axios.get("/candidates")).data,
  fetch: async (
    req: FetchCandidatesRequest
  ): Promise<FetchCandidatesResponse> =>
    (await axios.get(`/candidates/${req.id}`)).data,
};
export default CandidatesAPI;
