import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const CityCard = ({ name }) => {
    return(
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>{name}</Typography>
            <Button variant="contained" component={Link} to={`/city/${name}`}>
                Check weather
            </Button>
        </Box>
    );
};

export default CityCard;