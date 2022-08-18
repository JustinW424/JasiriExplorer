import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "views/layout";
import Home from "views/pages/home";
import JasiriRightsNFT from "views/pages/transactions/JasiriRightsNFT";
import TokenizedAssets from "views/pages/transactions/TokenizedAssets";
import ScrollToTop from "./scrollToTop";

export default function Root() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tokenized_assets" element={<TokenizedAssets />} />
            <Route path="rights_nft" element={<JasiriRightsNFT />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
