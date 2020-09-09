import styled from "styled-components";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// temp img url 

const Menu =()=> {
    
    return (
      
        <Container>
        
          <Hero imageUrl="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/> 
          <MenuContainer>
            <MenuInfo>
           
              
            </MenuInfo>
            <hr></hr>
            <Food>

            </Food>
          </MenuContainer>

        </Container>

    )
  }
export default Menu

export const getStaticProps = async () => {
  const res = await fetchEntries("menySida");
  const page = await res.map((i)=>{
    return i.fields
  });
  return {
    props:{
      page,
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
    padding:48px 36px;
  }
  `;

 const MenuContainer = styled.div`
  min-height:100vh;

  `
const MenuInfo = styled.div`
  
  `
const Food = styled.div`
  
  `