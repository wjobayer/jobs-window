import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { Switch } from 'react-router';
import { Link, Route,useRouteMatch } from 'react-router-dom';
import AdminRoute from '../../Firebase/AdminRoute';
import PrivateRoute from '../../Firebase/PrivateRoute';
import useAuth from '../../Firebase/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import CheckOutAllOrder from '../CheckOutAllOrder/CheckOutAllOrder';
import CreateAdmin from '../CreateAdmin/CreateAdmin';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyCart from '../My Cart/MyCart';
import Reviews from '../Reviews/Reviews';
import './Dashboard.css'
import logo from '../../../images/WINDOW.png'
const Dashboard = () => {
    const{user,admin,logOut}=useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="secondary" variant="dark">
  <Container>
  <Navbar.Brand><Link to="/" className="nav-link text-light"><img width="55%" src={logo} alt="" /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to="/" className="nav-link">Home</Link>
    </Nav>
    {user?.email ?
                      
                      <Button onClick={logOut} className="text-danger ms-3 me-3" variant="light"> Logout</Button> :
                      <Nav.Link className="nav-link ms-3 text-light" as={Link} to="/signin"> Sign In</Nav.Link>}
    <Nav>
    
    <Navbar.Brand > <NavItem>   <Link  to="/"><img width="40px" className="rounded-circle" src={user.photoURL} alt="" /></Link> </NavItem> </Navbar.Brand>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           <Container>
           <div className="row my-3">
                <div className="col-2 bg-secondary position-fixed rounded-sidenav ms-0">
                <div className="">
                <Link className="nav-link text-light text-left " to={`${url}`}>HOME</Link>
                {
                    admin &&<Nav.Link>
                    <Link className="nav-link text-light " to={`${url}/checkoutallorder`}>CHECKOUT BOOKMARK</Link>
                    <Link className="nav-link text-light " to={`${url}/manageproducts`}>MANAGE POST</Link>
                    
                    <Link className="nav-link text-light " to={`${url}/createadmin`}>CREATE ADMIN</Link>
                    </Nav.Link>
                }
                <Link className="nav-link text-light " to={`${url}/addproduct`}>CREATE JOB POST</Link>
                <Link className="nav-link text-light " to={`${url}/mycart`}>BOOKMARK</Link>
                <Link className="nav-link text-light " to={`${url}/reviews`}>REVIEWS</Link>
                
                </div>
                </div>
                <div className="col-2"></div>
                <div className="col-10"> 
                <Switch>
                    <Route exact path={`${path}`}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute exact path={`${path}/checkoutallorder`}>
                       <CheckOutAllOrder></CheckOutAllOrder>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/createadmin`}>
                       <CreateAdmin></CreateAdmin>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageproducts`}>
                       <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <PrivateRoute exact path={`${path}/addproduct`}>
                       <AddProduct></AddProduct>
                    </PrivateRoute>
                    <PrivateRoute exact path={`${path}/mycart`}>
                        <MyCart></MyCart>
                    </PrivateRoute>
                    <Route exact path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                </Switch>
                </div>
            </div>
           </Container>
        </div>
    );
};

export default Dashboard;