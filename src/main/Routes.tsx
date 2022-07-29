import React from 'react';
import {Routes as AppRoutes, Route, Navigate} from 'react-router-dom';

import {Home, AccessInfo, AddInfo, EditInfo, SetSchedules, ViewSchedules} from '../pages';
import SessionProvider from '../hooks/sessionProvider';
import { AuthConsumer, AuthContext } from '../hooks/sessionProvider';
import { Component } from 'react';

interface ProtectedRouteProps{
  isAuthenticated: () => boolean;
  children: React.ReactNode;
}

const ProtectedRoute = ({isAuthenticated, children}: ProtectedRouteProps) => { //MODO DIFERENTE
  return (
    <>
      {isAuthenticated() ?
        {children}
      :
        <Navigate to={'/'} replace/>
      }
    </>
  )
}

const Routes = () => {

    const sectionProvider = new SessionProvider();
    
    return (
      <AppRoutes>
        <Route path='/view' element={<ViewSchedules />}/>
        <Route index element={<Home />}/>
          <Route path='/access-info' element={
            <ProtectedRoute isAuthenticated={sectionProvider.isAuthenticated}>
              <AccessInfo />
            </ProtectedRoute>
          }/>
          <Route path='/add-info' element={
            <ProtectedRoute isAuthenticated={sectionProvider.isAuthenticated}>
              <AddInfo />
            </ProtectedRoute>
          }/>
          <Route path='/edit-info' element={<EditInfo />}/>
          <Route path='/set-schedules' element={<SetSchedules />}/>
        
      </AppRoutes>
    );
  };
  
  export default Routes;