import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
    hasError: firstNameHasError
  } = useInput(value => value.trim() !== '');
  
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
    hasError: lastNameHasError
  } = useInput(value => value.trim() !== '');
  
  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    hasError: emailHasError
  } = useInput(value => value.trim() !== '' && value.includes('@'));


  const formSubmitHandler = (event) => {
      event.preventDefault();
      console.log('form submited!');
      console.log('first name is: ', firstNameValue);
      console.log('last name is: ', lastNameValue);
      console.log('email is: ', emailValue);
  
      resetFirstName();
      resetLastName();
      resetEmail();
    }

    
  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            onChange={firstNameChangeHandler}
            value={firstNameValue}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">You need to type something here mate!</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={lastNameChangeHandler}
            value={lastNameValue}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">You need to type something heres mate!</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          value={emailValue}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">You need to type an email here mate!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;



// const {
  //   value: enteredFirstName,
  //   valueChangeHandler: firstNameChangeHandler,
  //   onBlurHandler: onBlurFirstNameHandler,
  //   resetValue: resetFirstName,
  //   hasError: firstNameHasError,
  //   isValid: firstNameIsValid,
  // } = useBasic(value => value.trim() !== '');

  // const {
  //   value: enteredLastName,
  //   valueChangeHandler: lastNameChangeHandler,
  //   onBlurHandler: onBlurLastNameHandler,
  //   resetValue: resetLastName,
  //   hasError: lastNameHasError,
  //   isValid: lastNameIsValid,
  // } = useBasic(value => value.trim() !== '');

  // const {
  //   value: enteredEmail,
  //   valueChangeHandler: emailChangeHandler,
  //   onBlurHandler: onBlurEmailHandler,
  //   resetValue: resetEmail,
  //   hasError: emailHasError,
  //   isValid: emailIsValid,
  // } = useBasic(value => value.trim() !== '' && value.includes('@'));


  // const formSubmitHandler = (event) => {
  //   event.preventDefault();
  //   console.log('form submited!');
  //   console.log('first name is: ', enteredFirstName);
  //   console.log('last name is: ', enteredFirstName);
  //   console.log('email is: ', enteredEmail);

  //   resetFirstName();
  //   resetLastName();
  //   resetEmail();
  // }

  // const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  // const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  // const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  // let formIsValid = false;
  // if (firstNameIsValid && lastNameIsValid && emailIsValid) {
  //   formIsValid = true;
  // }