import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #fff;
    --color-primary: #675D50;
    --color-primary-light: #A9907E;
    --color-secondary: #0C2FDF;
    --color-tertiary: #FFE182;
    --color-text: #FFF;
    --color-text2: #252525;
    --color-red: #B4423E; 
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  .main{
    height: 100vh;
    background-image: url(https://img.freepik.com/fotos-gratis/jovem-na-barbearia-aparando-cabelo_1303-26254.jpg?w=740&t=st=1681391546~exp=1681392146~hmac=cf9182c2cd5813af444d710a09b2a4891d274cb2bc5e159117e2660c0efcac0b);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
.main-content{
    background-color: rgba(0, 0, 0, 0.7);
    height:100vh;
    width:100vw;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
}
.section-main{
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

.principal{
    border: 4px solid #fff;
    width: 60vw;
    height:300px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
}

.button-whats{
    text-decoration: none;
    color: var(--color-text);
}

.low-container, .low-container-mid{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 33vw;
    
    &:hover{
        background-color: rgba(100, 100, 100, 0.9);
        width: 34vw;
        cursor: pointer;
        transition: 0.5s;
    }
}
.section-intro{
    height: 60vh;
    color: var(--color-text2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
  .section-intro > img{
    max-width: 30vw;
    object-fit:scale-down;
  }
  .intro-text{
    width:30vw;
    display: flex;
    flex-direction: column;
    justify-content:center;
    background-color: grey;
  }
  
  @media(max-width: 800px) {
    
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-light);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
    cursor: pointer;
  }
`;