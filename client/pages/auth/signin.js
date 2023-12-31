import { useState } from 'react';
import { useRequest } from '../../hooks/useRequest';
import Router from 'next/router';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email, password
    },
    onSuccess: () => Router.push('/')
  });
  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div className="form-group">
        <label>EmailAddress</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
      </div>
      {errors}
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
  );
};

export default Signin;
