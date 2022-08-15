import "./App.css";
import styled from "styled-components";
import TopBar from "components/Topbar";
import TeamInfoPage from "components/routes/TeamInfoPage/TeamInfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  console.log("###@@@#");
  return (
    <Router>
      <AppContainer>
        <HeaderContainer>
          <TopBar />
        </HeaderContainer>
        <BodyContainer>
          <ContentContainer>
            <Routes>
              <Route path="/" element={<TeamInfoPage />}></Route>
            </Routes>
          </ContentContainer>
        </BodyContainer>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const HeaderContainer = styled.div`
  z-index: 99;
`;

const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  background-color: #80808078;
  height: 85%;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;
export default App;
