import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { WarperFileBox } from '../FileInput';
import { Img } from '../Image';

export const InputFile = styled('input').attrs({
    type: 'file',
    accept: 'image/png,image/jpeg',
})`
    /* display: none; */
  `;


export const FileInput = ({ name="avatar", formik, ...props }) => {
    const [preview, setPreview] = useState(formik.values.avatar);
    const [filename, setFilename] = useState('');


    return (
        <WarperFileBox margin={props.margin} htmlFor={name}>

            {preview ? <Img src={preview} /> : null }

            <input
                        //   style={{ display: "none" }}


                onChange={(e) => {
                    setPreview(URL.createObjectURL(e.target.files[0]));
                    
                    setFilename(e.target.files[0].name);

                    formik.setFieldValue('avatar', e.currentTarget.files[0]);
                }}
                type="file"
                accept= 'image/png,image/jpeg'

                id={name}
                name={name}
                multiple={false}
            />
                        <span htmlFor={"file"}> {filename}{preview?"تغير" :"اضافة"}</span>

        </WarperFileBox>
    );
};
