import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Ordernar } from '../components/Carrito/Ordenar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Ordernar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
