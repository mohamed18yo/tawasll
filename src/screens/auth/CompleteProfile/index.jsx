import { InputController } from '../../../components/Form/InputContoller/InputController';
import { Typography, Button,  RadioButton } from '../../../components/widget';
import { useFormik } from 'formik';
import { ProfileWrapper, StyledGroup } from './style';
import { useState } from 'react';
import { LoginTypography } from '../login/style';
import { FileInput } from '../../../components/widget/FileInput';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ErrorSection } from '../../../components/Form/InputContoller/ErrorSection';
import { UpdateUser } from '../../../redux/user/userAction';
import { Boundary } from '../../../components/Boundary/Boundary';

function CompleteProfile() {
  const [filename, setFilename] = useState('');

  const initialValues = {
    firstName: '',
    lastName: '',
    avatar: '',
    gender: 'male',
    birthday: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    // validationSchema: validationSchemaSignUp2,
    onSubmit: (values, e) => {
      dispatch(
        UpdateUser(values, () => {
          navigate('/');
        }),
      );
    },
  });
  const { isLoading,error} = useSelector(state => state.userDetailes)

  return (
    <ProfileWrapper>
      <form style={{width:"100%"}} onSubmit={formik.handleSubmit}>
        <LoginTypography as="h3">استكمل بيانا ت التسجيل</LoginTypography>

        <div className="wrapperdiv">
          <FileInput
            name="avatar"
            src={
              typeof formik.values.avatar === 'object'
                ? URL.createObjectURL(formik.values['avatar'])
                : '/assets/defaultUser.svg'
            }
            onChange={(event) => {
              setFilename(event.target.files[0]?.name || "");

              formik.setFieldValue('avatar', event.currentTarget.files[0]);
            }}
          />

          {filename && (
            <Typography as="Link" htmlFor={'file'}>
              {filename} <span>تغيير</span>
            </Typography>
          )}
        </div>

        <InputController
          name={'firstName'}
          type="text"
          errors={formik.errors?.firstName}
          touched={formik.touched?.firstName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder={'الاسم الأول'}
        />
        <InputController
          name={'lastName'}
          type="text"
          errors={formik.errors?.lastName}
          touched={formik.touched?.lastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder={'الاسم الاخير'}
        />

        <InputController
          name={'birthday'}
          defaultValue={'تاريخ الميلاد '}
          type="date"
          errors={formik.errors?.birthday}
          touched={formik.touched?.birthday}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.birthday}
          placeholder={'تاريخ الميلاد '}
        />
        <StyledGroup>
          <div className="switch-field">
            <RadioButton
              name="gender"
              id={'Fmale'}
              value={'Fmale'}
              rightValue={formik.values.gender}
              handleToggle={(e) => {
                formik.setFieldValue('gender', 'Fmale');
                formik.setFieldTouched('gender', true);
              }}
              placeholder={'أنثى'}
            />
            <RadioButton
              name="gender"
              id={'male'}
              value={'male'}
              rightValue={formik.values.gender}
              handleToggle={(e) => {
                formik.setFieldValue('gender', 'male');
                formik.setFieldTouched('gender', true);
              }}
              leftValue={''}
              placeholder={'ذكر'}
            />
          </div>
        </StyledGroup>
        <Boundary error={error} isLoading={isLoading}>

          {formik.errors.avatar && <ErrorSection errors={formik.errors.avatar} touched={true} />}
          <Button center type="submit" style={{cursor:"pointer"}}>
            <Typography >حفظ البيانات</Typography>
          </Button>
         </Boundary> 
      </form>
    </ProfileWrapper>
  );
}

export default CompleteProfile;