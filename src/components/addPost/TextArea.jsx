import React from 'react'
import { FlexCol } from '../../Global.style'
import { ErrorSection } from '../Form/InputContoller/ErrorSection'
import { AddPostInput } from './addPost.style'


export const TextArea = (props) => {
    return (
        <FlexCol>
            <AddPostInput
                autoCorrect='true'
                maxLength={300}
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                required
                row={7}

            />
            <ErrorSection errors={props.errors} touched={true} />

        </FlexCol>

    )
}