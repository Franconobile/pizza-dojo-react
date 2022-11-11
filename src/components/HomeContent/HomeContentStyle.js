import styled from "styled-components";

export const HomeContentWrapper = styled.section`
width: 100%;
height: 100vh;
display: flex;
padding: 80px 40px;
justify-content: center;
flex-direction: column;
align-items: flex-start;

h1 {
  margin-bottom: 100px;
  color: #CA8C35;
  font-size: 50px;
  padding-left: 5%;
  font-family: 'Dancing Script', cursive;
}

.dojo-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px 45px;

}

.dojo-about {
  display: flex;
  width: 60%;
  max-width: 1300px;
  flex-direction: row;
  margin-right: 90px;
  padding: 60px;
  gap: 20px;
  color: white;
}

.dojo-about h2{
  font-size: 32px;
  font-family: 'Dancing Script', cursive;
}

.dojo-about p {
  font-size: 18px;
}

.pizzaLink {
  text-decoration: underline;
  color: #FF9C06;
  font-weight: bold;
}

.pizzaLink:hover {
  color: #D38309;
}

#pizzaHome {
  position: relative;
  bottom: 50px;
  width: 450px;
  height: 400px;
}

@media screen and (max-width:880px){
  #pizzaHome {
    display: none;
  } 

  h1 {
    margin-top: 50px;
  }

  .dojo-info {
    flex-direction: column-reverse;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  .dojo-about {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
}

`;