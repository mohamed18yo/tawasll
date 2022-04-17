import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Boundary } from '../../../components/Boundary/Boundary';
import Post from '../../../components/Post/post';
import { getPostByID } from '../../../redux/post/postAction';
import { Navigate } from "react-router-dom";


const PostById = () => {
    const dispatch = useDispatch()
    const { post, error, isLoading } = useSelector(state => state.post)

    const { id } = useParams()
    useEffect(() => {
        if (!id) return 
        dispatch(getPostByID(id))

    }, [dispatch, id]);

    console.log("10", post);

    return (
        <Boundary error={error} isLoading={isLoading}>
            {!id || !post && <Navigate to="/"/>}

            <Post {...post} />
        </Boundary>
    )
}

export default PostById 

