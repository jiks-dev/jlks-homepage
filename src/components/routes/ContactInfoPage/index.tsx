import React from "react";
import styled from "styled-components";

const ContactPage: React.FC = () => {
  return (
    <ContactPageWrapper>
      <ContactPageContainer></ContactPageContainer>
    </ContactPageWrapper>
  );
};

const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  background-color: #f6f7fb;
  box-sizing: border-box;
`;

const ContactPageContainer = styled.div``;

export default ContactPage;
