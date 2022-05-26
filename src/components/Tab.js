import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import "../styles/styles.css";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#1E193B",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 60,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "700",
    fontSize: "16px",
    fontFamily: "Inter",
    fontStyle: "normal",
    marginRight: theme.spacing(1),
    // "&.Mui-selected": {
    //   color: "#8F00FF",
    // },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

function HeroesLandTab({ listTabs }) {
  const [value, setValue] = useState("Idea");

  const handleChange = (event, newValue) => {
    console.log(
      "🚀 ~ file: Tab.js ~ line 58 ~ handleChange ~ newValue",
      newValue
    );
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: "0.5px solid rgba(255, 34, 233, 0.5);" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
          {listTabs?.map((tab, index) => (
            <StyledTab
              sx={{ cursor: "pointer", color: "#ffffff" }}
              key={index}
              label={tab.label}
              value={tab.index}
            />
          ))}
        </StyledTabs>
      </Box>
      {listTabs?.map((tab, index) => (
        <TabPanel key={index} value={value} index={tab.index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
}

export default HeroesLandTab;
