import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import ContestList from "~/components/templates/ContestList";
import { actions, ContestsState } from "~/features/contest/ContestsSlice";
import { RootState } from "~/features/store";

const Contest: FC = () => {
  const { list, loadingList, loadingListError } = useSelector<
    RootState,
    ContestsState
  >((state) => state.contest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.listContestsAction());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Campus One</title>
      </Head>
      <ContestList
        loading={loadingList}
        error={loadingListError}
        items={list}
      ></ContestList>
    </div>
  );
};
export default Contest;
