import { useEffect, useState } from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import colors from "../config/colors";
import Hero from "../components/Hero";
import SocialMedia from "../components/SocialMedia";
import client from "../api/Contentful";

export default function Home() {
  async function fetchEntries() {
    const entries = await client.getEntries();
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
    <Layout>
      <Container>
        <Hero
          fullScreen={true}
          imageUrl="/images/hero-test.jpg"
          showIcon={true}
          text="Genuin enkelhet
          i ranchanda"
        />
        <div className="main">
          <h1 className="title">Gundla Gårdscafé</h1>

          <SocialMedia
            icons={[
              { url: "/icons/instagram-black.png", altText: "Instagram icon" },
            ]}
            text="Följ oss på Instagram!"
          />
        </div>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
        </footer>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;
      color: ${colors.primary};
      text-align: center;
    }
  }

  footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid ${colors.light};
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        margin-left: 0.5rem;
        height: 1em;
      }
    }
  }
`;
