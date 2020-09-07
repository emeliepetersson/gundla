import styled from "styled-components";

import Layout from "../components/Layout";
import colors from "../config/colors";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Hero fullScreen={true} text="Genuin enkelhet i ranchanda" />
        <div className="main">
          <h1 className="title">Gundla Gårdscafé</h1>

          <p className="description">
            Get started by editing <code className="code">pages/index.js</code>
          </p>
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
  padding: 0 0.5rem;
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
    }

    .title,
    .description {
      text-align: center;
    }

    .description {
      line-height: 1.5;
      font-size: 1.5rem;

      .code {
        background: ${colors.white};
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }
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
