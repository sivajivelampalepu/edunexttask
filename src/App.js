import './App.css';
import './mystyle.css'
import './datatable.css'
import './dashboard.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Container/Header';
import Footer from './Container/Footer';
import React from 'react';
const UsersList = React.lazy(() => import('./Components/TaskOne/UsersList'))
const PostsList = React.lazy(() => import('./Components/TaskOne/PostList'))
const AnalyticsDashboard = React.lazy(() => import('./Components/AnalyticsDashboard'))
const ProductsTable = React.lazy(() => import('./Components/TaskOne/ProductsTable'))
const ModernDashboard = React.lazy(() => import('./Components/Dashboard/ModernDashboard'))

function App() {
  return (
    <div className="App">
      <Header/>
    
        <Routes>
          <Route path="/" element={<UsersList/>}/>
 <Route path="userlist" element={<UsersList/>}/>
 <Route path="postlist" element={<PostsList/>}/>
  <Route path="productlist" element={<ProductsTable/>}/>
  <Route path="analyticdashboard" element={<AnalyticsDashboard/>}/>
  <Route path="dashboard" element={<ModernDashboard/>}/>
        </Routes>
        <Footer/>
  
     
    </div>
  );
}

export default App;
