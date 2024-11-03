import { useLocation, useParams } from 'react-router-dom';

const withRouter = (Component) => {
  return (props) => {
    const location = useLocation();
    const params = useParams();
    return <Component {...props} location={location} params={params} />;
  };
};

export default withRouter;