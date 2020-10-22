import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import ContestsEntity from "~/entities/ContestsEntity";
import CandidatesEntity from "~/entities/CandidatesEntity";
import contests from "./contests.json";
import candidates from "./candidates.json";

const axiosMock = (instance: AxiosInstance): void => {
  const mock = new MockAdapter(instance);
  mock.onGet("/api/contests").reply(200, contests);
  contests.forEach((contest: ContestsEntity) => {
    mock.onGet(`/api/contests/${contest.id}`).reply(200, contests);
  });
  mock.onGet(`/api/contests/${contest.id}/candidates`).reply(200, candidates);
  candidates.forEach((candidates: CandidatesEntity) => {
    mock
      .onGet(`/api/contests/${contest.id}/candidates/${candidate.id}`)
      .reply(200, candidates);
  });
};
export default axiosMock;
