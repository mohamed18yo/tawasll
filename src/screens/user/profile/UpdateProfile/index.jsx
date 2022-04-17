import { useFormik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { InputController } from '../../../../components/Form/InputContoller/InputController';
import { Button, RadioButton, Row, Typography, Divider } from '../../../../components/widget';
import countryList from 'react-select-country-list';

import { readFileToDataURL } from '../../../../utils/Image';
import { ProfileWrapperComplete, StyledGroup } from '../../../auth/CompleteProfile/style';
import { FlexCol, Title } from '../RestPassword/style';
import { WrapperInputProfile } from './style';
import { SelectReact } from '../../../../components/widget/Select';
import { FileInput } from '../../../../components/widget/FileInput';
import { useNavigate } from 'react-router-dom';
import { UpdateUser } from '../../../../redux/user/userAction';
import { useDispatch } from 'react-redux';
import { Boundary } from '../../../../components/Boundary/Boundary';

const URL = 'https://tawsal.net/users/avatars';

export const UpdateProfile = () => {
  // const { user } = useSelector((state) => state.userDetailes.user);

  const [filename, setFilename] = useState('');
  const [imageData, setImageData] = useState();
  const [isChange, setIsChnage] = useState(false);
  const {
    user: { user },
    isLoading,
    error,
  } = useSelector((state) => state.userDetailes);
  console.log('user', user);
  const initialValues = {
    firstName: (user.name && user.name.split(' ')[0]) || '',
    lastName: (user.name && user.name.split(' ')[1]) || '',
    email: (user.email && user.email) || '',
    avatar: '',
    country: user.country || '',
    gender: (user.gender && user.gender) || 'male',
    birthday: user.date_birth && user.date_birth,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    // validationSchema: validationSchemaSignUp2,
    onSubmit: (values, e) => {
      e.resetForm();

      dispatch(
        UpdateUser(values, () => {
          navigate('/');
        }),
      );
    },
  });
  return (
    <Boundary error={error} isLoading={isLoading}>
      <FlexCol style={{ width: '100%' }}>
        <Title>إعدادات الملف الشخصي</Title>
        <Divider />
        <form onSubmit={formik.handleSubmit}>
          <ProfileWrapperComplete>
            <FileInput
              name="avatar"
              src={isChange ? imageData : `${URL}/${user.avatar}`}
              onChange={async (event) => {
                setFilename(event.target.files[0]?.name || 'dd');
                formik.setFieldValue('avatar', event.target.files[0]);
                setIsChnage(true);
                const image = await readFileToDataURL(event.target.files[0]);
                setImageData(image);
              }}
            />

            <Typography htmlFor={'file'}>
              {filename} <span>تغيير</span>
            </Typography>
          </ProfileWrapperComplete>
          <WrapperInputProfile style={{ marginTop: '2rem' }}>
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
              <SelectReact
                value={formik.values.country}
                name={'country'}
                isRtl
                placeholder="الدولة"
                onFocus={formik.handleBlur('country')}
                touched={formik.touched.country}
                options={countryList().getData()}
                onChange={(value) => {
                  formik.setFieldValue('country', value.label);
                  formik.setFieldTouched('country', true);
                }}
                errors={formik.errors?.country}
                defaultValue={formik.values.country}
              />
            </StyledGroup>

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
          </WrapperInputProfile>
          {formik.errors.avatar && <p>Error</p>}
          <Row style={{ width: '95%', marginTop: '5rem' }} className="save">
            <Button type="submit">
              <Typography style={{ cursor: 'pointer' }} color="#FFFFFF">
                حفظ البيانات
              </Typography>
            </Button>
          </Row>
        </form>
      </FlexCol>
    </Boundary>
  );
};
