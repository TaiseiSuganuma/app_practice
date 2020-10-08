import UnivsEntity from "~/entities/UnivsEntity";
import axios from "~/utils/axios";

export type ListUnivsResponse = UnivsEntity[];
export type FetchUnivsRequest = { id: string };
export type FetchUnivsResponse = UnivsEntity;

const UnivsAPI = {
  list: async (): Promise<ListUnivsResponse> =>
    (await axios.get("/univs")).data,
  fetch: async (req: FetchUnivsRequest): Promise<FetchUnivsResponse> =>
    (await axios.get(`/univs/${req.id}`)).data,
};
export default UnivsAPI;
