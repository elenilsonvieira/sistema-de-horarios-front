import React from 'react';
import {Routes as AppRoutes, Route, Navigate, Outlet} from 'react-router-dom';
import {Home, AccessInfo, AddInfo, EditInfo, SetSchedules, ViewSchedules} from '../pages';
import { errorMessage } from '../components/libs/Toastr';
import {useSessionProviderContext} from '../hooks/sessionProvider';

interface PrivateRouteProps {
  children?: React.FC;
}

const PrivateOutlet = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useSessionProviderContext(); 
  return isAuthenticated ? (
    <>
      {children} 
      <Outlet /> 
    </>
  ) : (
    <>
      {errorMessage('Você não tem permissão de acesso.')}
      <Navigate to="/" replace /> 
    </>
  );
};

const Routes = () => {

    return (
      <AppRoutes>
        <Route index element={<Home />}/>
        <Route path='/view' element={<ViewSchedules />}/>
        <Route path="/" element={<PrivateOutlet />}> 
          <Route path='/access-info' element={<AccessInfo />} /> 
          <Route path='/add-info' element={<AddInfo />} />
          <Route path='/set-schedules' element={<SetSchedules />} />
          <Route path='/edit-info' element={<EditInfo />} />
        </Route>
        <Route path='/*' element={<Home />}/>
      </AppRoutes>
    );
  };
  
  export default Routes;