import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'))


export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path='/tweets' element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </div>
  );
};