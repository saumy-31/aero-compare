import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home } from '../pages/Home';
import { Results } from '../pages/Results';
import { FlightDetails } from '../pages/FlightDetails';
import { CompareFlights } from '../pages/CompareFlights';
import { SavedFlights } from '../pages/SavedFlights';
import { PriceAlerts } from '../pages/PriceAlerts';
import { FlightStatus } from '../pages/FlightStatus';
import { Destinations } from '../pages/Destinations';
import { TravelGuide } from '../pages/TravelGuide';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/results" element={<Results />} />
      <Route path="/flight/:id" element={<FlightDetails />} />
      <Route path="/compare" element={<CompareFlights />} />
      <Route path="/saved" element={<SavedFlights />} />
      <Route path="/alerts" element={<PriceAlerts />} />
      <Route path="/status" element={<FlightStatus />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/guide/:id" element={<TravelGuide />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};