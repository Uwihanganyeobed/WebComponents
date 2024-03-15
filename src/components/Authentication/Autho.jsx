import "./auth.css";
const Autho = () => {
  return (
    <div className="auth__main">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="auth__main-elt">
        <h2>Authenticating User</h2>
        <p>Please wait...</p>
      </div>
    </div>
  );
};

export default Autho;
