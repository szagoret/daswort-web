import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import React from "react";

const ResponsiveContainer = ({children}) => (
    <>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </>
);

export default ResponsiveContainer;