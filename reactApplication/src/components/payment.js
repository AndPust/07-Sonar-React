import PropTypes from 'prop-types';
import "../styles/payment.css";

const Payment = ({
                values,
                handleFirstNameInputChange,
                handleLastNameInputChange,
                handleEmailInputChange,
                submitted,
                handleSubmit,
                valid
}) => {
  return (
    <div className="form-container">
          <form className="register-form">

            {valid && <div className="success-message">Success! Thank you for buying!</div>}
            <input
              id="first-name"
              className="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleFirstNameInputChange}
            />

            {submitted && !values.firstName && <span id="first-name-error">Please enter a first name</span>}
            <input
              id="last-name"
              className="form-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleLastNameInputChange}
            />

            {submitted && !values.lastName && <span id="last-name-error">Please enter a last name</span>}
            <input
              id="email"
              className="form-field"
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleEmailInputChange}
            />

            {submitted && !values.email && <span id="email-error">Please enter an email address</span>}
            <button className="form-field" onClick={handleSubmit}>
              Continue
            </button>
          </form>
        </div>
  );
};

Payment.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  handleFirstNameInputChange: PropTypes.func.isRequired,
  handleLastNameInputChange: PropTypes.func.isRequired,
  handleEmailInputChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};

export default Payment;
