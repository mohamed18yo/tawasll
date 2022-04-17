import { InputController } from '../../../components/Form/InputContoller/InputController';
import { Img } from '../../../components/widget/Image';
import { Typography, Button, Logo } from '../../../components/widget';
import { useFormik } from 'formik';
import { validationSchema } from '../../../utils/validation/login';
import { useState } from 'react';
import Modal from '../../../components/Modal/Modal';
import { RestModle } from '../../../components/Modal/rest';
import { LoginTypography, LoginWrapper, Row } from './style';
import { LoginAction } from '../../../redux/user/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Boundary } from '../../../components/Boundary/Boundary';

function Login() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, e) => {
      dispatch(
        LoginAction(values, () => {
          navigate("/");
        })
      );     
    },
  });
  const { isLoading,error} = useSelector(state => state.userDetailes)

  return (
    <LoginWrapper>
      <Img style={{margin:"1rem 0"}} src={'/logo@2x.png'}  alt={"logo"} />
      <LoginTypography>أهلا بعودتك</LoginTypography>
      <form
          onSubmit={formik.handleSubmit}

      >
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
        <Boundary error={error} isLoading={isLoading}>
          <Button center type="submit">
            <Typography style={{cursor:"pointer"}} color="#FFFFFF">تسجيل الدخول</Typography>
          </Button>
        </Boundary>
      </form>
      <Typography style={{cursor:"pointer",marginTop:"1.5rem"}} color="#24AAE1" onClick={() => setShowModal(true)}>
        هل نسيت كلمة المرور ؟
      </Typography>
      <Row style={{marginTop:"2rem"}}>
        <Typography color="#808080" style={{cursor:"pointer"}}> ليس لديك حساب ؟ </Typography>
        <Typography as={Link} to={"/auth/signup"} color="#24AAE1" style={{cursor:"pointer"}}>إنشاء حساب جديد </Typography>
      </Row>{' '}

      {showModal && (
        <Modal on={showModal}>
          <RestModle />
        </Modal>
      )}
    </LoginWrapper>
  );
}

export default Login;
