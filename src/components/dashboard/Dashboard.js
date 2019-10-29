import React from 'react';
import { Card } from 'pcln-design-system';
import styled from 'styled-components';
import SVG from 'react-inlinesvg/lib/index';
import motorcyle from './motorcycle.svg';
import pregnant from '../mothers/resources/Pregnant.svg';


const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 750px;
  overflow: hidden;

  .appCard {
    margin: 48px;
    height: 30%;
  }
  .systemCard {
    width: 30%;
    margin: 20px;
  }
  .cardContainer {
    width: 80%;
  }
`;

const Dashboard = props => {
  return (
    <>
      <MainContainer className="mainContainer">
        <div className="cardContainer">
          <Card
            className="appCard"
            boxShadowSize="xl"
            borderWidth={0}
            borderRadius={0}
            p={4}
            onClick={() => props.history.push('/mothers')}
          >
            <p>Mothers Dashboard Card</p>
            <SVG src  = {pregnant} />
          </Card>
          <Card
            className="appCard"
            boxShadowSize="xl"
            borderWidth={0}
            borderRadius={0}
            p={4}
            onClick={() => props.history.push('/drivers')}
          
          >
            <p>Drivers Card</p>
            <SVG src = {motorcyle} />
            <SVG src  = {pregnant} />

            
          </Card>
        </div>
        <Card
          className="systemCard"
          boxShadowSize="xl"
          borderWidth={0}
          borderRadius={0}
          p={4}
        >
          Driver Rankings
        </Card>
      </MainContainer>
    </>
  );
};

export default Dashboard;
