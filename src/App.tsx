import React from 'react';

// Providers & Layout
import { AppProviders } from './context/AppProviders';
import { MainLayout } from './components/layout/MainLayout';

// Routes
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <AppProviders>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </AppProviders>
  );
}

export default App;