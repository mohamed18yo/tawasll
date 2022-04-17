import { InputController } from '../../../components/Form/InputContoller/InputController';
import { Typography, Button, Logo, Row, Img } from '../../../components/widget';
import { useFormik } from 'formik';
import { validationSchemaSignUp1 } from '../../../utils/validation/login';
import { LoginTypography, LoginWrapper } from '../login/style';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SignupAction } from '../../../redux/user/userAction';
import { Boundary } from '../../../components/Boundary/Boundary';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
    password_confirmation: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemaSignUp1,
    onSubmit: (values, e) => {
      dispatch(
        SignupAction(values, () => {
          navigate('/completeProfile');
        }),
      );
    },
  });
  const { isLoading,error} = useSelector(state => state.userDetailes)

  return (
    <LoginWrapper>
      <Img style={{margin:"1rem 0"}} src={'/logo@2x.png'}  alt={"logo"} />
      <LoginTypography>أهلا بك</LoginTypography>
      <form onSubmit={formik.handleSubmit}>
        <InputController
          name={'email'}
          type="email"
          errors={formik.errors?.email}
          touched={formik.touched?.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder={'البريد الإلكتروني'}
        />
        <InputController
          name={'password'}
          type="password"
          errors={formik.errors?.password}
          touched={formik.touched?.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder={'كلمة المرور '}
        />
        <InputController
          name={'password_confirmation'}
          type="password"
          errors={formik.errors?.password_confirmation}
          touched={formik.touched?.password_confirmation}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password_confirmation}
          placeholder={'تأكيد كلمة المرور '}
        />
        <Boundary error={error} isLoading={isLoading}>

          <Button center type="submit" style={{cursor:"pointer"}}>
            <Typography color="#FFFFFF">إنشاء حساب جديد</Typography>
          </Button>
          </Boundary>
      </form>
      <Row style={{ marginTop: '2rem' }}>
        <Typography color="#808080" > لديك حساب بالفعل ؟ &nbsp; </Typography>

        <Typography as={Link} to={'/auth/login'} color="#24AAE1" style={{ cursor: 'pointer' }}>
          تسجيل الدخول{' '}
        </Typography>
      </Row>
    </LoginWrapper>
  );
}

export default SignUp;
