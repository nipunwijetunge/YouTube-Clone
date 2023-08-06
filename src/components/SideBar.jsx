import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { useState } from "react";

//const selectedCategory = "New";

const SideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      side bar
      {categories.map((category) => {
        return (
          <button
            type="button"
            key={category.name}
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#FC1503",
              color: "white",
            }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
