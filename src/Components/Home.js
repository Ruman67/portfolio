// import React from 'react';
import styled from 'styled-components';

// Navbar component
const Navbar = () => {
    return (
        <Nav>
            {/* Navbar content */}
        </Nav>
    );
};

// HomePage component
const HomePage = () => {
    return (
        <Wrapper>
            <Navbar />
            <Container>
                <SkillsSection>
                    <h2>I am a Coder & Designer</h2>
                    {/* Add your animation or skills content here */}
                </SkillsSection>
                <PictureSection>
                    <img src="workflow.png" alt="Your" />
                </PictureSection>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* Style the wrapper as needed */
`;

const Nav = styled.nav`
    /* Style your navbar as needed */
`;

const Container = styled.div`
    display: flex;
    height: calc(100vh - /* navbar height */); /* Adjust based on your navbar height */
    width: 100%;
`;

const SkillsSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0; /* Adjust the background color as needed */
    /* Add additional styling as needed */
`;

const PictureSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0; /* Adjust the background color as needed */
    /* Add additional styling as needed */
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export default HomePage;
