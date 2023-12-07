"use client";
import styled, { keyframes } from "styled-components";
import School from "../components/spec/school";
import Project from "../components/spec/project";
import Profile from "../components/spec/profile";
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
    transform: translateY(20px); // start from 20px below the final position
    opacity: 0; // start from fully transparent
  }
  to {
    transform: translateY(0); // end at the final position
    opacity: 1; // end at fully opaque
  }
`;

const Makeup = styled.div`
  animation: ${riseUpAnimation} 0.2s ease-out; // Apply the animation with a duration of 1s and an ease-out effect
`;
