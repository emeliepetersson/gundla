import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import client from "../api/Contentful";

const VisitInfo = () => {
  async function fetchEntries() {
    const entries = await client.getEntries({ content_type: "visitingInfo" });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  console.log(posts);

  return (
    <Container>
      <p>{posts[0].fields.adress}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

VisitInfo.propTypes = {};

export default VisitInfo;
