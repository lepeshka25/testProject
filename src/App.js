import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getInfoUsers} from "./store/auth/auth-actions";
import * as Layout from './app/Layout/index'
import * as Auth from './app/Auth'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state)
  console.log(data)

  React.useEffect(() => {
    dispatch(getInfoUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <React.Fragment>
      <Routes>
        <Route path={'/'} element={<Layout.Main/>}/>
        <Route path={'/profiles'} element={<Layout.Profiles/>}/>
        <Route path={'/auth/auth'} element={<Auth.Auth/>}/>
        <Route path={'/auth/register'} element={<Auth.Register/>}/>
        <Route path={'*'} element={<Navigate to={'/'}/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
