import { NavLink, Form, useRouteLoaderData } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import NewsLetterSignup from './NewsletterSignup';

function MainNavigation() {

  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/events'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Events
            </NavLink>
          </li>
          {!token && <li>
            <NavLink
              to='/auth'
              className={({ isActive }) => isActive ? classes.active : undefined}
            >
              Authentication
            </NavLink>
          </li>}
          {token && <li>
            <Form action='/logout' method='POST'>
              <button>Logout</button>
            </Form>
          </li>}
          <li>
            <NavLink
              to='/newsletter'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsLetterSignup />
    </header>
  );
}

export default MainNavigation;
