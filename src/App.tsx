/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import Explore from './pages/Explore';
import PackingList from './pages/PackingList';
import Gallery from './pages/Gallery';
import Hotel from './pages/Hotel';
import Mayschoss from './pages/Mayschoss';
import Hike from './pages/Hike';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reiseplan" element={<Itinerary />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="mayschoss" element={<Mayschoss />} />
          <Route path="wanderung" element={<Hike />} />
          <Route path="entdecken" element={<Explore />} />
          <Route path="packliste" element={<PackingList />} />
          <Route path="galerie" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
