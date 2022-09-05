import styled from "styled-components";


export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;

    .title {
       font-size:2em;
    }

    ul {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        font-size: 1.2em;

        li {
            cursor: pointer;
        }
    }



` 