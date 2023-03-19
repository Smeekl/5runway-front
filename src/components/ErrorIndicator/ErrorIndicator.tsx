import './style.css';

const ErrorIndicator = () => (
  <div className="error-indicator-wrapper">
    <div className="error-indicator">
      <span className="error-indicator__title">CRASH!</span>
      <span className="error-indicator__description">
        Something has gone terribly wrong (but we already sent helicopters to
        fix it)
      </span>
      <span className="error-indicator__description">
        Please <b>reload</b> the page and try again
      </span>
    </div>
  </div>
);

export default ErrorIndicator;
