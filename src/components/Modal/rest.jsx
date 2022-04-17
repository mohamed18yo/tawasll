import React from 'react'
import { Typography, Button, Logo, Img } from '../widget';
import { InputController } from '../Form/InputContoller/InputController';
import { PanelWrapperStyle, ContainerTypography, ForgetTypography } from './Rest/style';
import { validationSchemaEmail } from '../../utils/validation/login';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const RestModle = () => {


  const initialValues = {
    email: ''
  };
  const navigate = useNavigate();


  const { userDetailes } = useSelector(state => state)
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemaEmail,
    onSubmit: (values, e) => {
      if (values.email === userDetailes.user.user.email) {
        navigate('/reset')

      }

    }
  });
  return (
    <PanelWrapperStyle>
      <Img style={{margin:"1rem 0"}} src={'/logo@2x.png'}  alt={"logo"} />

      <ForgetTypography>هل نسيت كلمة المرور </ForgetTypography>
      <ContainerTypography>
        <Typography color='#707070'>أدخل البريد الإلكتروني لحسابك لإعادة تعيين كلمة المرور. ثم ستتلقى رابطًا بالبريد الإلكتروني لإعادة تعيين كلمة المرور. إذا كان لديك أي مشكلة حول إعادة تعيين كلمة المرور تواصل معنا</Typography>
        <form onSubmit={formik.handleSubmit}>
        <InputController
          name={"email"}
          type="email"
          errors={formik.errors?.email}
          touched={formik.touched?.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder={"البريد الإلكتروني"}
        />
        <Button center type="submit">
          <Typography color="#FFFFFF">

            أرسل الآن
          </Typography>
        </Button>
      </form>
      </ContainerTypography>


    </PanelWrapperStyle>
  )
}
