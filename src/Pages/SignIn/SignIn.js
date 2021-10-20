import { getAuth,signInWithEmailAndPassword  } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const SignIn = () => {
    const {singinUsingGoogle} = useAuth();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home'
    const handleGoogleLogIn = ()=>{
        singinUsingGoogle()
        .then(result=>{
            history.push(redirect)
        });
    }
    const handleEmailChange = e => {
      setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }
    const handleSignIn = e => {
      e.preventDefault();
      if (password.length < 6) {
        setError('Password Must be at least 6 characters long.')
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
      .then((result)=>{
        const user = result.user
        console.log(user);
      })
      .catch((error) => {
          setError('Error! Email-already-in-use');
        });
      
    }
    return (
        <div>
            <Header></Header>
            <h1 className='text-center'>Sign In</h1>
            

            <Form className='w-25 mx-auto' onSubmit={handleSignIn}>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
  </Form.Group>
  <div className='row my-3 text-danger'>{error}</div>
  <Button className='btn btn-warning' variant="primary" type="submit">
    Sign In
  </Button>
  <br /> <br />
  <p className='text-center'>New User? <Link style={{color:'blue', textDecoration:'none'}} to='/signup'>Sign In</Link> </p>
</Form>

<br />
<div className='d-flex justify-content-center'>
    <button className='btn btn-warning' onClick={handleGoogleLogIn}>Google sign in</button>
</div>

            <Footer></Footer>
        </div>
    );
};

export default SignIn;