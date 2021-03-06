import React, {useEffect} from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {loginUser, errorClean} from '../../actions/authActions';
import Logo from './WhatsApp Image 2019-10-20 at 5.31 1.svg'
import SVG from 'react-inlinesvg/lib/index';
import {Container} from './auth-style'
import {Button} from 'pcln-design-system'
import Map from "./Map";
import Errors from "../reusableParts/Errors";


const LoginForm = (props) => {

    useEffect(() => {
        props.errorClean();
    }, [props.values])
    


    return (
        <>
            <Container className="container">
                <div className="map">
                    <Map/>
                </div>
                <div className="form-container">
                    <SVG className="svg-logo" src={Logo}/>
                    <Form className="form-contents">
                        <h1>Login</h1>
                        <Errors errMsg = {props.error} />
                        <label>Username
                            <Field className="form-inputs" type="text" name="username"/>
                            {props.touched.username && props.errors.username && (
                                <p className="error-message">{props.errors.username}</p>
                            )}
                        </label>
                        <label>Password
                            <Field className="form-inputs" type="password" name="password"/>
                            {props.touched.password && props.errors.password && (
                                <p className="error-message">{props.errors.password}</p>
                            )}
                        </label>
                        <div className="btn-container">
                            <Button className="submit-btn" color="primary" type="submit">Submit</Button>
                        </div>
                    </Form>
                    <div>
                       <h4 style={{color: 'red'}}>For Demo Purposes:</h4>  
                        <p>Username: admin</p>
                        <p>Password: password</p>
                        <a href="https://github.com/Prouty89/safe-mothers-fe" target="_blank" style={{color: '#3D689E', fontWeight: '700'}}>Codebase</a>
                    </div>
                </div>
            </Container>
        </>
    );
};


const FormikLoginForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    }),

    handleSubmit(values, {props}) {
        props.loginUser(values, props.history);
    }
})(LoginForm);

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        error: state.authReducer.error
    };
};


export default connect(
    mapStateToProps,
    {loginUser, errorClean}
)(FormikLoginForm);
