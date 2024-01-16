import {useRequest} from '../../hooks/useRequest';
import Router from 'next/router';
import {useEffect} from 'react';

const Signout = () => {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/')
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <h1>Signout</h1>;
}

export default Signout;
