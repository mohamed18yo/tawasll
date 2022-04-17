import React from 'react';
import { InputController } from '../../../../components/Form/InputContoller/InputController';
import { Button, Divider, Row, Typography } from '../../../../components/widget';
import { useFormik } from 'formik';
import { validationSchemaReset } from '../../../../utils/validation/login';
import { FlexCol, Title } from './style';
import { useDispatch } from 'react-redux';
import { RestAction } from '../../../../redux/user/userAction';
import { useNavigate } from 'react-router-dom';
export const ResetPasssword = (props) => {
  const initialValues = {
    old_password: '',
    password: '',
    password_confirmation: '',
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemaReset,
    onSubmit: (values, e) => {
      // e.preventDefault()

      dispatch(
        RestAction(values, () => {
          navigate('/');
        }),
      );
    },
  });

  return (
    <FlexCol>
      <Title>تغيير كلمة المرور</Title>
      <Divider />
      <Typography style={{fontFamily:"ITCHandelGothicArabic-Light"}} as="h5">من الجيد استخدام كلمة سر قوية لا تستخدمها في أي مكان آخر</Typography>

      <form onSubmit={formik.handleSubmit}>
        <div style={{widht:"100%"}}>
          <InputController
            name={'old_password'}
            type="password"
            errors={formik.errors?.old_password}
            touched={formik.touched?.old_password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.old_password}
            placeholder={'كلمة المرور الحالية'}
          />
          <InputController
            name={'password'}
            type="password"
            errors={formik.errors?.password}
            touched={formik.touched?.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder={'كلمة المرور الجديدة '}
          />
          <InputController
          style={{marginBottom:"1rem"}}
            name={'password_confirmation'}
            type="password"
            errors={formik.errors?.password_confirmation}
            touched={formik.touched?.password_confirmation}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password_confirmation}
            placeholder={'إعادة كتابة كلمة المرور الجديدة '}
          />
        </div>
        <Row style={{marginBottom:"2rem"}} className="save">
          <Button center type="submit">
            <Typography color="#FFFFFF">حفظ التعديلات </Typography>
          </Button>
        </Row>
      </form>
    </FlexCol>
  );
};
