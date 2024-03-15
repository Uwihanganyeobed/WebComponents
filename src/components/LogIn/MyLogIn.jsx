// import Autho from "../Authentication/Autho";
import "./login.css";
const MyLogIn = () => {
  return (
    <div className="form__login">
      <div className="form__login-header">
        <h3>Log in</h3>
      </div>
      <div className="form__login-webs">
        <button className="form__login-webs__google">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="29"
            viewBox="0 0 27 29"
            fill="none"
          >
            <g clipPath="url(#clip0_43_17)">
              <path
                d="M26.9871 14.7713C26.9871 13.5832 26.8953 12.7162 26.6965 11.8171H13.7689V17.1796H21.3571C21.2042 18.5123 20.378 20.5193 18.5421 21.8679L18.5164 22.0474L22.6038 25.3706L22.887 25.4003C25.4878 22.8795 26.9871 19.1706 26.9871 14.7713Z"
                fill="#4285F4"
              />
              <path
                d="M13.7689 28.9004C17.4865 28.9004 20.6074 27.6158 22.887 25.4002L18.5421 21.8679C17.3795 22.7188 15.8189 23.3129 13.7689 23.3129C10.1278 23.3129 7.03751 20.7922 5.93588 17.3081L5.77441 17.3225L1.52423 20.7745L1.46865 20.9366C3.73285 25.657 8.38371 28.9004 13.7689 28.9004Z"
                fill="#34A853"
              />
              <path
                d="M5.93589 17.3081C5.64521 16.409 5.47699 15.4456 5.47699 14.4502C5.47699 13.4547 5.64522 12.4914 5.92059 11.5923L5.91289 11.4008L1.60945 7.89331L1.46865 7.9636C0.535465 9.92243 0 12.1221 0 14.4502C0 16.7783 0.535465 18.9778 1.46865 20.9367L5.93589 17.3081Z"
                fill="#FBBC05"
              />
              <path
                d="M13.7689 5.58737C16.3544 5.58737 18.0984 6.75943 19.0929 7.7389L22.9788 3.75705C20.5922 1.42897 17.4865 0 13.7689 0C8.38371 0 3.73285 3.24324 1.46865 7.9636L5.92059 11.5923C7.03751 8.10816 10.1278 5.58737 13.7689 5.58737Z"
                fill="#EB4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_43_17">
                <rect width="27" height="29" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="form__login-webs__facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="27"
            viewBox="0 0 29 27"
            fill="none"
          >
            <path
              d="M29 13.5825C29 6.08114 22.5081 0 14.5 0C6.49192 0 0 6.08114 0 13.5825C0 20.3619 5.30247 25.9811 12.2344 27V17.5087H8.55273V13.5825H12.2344V10.5901C12.2344 7.18599 14.3992 5.30566 17.7113 5.30566C19.2977 5.30566 20.957 5.57095 20.957 5.57095V8.91352H19.1287C17.3274 8.91352 16.7656 9.96054 16.7656 11.0347V13.5825H20.7871L20.1442 17.5087H16.7656V27C23.6975 25.9811 29 20.362 29 13.5825Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="form__login-webs__github">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
          >
            <path
              d="M14.0001 0C6.26905 0 0 6.19708 0 13.8418C0 19.9575 4.01144 25.146 9.57414 26.9763C10.2738 27.1044 10.5307 26.676 10.5307 26.3104C10.5307 25.9803 10.5176 24.89 10.5117 23.7334C6.61686 24.5706 5.79502 22.1002 5.79502 22.1002C5.15813 20.5003 4.24047 20.0748 4.24047 20.0748C2.9703 19.2157 4.33628 19.2335 4.33628 19.2335C5.74208 19.331 6.48233 20.6598 6.48233 20.6598C7.73106 22.7759 9.75756 22.1641 10.5564 21.8104C10.6821 20.9159 11.0449 20.3051 11.4453 19.9595C8.33569 19.6096 5.0668 18.4227 5.0668 13.1189C5.0668 11.6077 5.61367 10.3728 6.50923 9.40349C6.36388 9.05485 5.8847 7.64711 6.64486 5.74041C6.64486 5.74041 7.82053 5.36842 10.496 7.15929C11.6127 6.85261 12.8103 6.69884 14.0001 6.69354C15.1899 6.69884 16.3885 6.85251 17.5073 7.15929C20.1795 5.36853 21.3535 5.74052 21.3535 5.74052C22.1155 7.647 21.6361 9.05496 21.4908 9.40349C22.3884 10.3728 22.9316 11.6077 22.9316 13.1189C22.9316 18.4353 19.6564 19.6059 16.5389 19.9486C17.0411 20.3781 17.4885 21.2205 17.4885 22.5119C17.4885 24.3639 17.4723 25.8545 17.4723 26.3104C17.4723 26.6788 17.7243 27.1104 18.434 26.9743C23.9936 25.1421 28 19.9555 28 13.8419C28 6.19708 21.7318 0 14.0001 0ZM5.24355 19.7179C5.2127 19.7867 5.10322 19.8074 5.00358 19.7601C4.90197 19.715 4.84498 19.6213 4.8778 19.5523C4.90798 19.4814 5.01769 19.4616 5.11897 19.5091C5.22069 19.5543 5.27866 19.6489 5.24355 19.7179ZM5.93217 20.3255C5.86545 20.3867 5.73486 20.3582 5.64627 20.2615C5.55472 20.1651 5.53755 20.036 5.60525 19.9739C5.67416 19.9127 5.8007 19.9413 5.89247 20.0378C5.98413 20.1355 6.00184 20.2636 5.93217 20.3255ZM6.40467 21.1028C6.31881 21.1617 6.17859 21.1064 6.09186 20.9834C6.00611 20.8603 6.00611 20.7127 6.09372 20.6535C6.18067 20.5944 6.31881 20.6476 6.40664 20.7698C6.49217 20.8949 6.49217 21.0425 6.40456 21.1029M7.20344 22.0031C7.12677 22.0868 6.96325 22.0643 6.84359 21.9501C6.7212 21.8385 6.68719 21.6802 6.76419 21.5965C6.84184 21.5126 7.00623 21.5362 7.12677 21.6495C7.24817 21.7609 7.28536 21.9204 7.20344 22.0031ZM8.23616 22.307C8.20225 22.4154 8.04475 22.4648 7.88627 22.4187C7.72789 22.3712 7.62431 22.2443 7.65625 22.1347C7.68917 22.0255 7.84733 21.9742 8.00702 22.0235C8.16517 22.0707 8.26908 22.1968 8.23616 22.3071M9.41128 22.4361C9.41522 22.5502 9.2808 22.6448 9.11433 22.647C8.94698 22.6506 8.81147 22.5583 8.80961 22.4458C8.80961 22.3307 8.94108 22.2369 9.10853 22.2341C9.275 22.2309 9.41128 22.3226 9.41128 22.4361ZM10.5657 22.3923C10.5856 22.5037 10.47 22.6181 10.3047 22.6486C10.1422 22.6779 9.99173 22.6091 9.97106 22.4987C9.95094 22.3845 10.0687 22.2701 10.2309 22.2406C10.3965 22.2121 10.5446 22.2791 10.5657 22.3923Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="form__login-or">
        <hr />
        <p>or</p>
        <hr />
      </div>
      <div className="form__login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {/* <svg
          className="password-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="20"
          viewBox="0 0 40 29"
          fill="none"
        >
          <path
            d="M20 8.7C18.5534 8.7 17.166 9.31107 16.1431 10.3988C15.1201 11.4865 14.5455 12.9617 14.5455 14.5C14.5455 16.0383 15.1201 17.5135 16.1431 18.6012C17.166 19.6889 18.5534 20.3 20 20.3C21.4466 20.3 22.834 19.6889 23.8569 18.6012C24.8799 17.5135 25.4545 16.0383 25.4545 14.5C25.4545 12.9617 24.8799 11.4865 23.8569 10.3988C22.834 9.31107 21.4466 8.7 20 8.7ZM20 24.1667C17.5889 24.1667 15.2766 23.1482 13.5718 21.3354C11.8669 19.5225 10.9091 17.0638 10.9091 14.5C10.9091 11.9362 11.8669 9.47749 13.5718 7.66463C15.2766 5.85178 17.5889 4.83333 20 4.83333C22.4111 4.83333 24.7234 5.85178 26.4282 7.66463C28.1331 9.47749 29.0909 11.9362 29.0909 14.5C29.0909 17.0638 28.1331 19.5225 26.4282 21.3354C24.7234 23.1482 22.4111 24.1667 20 24.1667ZM20 0C10.9091 0 3.14545 6.01267 0 14.5C3.14545 22.9873 10.9091 29 20 29C29.0909 29 36.8545 22.9873 40 14.5C36.8545 6.01267 29.0909 0 20 0Z"
            fill="#727589"
          />
        </svg> */}

        <button className="form__login-btn">Log in</button>
        <h4>Forgot password?</h4>
      </div>
      <div className="form__login-forgot">
        <p>Not a member yet? and get started now!</p>
        <a href="#">SignUp</a>
      </div>
    </div>
  );
};

export default MyLogIn;
