// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');

  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    );
  }
});
