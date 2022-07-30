import React from 'react';
import {Routes as AppRoutes, Route, Navigate, Outlet} from 'react-router-dom';
import {Home, AccessInfo, AddInfo, EditInfo, SetSchedules, ViewSchedules} from '../pages';
import { errorMessage } from '../components/libs/Toastr';
import {useSessionProviderContext} from '../hooks/sessionProvider';

interface PrivateRouteProps {
  children?: React.FC;
}

const PrivateOutlet = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useSessionProviderContext(); //Auth context
  return isAuthenticated ? ( //Check if logged in
    <>
      {children} 
      <Outlet /> 
    </>
  ) : (
    <Navigate to="/" replace /> 
  );
};

const Routes = () => {

    return (
      <AppRoutes>
        <Route path='/view' element={<ViewSchedules />}/>
        <Route index element={<Home />}/>
        <Route path="/" element={<PrivateOutlet />}> 
          <Route path='/access-info' element={<AccessInfo />} /> 
          <Route path='/add-info' element={<AddInfo />} />
          <Route path='/edit-info' element={<EditInfo />} />
          <Route path='/set-schedules' element={<SetSchedules />} />
        </Route>
      </AppRoutes>
    );
  };
  
  export default Routes;