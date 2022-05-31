import {Routes as AppRoutes, Route} from 'react-router-dom';

import {Home, AccessInfo, AddInfo} from '../pages'

const Routes = () => {
    return (
      <AppRoutes>
        <Route index element={<Home />}/>
        <Route path='/access-info' element={<AccessInfo />}/>
        <Route path='/add-info' element={<AddInfo />}/>
      </AppRoutes>
    );
  };
  
  export default Routes;