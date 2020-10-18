// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Head from "next/head";
import ContestDetail from "~/components/templates/ContestDetail";
import { actions } from "~/features/contest/contestsSlice";
import store from "~/features/store";
import ContestsEntity from "~/entities/ContestsEntity";

type PageProps = {
  data: ContestsEntity;
  loadingFetchError: boolean;
};

// SSR
export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
): Promise<GetServerSidePropsResult<PageProps>> => {
  const id = context.params.contestId as string;
  await store.dispatch(actions.fetchContestsAction({ id }));
  const { data, loadingFetchError } = store.getState().contest;
  return {
    props: {
      data,
      loadingFetchError,
    },
  };
};

const ContestById: FC<PageProps> = (props: PageProps) => {
  return (
    <div>
      <Head>
        <title>名前: {props.data.name}</title>
      </Head>
      <ContestDetail
        error={props.loadingFetchError}
        item={props.data}
      ></ContestDetail>
    </div>
  );
};
export default ContestById;
