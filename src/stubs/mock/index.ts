import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import ContestsEntity from "~/entities/ContestsEntity";
import contests from "./contests.json";

const axiosMock = (instance: AxiosInstance): void => {
  const mock = new MockAdapter(instance);
  mock.onGet("/api/contests").reply(200, contests);
  contests.forEach((contest: ContestsEntity) => {
    mock.onGet(`/api/contests/${contest.id}`).reply(200, contests);
  });
};
export default axiosMock;
