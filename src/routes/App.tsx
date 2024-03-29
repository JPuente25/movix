import { HashRouter, Routes, Route } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Details } from '../pages/Details';
import { Explore } from '../pages/Explore';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SearchResult } from '../pages/SearchResult';

function App() {
   return (
      <HashRouter>
            <Header />
            <Routes>
               <Route
                  path="/"
                  element={<Home />}
               />
               <Route
                  path="/details/:mediaType/:id"
                  element={<Details />}
               />
               <Route
                  path="/search/:query"
                  element={<SearchResult />}
               />
               <Route
                  path="/explore/:mediaType"
                  element={<Explore />}
               />
               <Route
                  path="*"
                  element={<NotFound type="page"/>}
               />
            </Routes>
            <Footer />
      </HashRouter>
   );
}

export default App;
