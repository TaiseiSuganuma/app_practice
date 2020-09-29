import { AxiosInstance } from "axios";
import { MockAdapter } from "axios-mock-adapter";
import { UnivEntity } from "~/entities/UnivsEntity";
import { univs } from "./univs.json";

const axiosMock = (instance: AxiosInstance): void => {
  const mock = new MockAdapter(instance);
  mock.onGet("/api/univs").reply(200, univs);
  univs.forEach((univ: UnivEntity) => {
    mock.onGet(`/api/uvivs/${univ.id}`).reply(200, univs);
  });
};
export default axiosMock;
