//Компонент guest guard переводит незалогиненного пользователя к логину и оборачивается вокруг защищенных страниц.

import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

type GuestGuardProps = {
  children: React.ReactNode;
};


// Принимает `children` в качестве аргумента и проверяет аутентификацию пользователя.
// Если пользователь не аутентифицирован, перенаправляет на страницу '/'.
const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
  const { state } = useAuth();

  if (state.isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default GuestGuard;

{/* <GuestGuard>
  <PostReview />
</GuestGuard> */}