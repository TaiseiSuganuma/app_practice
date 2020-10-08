import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import UnivList from "~/components/templates/UnivList";
import { actions, UnivsState } from "~/features/univ/UnivSlice";
import { RootState } from "~/features/store";

const Univ: FC = () => {
  const { list, loadingList, loadingListError } = useSelector<
    RootState,
    UnivsState
  >((state) => state.univ);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.listUnivsAction());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>一覧</title>
      </Head>
      <UnivList
        loading={loadingList}
        error={loadingListError}
        items={list}
      ></UnivList>
    </div>
  );
};
export default Univ;
