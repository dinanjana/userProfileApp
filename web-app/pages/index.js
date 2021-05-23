
import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "../src/components/Layout";
import SummarySection from "../src/components/SummarySection";
import { getUsers }from "../src/api";

export default function Home({ data }) {
  const [users, setUsers] = useState(data);
  const reloadUsers = () => {
    getUsers().then(data => {
      setUsers(data)
    });
  }
  return (
    <Layout reload={reloadUsers}> <SummarySection users={users}/> </Layout>
  )
}

export async function getStaticProps() {
  const data = await getUsers();
  return {
    props: {
      data
    },
    revalidate: 1
  };
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
};
