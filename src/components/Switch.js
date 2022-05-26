import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";

export const Switchs = ({ iconStart, iconCheck }) => {
  return (
    <Switch
      sx={{
        width: "70px",
        height: "18px",
        background: "#151B32",
        border: "1px solid #FF22E9",
        borderRadius: "20px",
        // marginBottom: "10px",
        position: "relative",
      }}
      checkedIcon={
        <IconButton
          sx={{
            background:
              "linear-gradient(136.74deg, #FF22E9 14.1%, #8F00FF 85.9%);",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            right: -29,
            top: 0.5,
          }}
        >
          {iconCheck}
        </IconButton>
      }
      inputProps={{ width: "80px" }}
      icon={
        <IconButton
          sx={{
            background:
              "linear-gradient(136.74deg, #FF22E9 14.1%, #8F00FF 85.9%);",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            left: 0,
            top: 0.2,
          }}
        >
          {iconStart}
        </IconButton>
      }
    />
  );
};
