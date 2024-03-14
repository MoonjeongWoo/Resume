"use client";
import styled, { keyframes } from "styled-components";
import React, { useState } from "react";
import School from "../components/spec/school";
import Project from "../components/spec/project";
import Profile from "../components/spec/profile";
import useStateStore from "../zustand/statements";

type ComponentName = "Profile" | "Project" | "School";

const Aboutme = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentName | null>(null);

  const selectComponent = (component: ComponentName) => {
    setSelectedComponent((prevComponent) =>
      prevComponent === component ? null : component
    );
  };
  return (
    <>
      <Makeup>
        <div
          className={`m-5 ${selectedComponent === "Profile" ? "selected" : ""}`}
          onClick={() => selectComponent("Profile")}
        >
          {selectedComponent === null || selectedComponent === "Profile" ? (
            <Profile />
          ) : null}
        </div>
        <div
          className={`m-5 ${selectedComponent === "Project" ? "selected" : ""}`}
          onClick={() => selectComponent("Project")}
        >
          {selectedComponent === null || selectedComponent === "Project" ? (
            <Project />
          ) : null}
        </div>
        <div
          className={`m-5 ${selectedComponent === "School" ? "selected" : ""}`}
          onClick={() => selectComponent("School")}
        >
          {selectedComponent === null || selectedComponent === "School" ? (
            <School />
          ) : null}
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
