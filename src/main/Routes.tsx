import {Routes as AppRoutes, Route} from 'react-router-dom';

import {Home, AccessInfo, AddInfo, EditInfo, SetSchedules} from '../pages'

const Routes = () => {
    return (
      <AppRoutes>
        <Route index element={<Home />}/>
        <Route path='/access-info' element={<AccessInfo />}/>
        <Route path='/add-info' element={<AddInfo />}/>
        <Route path='/edit-info' element={<EditInfo />}/>
        <Route path='/set-schedules' element={<SetSchedules />}/>
      </AppRoutes>
    );
  };
  
  export default Routes;