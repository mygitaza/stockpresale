import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router';

const Privaterouter = ({children}) => {
    const {user} = useSelector((state)=> state.auth);
    const location = useLocation();
    if(user){
        return children;
    }
  return (
    <Navigate to='/' state={{from: location}} replace />
  )
}

export default Privaterouter