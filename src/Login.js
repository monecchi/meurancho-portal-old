import React from 'react';

import './login.scss'

import Logo from './assets/images/logo/meurancho-logo-red.min.svg';
import LogoSlogan from './assets/images/logo/meu-rancho-logo-slogan-red.svg';
import LogoIcon from './assets/images/logo/mr-logo-icon-circle.svg';
import LoginSvgImage from './assets/images/illustrations/mr-pizzaiolo-chef-light.svg';

export const fakeAuth = {
  isAuthenticated: false
}

const PageLogin = () => {
  return (
    <>
      <div className="d-flex flex-column flex-root w-100">
        {/* Login */}
        <div className="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white login-signin-on" id="kt_login">
          {/* Aside */}
          <div className="login-aside d-flex flex-column flex-row-auto" style={{ backgroundColor: '#f3f6f9' }}>

            {/*Aside - Logo Intro*/}
            <div className="logo-intro d-flex flex-column-auto flex-column pt-lg-6 pt-sm-4 pb-sm-4">
              {/*Aside header*/}
              <a href="/" onClick={(e) => { e.preventDefault(); }} className="text-center mb-5">
                <img src={LogoSlogan} alt="Meu Rancho Pizzaria" className="logo" style={{ height: "65px" }} />
              </a>
              {/*Aside title*/}
              <h3 className="font-weight-bolder text-center h3 font-size-h1-lg text-primary d-none">Meu Rancho Pizzaria</h3>
              <span className="text-center text-md text-muted">Portal do Restaurante</span>
            </div>
            {/*End Aside - Logo Intro*/}

            {/* Aside Bottom */}
            <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style={{ backgroundImage: `url(${LoginSvgImage})` }} />
            {/* End Aside Bottom */}
          </div>
          {/* Aside */}
          {/* Content */}
          <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden mx-auto">
            {/* Content body */}
            <div className="d-flex flex-column-fluid flex-center">
              {/* Signin */}
              <div className="login-form login-signin py-6">
                {/* Form */}
                <form className="form" noValidate="novalidate" id="mr_login_signin_form">

                  {/*From Title*/}
                  <div className="pb-5 pt-lg-0 pt-5">
                    <h3 className="font-weight-bolder text-dark h3 font-size-h1-lg">Bem Vindo</h3>
                    <span className="text-muted font-weight-bold font-size-h4">Novo aqui?
                    <a href="/" onClick={(e) => { e.preventDefault(); }} id="mr_login_signup" className="text-primary font-weight-bolder">{" "}Criar conta</a></span>
                  </div>
                  {/*End Form Title*/}

                  {/*Form group email*/}
                  <div className="form-group fv-plugins-icon-container">
                    <label className="h6 font-weight-bolder text-dark">Email</label>
                    <input className="form-control form-control-solid rounded-sm" type="text" name="username" autoComplete="off" />
                    <div className="fv-plugins-message-container" />
                  </div>
                  {/*End Form group email*/}

                  {/*Form group pass*/}
                  <div className="form-group fv-plugins-icon-container">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="password" className="h6 font-weight-bolder text-dark pt-4">Senha</label>
                      <a href="/" onClick={(e) => { e.preventDefault(); }} className="text-primary h6 font-weight-bolder text-hover-primary pt-4" id="mr_login_forgot">Esqueceu a senha?</a>
                    </div>
                    <input className="form-control form-control-solid rounded-sm" type="password" name="password" autoComplete="off" />
                    <div className="fv-plugins-message-container" />
                  </div>
                  {/*End Form group pass*/}

                  {/* Action */}
                  <div className="pb-lg-0 pb-5">
                    <button type="button" id="mr_login_signin_submit" className="btn btn-soft-primary font-weight-bolder h6 my-3 mr-3">Entrar</button>
                    <button type="button" className="btn btn-soft-info font-weight-bolder my-3 font-size-lg">
                      <span className="btn-inner--icon google-svg-icon mr-3">
                        {/* Google Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/social-icons/google.svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                          <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4" />
                          <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853" />
                          <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05" />
                          <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335" />
                        </svg>
                        {/* End Google Svg Icon */}
                      </span>
                      <span className="btn-inner--text">Entrar com Google</span>
                    </button>
                  </div>
                  {/*end::Action*/}
                  <input type="hidden" /><div /></form>
                {/*end::Form*/}
              </div>
              {/*end::Signin*/}
              {/*begin::Signup*/}
              <div className="login-form login-signup" style={{display: "none"}}>
                {/*begin::Form*/}
                <form className="form fv-plugins-bootstrap fv-plugins-framework" noValidate="novalidate" id="kt_login_signup_form">
                  {/*begin::Title*/}
                  <div className="pb-13 pt-lg-0 pt-5">
                    <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Sign Up</h3>
                    <p className="text-muted font-weight-bold font-size-h4">Enter your details to create your account</p>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Form group*/}
                  <div className="form-group fv-plugins-icon-container">
                    <input className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6" type="text" placeholder="Fullname" name="fullname" autoComplete="off" />
                    <div className="fv-plugins-message-container" /></div>
                  {/*end::Form group*/}
                  {/*begin::Form group*/}
                  <div className="form-group fv-plugins-icon-container">
                    <input className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autoComplete="off" />
                    <div className="fv-plugins-message-container" /></div>
                  {/*end::Form group*/}
                  {/*begin::Form group*/}
                  <div className="form-group fv-plugins-icon-container">
                    <input className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6" type="password" placeholder="Password" name="password" autoComplete="off" />
                    <div className="fv-plugins-message-container" /></div>
                  {/*end::Form group*/}
                  {/*begin::Form group*/}
                  <div className="form-group fv-plugins-icon-container">
                    <input className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6" type="password" placeholder="Confirm password" name="cpassword" autoComplete="off" />
                    <div className="fv-plugins-message-container" /></div>
                  {/*end::Form group*/}
                  {/*begin::Form group*/}
                  <div className="form-group d-flex align-items-center fv-plugins-icon-container">
                    <label className="checkbox mb-0">
                      <input type="checkbox" name="agree" />
                      <span />
                    </label>
                    <div className="pl-2">I Agree the
                <a href="/" onClick={(e) => { e.preventDefault(); }} className="ml-1">terms and conditions</a></div>
                    <div className="fv-plugins-message-container" /></div>
                  {/*end::Form group*/}
                  {/*begin::Form group*/}
                  <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                    <button type="button" id="kt_login_signup_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit</button>
                    <button type="button" id="kt_login_signup_cancel" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel</button>
                  </div>
                  {/*end::Form group*/}
                  <div /></form>
                {/*end::Form*/}
              </div>
              {/*end::Signup*/}
              {/*begin::Forgot*/}
              <div className="login-form login-forgot">
                {/*begin::Form*/}
                <form className="form fv-plugins-bootstrap fv-plugins-framework" noValidate="novalidate" id="kt_login_forgot_form">
                  {/*begin::Title*/}
                  <div className="pb-13 pt-lg-0 pt-5">
                    <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Forgotten Password ?</h3>
                    <p className="text-muted font-weight-bold font-size-h4">Enter your email to reset your password</p>
                  </div>
                  {/*end::Title*/}
                  {/*begin::Form group*/}
                  <div className="form-group fv-plugins-icon-container">
                    <input className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autoComplete="off" />
                    <div className="fv-plugins-message-container" /></div>
                  {/*end::Form group*/}
                  {/*begin::Form group*/}
                  <div className="form-group d-flex flex-wrap pb-lg-0">
                    <button type="button" id="kt_login_forgot_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit</button>
                    <button type="button" id="kt_login_forgot_cancel" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel</button>
                  </div>
                  {/*end::Form group*/}
                  <div /></form>
                {/*end::Form*/}
              </div>
              {/*end::Forgot*/}
            </div>
            {/*end::Content body*/}
            {/*begin::Content footer*/}
            <div className="nav justify-content-lg-start justify-content-center align-items-end py-5 py-lg-4">
              <li className="nav-item">
                <a href="/" onClick={(e) => { e.preventDefault(); }} className="nav-link text-primary font-weight-bolder font-size-h5">Terms</a>
              </li>
              <li className="nav-item">
                <a href="/" onClick={(e) => { e.preventDefault(); }} className="nav-link text-primary font-weight-bolder font-size-h5">Ajuda</a>
              </li>
              <li className="nav-item">
                <a href="/" onClick={(e) => { e.preventDefault(); }} className="nav-link text-primary font-weight-bolder font-size-h5">Contato</a>
              </li>
            </div>
            {/*end::Content footer*/}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Login*/}
      </div>
    </>
  )
}

export default PageLogin;
