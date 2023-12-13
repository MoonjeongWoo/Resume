"use client";
import styled, { keyframes } from "styled-components";
import School from "../components/spec/school";
import Project from "../components/spec/project";
import Profile from "../components/spec/profile";
import useStateStore from "../zustand/statements";
const Aboutme = () => {
  return (
    <>
      <Makeup>
        <div className="m-5">
          <Profile></Profile>
        </div>
        <div className="m-5">
          <Project></Project>
        </div>
        <div className="m-5">
          <School></School>
        </div>
      </Makeup>
    </>
  );
};

export default Aboutme;
const riseUpAnimation = keyframes`
  from {
    transform: translateY(20px); 
    opacity: 0; 
  }
  to {
    transform: translateY(0);
    opacity: 1; 
  }
`;

const Makeup = styled.div`
  > div {
    opacity: 0;
    animation: ${riseUpAnimation} 0.3s ease-out forwards;
  }

  > div:nth-child(1) {
    animation-delay: 0.3s;
  }

  > div:nth-child(2) {
    animation-delay: 0.5s;
  }

  > div:nth-child(3) {
    animation-delay: 0.8s;
  }
`;
