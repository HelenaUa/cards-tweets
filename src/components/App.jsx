import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {

  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path='/tweets' element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
          
          {/* <Route path='/movies/:movieId' element={<MovieDetails />} >
            <Route path='/movies/:movieId/cast' element={<Cast />} />
            <Route path='/movies/:movieId/reviews' element={<Reviews />} />
          </Route> */}
        
        </Route>
      </Routes>
    
    </div>
  );
};


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
