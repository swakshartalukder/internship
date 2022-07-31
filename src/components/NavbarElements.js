import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
background-color: rgb(3, 3, 51);
height: 10px;
display: flex;
justify-content: space-between;
padding: 10px;
`

export const NavLink = styled(Link)`
color: cornflowerblue;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
padding: 20px;

&.active {
    color: gold;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-left: 800px;
padding: 10px;
margin-top: 50px;
word-spacing: normal;
background-color: rgb(3, 3, 51);

@media screen and (max-width: 768px){
    display: none;
}
`