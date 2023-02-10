import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/heroes');
    }, 1000);
  }, []);

  return <h1>404 Not Found</h1>;
};

export default NotFoundPage;
