import React from 'react';
// STYLES
import { Container, NavAside } from './styles';
// COMPONENTs
import Header from '../../components/Header'
import Notes from '../../components/Notes'

const Home = () => {
  return (
    <Container>
      <Header />

      <NavAside>
        <aside>
          <li className="actived">develop-study</li>
        </aside>

        <Notes />
      </NavAside>
    </Container>
  );
}

export default Home;
