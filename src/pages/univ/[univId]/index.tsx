// eslint-disable-next-line no-use-before-define
import React, { FC } from "react";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Head from "next/head";
import UnivDetail from "~/components/templates/UnivDetail";
import { actions } from "~/features/univ/univSlice";
import store from "~/features/store";
import UnivsEntity from "~/entities/UnivsEntity";

type PageProps = {
  data: UnivsEntity;
  loadingFetchError: boolean;
};

// SSR
export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
): Promise<GetServerSidePropsResult<PageProps>> => {
  const id = context.params.univId as string;
  await store.dispatch(actions.fetchUnivAction({ id }));
  const { data, loadingFetchError } = store.getState().univ;
  return {
    props: {
      data,
      loadingFetchError,
    },
  };
};

const UnivById: FC<PageProps> = (props: PageProps) => {
  return (
    <div>
      <Head>
        <title>名前: {props.data.name}</title>
      </Head>
      <UnivDetail
        error={props.loadingFetchError}
        item={props.data}
      ></UnivDetail>
    </div>
  );
};
export default UnivById;
