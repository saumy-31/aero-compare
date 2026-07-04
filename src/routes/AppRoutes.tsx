import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Existing Pages
import { Home } from '../pages/Home';
import { Results } from '../pages/Results';
import { FlightDetails } from '../pages/FlightDetails';
import { CompareFlights } from '../pages/CompareFlights';
import { SavedFlights } from '../pages/SavedFlights';
import { FlightStatus } from '../pages/FlightStatus';
import { Destinations } from '../pages/Destinations';
import { TravelGuide } from '../pages/TravelGuide';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Blog } from '../pages/Blog';
import { BlogPost } from '../pages/BlogPost';

import { About } from '../pages/About';


// New Company Pages

import { Careers } from '../pages/Careers';
import { Press } from '../pages/Press';
import { Contact } from '../pages/Contact';

// Legal Pages
import { Terms } from '../pages/Terms';
import { Privacy } from '../pages/Privacy';
import { Cookies } from '../pages/Cookies';



      
   
      
     
  

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/results" element={<Results />} />
      <Route path="/flight/:id" element={<FlightDetails />} />
      <Route path="/compare" element={<CompareFlights />} />
      <Route path="/saved" element={<SavedFlights />} />
      <Route path="/status" element={<FlightStatus />} />

         {/* Legal Pages */}
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
     
     <Route path="/about" element={<About />} />
      
      {/* Destinations & Blog */}
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/guide/:id" element={<TravelGuide />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

    
      
      {/* Company Pages */}
      
      <Route path="/careers" element={<Careers />} />
      <Route path="/press" element={<Press />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};