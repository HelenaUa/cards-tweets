import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, StyledHeader, StyledNav, StyledLink, StyledMain } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';


export const Layout = () => {
    return (
        <Container>

            <StyledHeader>
                <StyledNav>
                    <StyledLink to="/" end>Home</StyledLink>
                    <StyledLink to="/tweets">Tweets</StyledLink>
                </StyledNav> 
            </StyledHeader>
            
            <StyledMain>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </StyledMain>

        </Container>
    )
};