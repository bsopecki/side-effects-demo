import React, { useState ,useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserStatus = localStorage.getItem('isLoggedIn')

    if(storedUserStatus === 'LOGGED_IN') {
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler = (email, password) => {
    localStorage.setItem('loggedIn', 'LOGGED_IN')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('loggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
