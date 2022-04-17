import { FlexCol, Img } from '../../Global.style';
import { Typography } from '../widget/Typography';
import {
  AddComentBox,
  AddReactionBox,
  ComentsBox,
  InputComent,
  PostBody,
  PostBox,
  PostHeader,
  PostMidea,
  PostReaction,
  PostTypo,
  PostUserImg,
} from './post.sytle';
import SendIcon from '@material-ui/icons/Send';

// import ShareIcon from "@material-ui/icons/Share";
import ComentItem from './comentItem';
import { CommentIcon, HeartIcon, LightHeartIcon, ShearIcon } from '../sidebar/svgs';
import ShareMenu from '../Dropmenu/ShareMenu';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCommentsAction, AddLikesAction, UnLikesAction } from '../../redux/post/postAction';
import { handleFoematTime } from '../../utils/time';
function Post(props) {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [likeStatus, setLikeStatus] = useState(props?.likes);
  const [likeCount, setLikeCount] = useState(props.num_likes);
  const [comments, setComments] = useState(props?.comments);
  // const { name, avatar } = useSelector((state) => state.userDetailes.user.user);
  const [commentVal, setCommentVal] = useState('');
  const {userProfile:{name,avatar} } = useSelector((state) => state.userDetailes);

  useEffect(() => {
    if (likeStatus?.length > 0) {
      setLikeCount(likeCount + 1);
    }
  }, []);
  return (
    <PostBox>
      <PostHeader>
        <PostUserImg
          alt={props?.user?.name}
          src={`https://tawsal.net/users/avatars/${avatar}`}
        />
        <FlexCol>
          <Typography style={{ margin: '0 .5rem' }}>{name}</Typography>
          <Typography style={{ margin: '0 .5rem' }} color="#808080" fontSize="10px">
            {handleFoematTime(props?.created_at)}
          </Typography>
        </FlexCol>
      </PostHeader>
      <PostBody>
        <PostTypo style={{ margin: '.5rem 0 1rem' }}>{props?.text}.</PostTypo>
        {/* <PostTypo style={{ margin: "0 0 1rem" }}>لوريم_ابسوم#</PostTypo> */}
        <PostMidea>
          {props?.files?.length > 0 && (
            <Img
              width={'100%'}
              style={{ margin: 'auto', maxHeight: '300px' }}
              src={`https://tawsal.net/posts/medias/${props?.files[0]?.url}`}
            />
          )}

          {/* <Img src="/ads.png"/> */}
        </PostMidea>
      </PostBody>
      <PostReaction>
        <Typography
          style={{
            display: 'flex',
            flexDirection: 'row',
            color: '#808080',
            fontSize: '12px',
            weight: '300',
            fontFamily: 'ITCHandelGothicArabic-Light',
          }}
          weight="100"
          color="#808080"
        >
          {likeStatus?.length > 0 ? (
            <LightHeartIcon style={{ marginLeft: '.5rem' }} />
          ) : (
            <HeartIcon style={{ marginLeft: '.5rem' }} />
          )}
          {likeCount} اعجبني
        </Typography>
        <Typography
          style={{ fontFamily: 'ITCHandelGothicArabic-Light', fontWeight: '200' }}
          color="#808080"
          fontSize="11px"
          weight="100"
        >
          {props?.num_shares} مشاركات {props?.num_comments} تعليقات{' '}
        </Typography>
      </PostReaction>
      <AddReactionBox>
        <Typography
          fontSize="12px"
          weight="300"
          style={{
            marginLeft: '0.7rem',
            display: 'flex',
            cursor: 'pointer',
            fontFamily: 'ITCHandelGothicArabic-Light',
          }}
          color="#808080"
        >
          {likeStatus?.length > 0 ? (
            <LightHeartIcon
              onClick={() => {
                setLikeStatus([]);
                setLikeCount(likeCount - 1);
                dispatch(UnLikesAction(props?.id));
              }}
              style={{ marginLeft: '.5rem' }}
            />
          ) : (
            <HeartIcon
              onClick={() => {
                setLikeStatus([{ 1: '' }]);
                setLikeCount(likeCount + 1);
                dispatch(AddLikesAction(props?.id));
              }}
              style={{ marginLeft: '.5rem' }}
            />
          )}
          اعجبني{' '}
        </Typography>
        <Typography
          fontSize="12px"
          weight="300"
          style={{
            marginLeft: '0.7rem',
            display: 'flex',
            cursor: 'pointer',
            fontFamily: 'ITCHandelGothicArabic-Light',
          }}
          color="#808080"
        >
          <CommentIcon style={{ marginLeft: '.5rem' }} />
          تعليق{' '}
        </Typography>
        <Typography
          fontSize="12px"
          weight="300"
          style={{
            marginLeft: '0.7rem',
            cursor: 'pointer',
            display: 'flex',
            fontFamily: 'ITCHandelGothicArabic-Light',
          }}
          color="#808080"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <ShearIcon style={{ marginLeft: '.5rem' }} />
          مشاركة{' '}
        </Typography>
        <ShareMenu {...props} setIsOpen={setIsMenuOpen} isOpen={isMenuOpen} />
      </AddReactionBox>

      <ComentsBox>
        {/* comments?.length && */}
        {comments?.map((item) => (
          <ComentItem {...item} />
        ))}
      </ComentsBox>

      <AddComentBox>
        <Img
          radius="6px"
          style={{ height: '40px', width: '40px', borderRadius: '6px' }}
          src={`https://tawsal.net/users/avatars/${avatar}`}
        />
        <InputComent
          value={commentVal}
          onChange={(event) => {
            setCommentVal(event.target.value);
          }}
          placeholder="اكتب تعليقك"
        />
        <SendIcon
          onClick={() => {
            setCommentVal('');
            if (commentVal) {
              setComments([...comments, { text: commentVal, user: { name, avatar } }]);
              dispatch(AddCommentsAction(commentVal, props.id));
            }
          }}
          style={{ transform: 'rotate(180deg)', cursor: 'pointer', color: '#63c2e8', marginRight: '-3rem' }}
        />
      </AddComentBox>
    </PostBox>
  );
}

export default Post;
