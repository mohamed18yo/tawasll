import { Img, Span } from '../../Global.style';
import { Typography } from '../widget/Typography';
import { AddMideaBox, AddPostBox, AddPostImg, AddPostTypo, InnserWrapper, PuplishPost } from './addPost.style';
import { AlbumIcon, VideoIcon } from '../sidebar/svgs';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { CreatePostAction } from '../../redux/post/postAction';
import { TextArea } from './TextArea';
import { Divider } from '../widget';
import { PostSchema } from '../../utils/validation/login';
import { InputFile } from '../widget/FileInput';
import { useState } from 'react';
import { readFileToDataURL } from '../../utils/Image';
function AddPost() {
  const {
    user: { user },
  } = useSelector((state) => state.userDetailes);
  const [imageData, setImageData] = useState();

  const dispatch = useDispatch();
  const initialValues = {
    text: '',
    medias: [],
  };
  const formik = useFormik({
    initialValues,
    validationSchema: PostSchema,
    onSubmit: (values, e) => {
      dispatch(
        CreatePostAction(values, () => {
          // navigate("/");
          setImageData(null);
        }),
      );
      e.resetForm();
    },
  });

  const handleChangeInput = async (event) => {
    formik.setFieldValue('medias', event.currentTarget.files[0]);
    const image = await readFileToDataURL(event.target.files[0]);
    setImageData(image);
  };
  return (
    <AddPostBox>
      <AddPostTypo>إنشاء منشور</AddPostTypo>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <InnserWrapper>
          <AddPostImg alt={user?.name} src={`https://tawsal.net/users/avatars/${user.avatar}`} />
          <TextArea
            name={'text'}
            value={formik.values?.text}
            errors={formik.errors.text}
            touched={formik.touched?.text}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </InnserWrapper>
        <div>
          {formik.values.medias && (
            <Img style={{ bordeRadius: '12px', maxHeight: '195px', marginTop: '25px' }} width="100%" src={imageData} />
          )}
        </div>
        <AddMideaBox>
          <Span style={{ color: '#808080', display: 'flex', cursor: 'pointer' }}>
            <label htmlFor={'medias'}>
              <AlbumIcon style={{ marginLeft: '1rem' }} />
            </label>

            <InputFile
            
              onChange={handleChangeInput}
              id={'medias'}
              // name={"medias"}
              multiple={true}
              type="file"
              accept="image/png,image/jpeg"
            />

            <VideoIcon />
          </Span>

          <PuplishPost>نشر</PuplishPost>
        </AddMideaBox>
      </form>
    </AddPostBox>
  );
}

export default AddPost;
