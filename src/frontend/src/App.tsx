import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from './store';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/components';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ParentalControls from './pages/ParentalControls';
import QuickGenerate from './pages/QuickGenerate';
import CustomStory from './pages/CustomStory';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<QuickGenerate />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/parental-controls" element={<ParentalControls />} />
            <Route path="/quick-generate" element={<QuickGenerate />} />
            <Route path="/custom-story" element={<CustomStory />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;