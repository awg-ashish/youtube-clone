import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { VideoDetail } from "./VideoDetail";
import { ChannelDetail } from "./ChannelDetail";
import { SearchFeed } from "./SearchFeed";
import { Feed } from "./Feed";

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
            Navbar
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App;
