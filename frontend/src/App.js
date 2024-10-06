
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PublishPage from './pages/PublishPage';
import DetailsPage from './pages/DetailsPage';
import Header from './components/Header'; // Only imported here
import Footer from './components/Footer'; // Only imported here

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* Rendered here */}
        <main className="flex-grow">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/publish" component={PublishPage} />
            <Route path="/details/:id" component={DetailsPage} />
          </Switch>
        </main>
        <Footer /> {/* Rendered here */}
      </div>
    </Router>
  );
}

export default App;
