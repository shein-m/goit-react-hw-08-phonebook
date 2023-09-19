import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      Sorry, page not found <br />
      <button type="button" onClick={() => navigate('login')}>
        Return
      </button>
    </div>
  );
};

export default NotFound;
