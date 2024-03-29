import { Form, Link, useActionData, useSearchParams, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {

    const navigation = useNavigation()

    const isSubmitting = navigation.state === 'submitting';

    const data = useActionData()


    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';

    return (
        <>
            <Form method="post" className={classes.form}>
                <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
                {data && data.errors && <ul>
                    {Object.values(data.errors).map(e => <li key={e}>{e}</li>)}
                    </ul>}
                    {data && data.message && <p>{data.message}</p>}
                <p>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" name="password" required />
                </p>
                <div className={classes.actions}>
                    <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
                        {isLogin ? 'Create new user' : 'Log in'}
                    </Link>
                    <button>{isSubmitting ? 'Submitting' : 'Save'}</button>
                </div>
            </Form>
        </>
    );
};

export default AuthForm;

