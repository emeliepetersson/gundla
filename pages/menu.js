import styled from "styled-components";
import Hero from "../components/Hero";
import colors from "../config/colors";
import { fetchEntries } from "../pages/api/Contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Menu =(content)=> {
  let menyPage;
 
  content.page.map(i=>{
    menyPage = i;
  })
 
    return (
      
        <Container>
        
          <Hero imageUrl="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/> 
            <h1>{menyPage.title}</h1>
    
            <MenyCard>
            {menyPage.meny.content.map((c)=>{
              
              return (
                        documentToReactComponents(c)
                      )
            })}

            </MenyCard>

        </Container>

    )
  }
export default Menu

export const getStaticProps = async () => {
  const res = await fetchEntries("menySida");
 
  const content = await res.map((i)=>{
        
       return i.fields
     
  })

  return {

    props:{
      page:content,
    }
  };
  
}
  
 

  const Container = styled.div`
  min-height: 100vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  hr{
    width:100%;
    border:1px solid ${colors.black};
    background:${colors.black};
  }
  div{
    width:100%;
    padding:0px 36px;
  }
  `;

 const MenyCard= styled.div`
  min-height:100vh;


  `

  