
import React from "react";
import PropTypes from "prop-types";
import Layout from "../src/components/Layout";
import SummarySection from "../src/components/SummarySection";
import { getUsers }from "../src/api";

export default function Home({ users }) {
  return (
    <Layout> <SummarySection users={users}/> </Layout>
  )
}

export async function getStaticProps() {
  const users = await getUsers();
  return {
    props: {
      users
    },
    revalidate: 1
  };
}

Home.propTypes = {
  users: PropTypes.array.isRequired,
};
