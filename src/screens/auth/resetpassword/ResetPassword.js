import { InputController } from '../../../components/Form/InputContoller/InputController';
import { Typography, Button, Logo } from '../../../components/widget';
import { useFormik } from 'formik';
import { validationSchemaForget } from '../../../utils/validation/login';
import { LoginTypography, LoginWrapper } from '../login/style';
import { useDispatch } from 'react-redux';
import { RestAction } from '../../../redux/user/userAction';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const initialValues = {
    old_password:'',
    password: '',
    password_confirmation: '',
  };
  const dispatch = useDispatch()
  const  navigate=useNavigate();

  const formik = useFormik({
    initialValues,
    // validationSchema: validationSchemaForget,
    onSubmit: (values, e) => {
      dispatch(
        RestAction(values, () => {
              navigate("/");
            })
          ); 
    },
  });

  
  return (
    <LoginWrapper>
      <Logo />

      <LoginTypography>تعيين كلمة المرور</LoginTypography>
      <form
        onSubmit={formik.handleSubmit}
      >

<InputController
          name={'old_password'}
          type="password"
          errors={formik.errors?.old_password}
          touched={formik.touched?.old_password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.old_password}
          placeholder={'كلمة المرور السابقة '} 
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
          type="confirmPassword"
          errors={formik.errors?.password_confirmation}
          touched={formik.touched?.password_confirmation}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password_confirmation}
          placeholder={'تأكيد كلمة المرور '}
        />
        <Button center type="submit">
          <Typography color="#FFFFFF">إعادة تعيين كلمة المرور</Typography>
        </Button>
      </form>
    </LoginWrapper>
  );
}

export default ResetPassword;
