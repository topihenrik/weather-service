import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import citiesData from "../data/cities.json";
import CityCard from "./CityCard";

const HomePage = () => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "64px", height: "100vh", paddingBottom: "30%", boxSizing: "border-box" }}>
        <Typography variant="h5" sx={{ margin: "16px 0" }}>THE WEATHER SERVICE</Typography>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "16px" }}>
            {citiesData.map(city => {
                return(
                    <CityCard
                        key={crypto.randomUUID()}
                        name={city.name}
                    />
                );
            })}
        </Box>
    </Box>
);

export default HomePage;