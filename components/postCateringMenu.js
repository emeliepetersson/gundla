import styled from "styled-components";
import colors from "../config/colors";
import device from "../config/device";
import options from "../config/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const PostCateringMenu = ({ menuData }) => {
  function compare(a, b) {
    let comparison = 0;
    if (a.order > b.order) {
      comparison = 1;
    } else if (a.order < b.order) {
      comparison = -1;
    }
    return comparison;
  }
  const sortedArray = [...menuData].sort(compare);

  return (
    <Container>
      {sortedArray &&
        sortedArray.map((menu, index) => {
          return (
            <div
              className="catering-menu-container"
              style={
                index % 2 === 0
                  ? { backgroundColor: colors.greenBackground }
                  : { backgroundColor: colors.white }
              }
              key={index}
            >
              <div className="catering-menu">
                <div>
                  <h2 tabIndex="0">{menu.titleCateringMenu}</h2>
                  {documentToReactComponents(menu.textCateringMenu, options)}
                </div>
              </div>
              <div className="catering-div-border"></div>
              <div className="catering-menu-price">
                <h3 tabIndex="0">{menu.titlePriceCateringMenu}</h3>
                <p tabIndex="0">{menu.textPriceCateringMenu}</p>
              </div>
            </div>
          );
        })}
    </Container>
  );
};

export default PostCateringMenu;

const Container = styled.div`
  width: 100%;

  .catering-menu-container {
    width: 100%;
    padding: 48px 37px 64px;
    display: flex;
    flex-direction: column;
    min-height: 398px;

    .catering-menu {
      h2 {
        margin-bottom: 16px;
      }
      ul {
        margin: 0px;
        padding: 0px;
        li {
          margin-bottom: 16px;
        }
      }
    }

    .catering-menu-price {
      margin-top: 32px;
      h3 {
        text-align: center;
        margin-bottom: 8px;
      }
      p {
        text-align: center;
      }
    }
  }

  @media ${device.laptop} {
    .catering-menu-container {
      width: 100%;
      padding: 0px 0px 0px;
      display: flex;
      flex-direction: row;
      min-height: 600px;

      .catering-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        h2 {
          margin-bottom: 16px;
        }
        ul {
          margin: 0px;
          padding: 0px;
          li {
            margin-bottom: 16px;
          }
        }
      }

      .catering-div-border {
        margin: auto 0px;
        height: 416px;
        width: 1px;
        background: #4b4b4b;
      }

      .catering-menu-price {
        width: 50%;
        margin-top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3 {
          text-align: center;
          margin-bottom: 8px;
        }
        p {
          text-align: center;
        }
      }
    }
  }
`;
