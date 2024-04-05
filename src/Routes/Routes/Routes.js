import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import SignUp from '../../Pages/SignUp/SignUp';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashboardLayout from '../../Layout/DashboardLayout';
import MyAppointment from '../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import AdminRoutes from './AdminRoute/AdminRoutes';
import AddDoctor from '../../Pages/Dashboard/Dashboard/AddDoctor/AddDoctor';
import ManageDoctors from '../../Pages/Dashboard/ManageDoctors/ManageDoctors';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/appointment',
                element: (
                    <PrivateRoute>
                        <Appointment></Appointment>
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>
        ),
        children: [
            { path: '/dashboard', element: <MyAppointment></MyAppointment> },
            {
                path: '/dashboard/allusers',
                element: (
                    <AdminRoutes>
                        <AllUsers></AllUsers>
                    </AdminRoutes>
                ),
            },
            {
                path: '/dashboard/adddoctor',
                element: (
                    <AdminRoutes>
                        <AddDoctor></AddDoctor>
                    </AdminRoutes>
                ),
            },
            {
                path: '/dashboard/managedoctors',
                element: (
                    <AdminRoutes>
                        <ManageDoctors></ManageDoctors>
                    </AdminRoutes>
                ),
            },
        ],
    },
]);
