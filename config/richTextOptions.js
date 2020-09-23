import { BLOCKS,MARKS } from "@contentful/rich-text-types";
const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      console.log(children[0].props);
      if (children[0].props !== undefined && children[0].props){
        return <p tabIndex="0">{children}</p>;
      }
        if (children[0].length > 0) {
          return <p tabIndex="0">{children}</p>;
        }
      return <p>{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => <h1 tabIndex="0">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 tabIndex="0">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 tabIndex="0">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 tabIndex="0">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 tabIndex="0">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 tabIndex="0">{children}</h6>,
 
  },

};

export default options