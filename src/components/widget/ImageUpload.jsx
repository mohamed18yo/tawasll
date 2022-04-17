import { useState } from "react";
import { downsizeImage, readFileToDataURL } from "../../utils/Image";
import { notify } from "../../utils/notify";
import { InputFile, WarperFileBox } from "./FileInput";
import { Img } from "./Image";
import { Typography } from "./Typography";

// 5 KB
const minFileSize = 5120;
// 5MB
const maxFileSize = 5242880;
export const ImageUpload = ({ name = "avatar", formik, ...props }) => {
    const [filename, setFilename] = useState('');
    const [file, setFile] = useState(null);
    const [imageData, setImageData] = useState();



    // const handleChange = async ({ target: { validity, value, files: [file], }, currentTarget }) => {
    //     if (validity.valid && file) {
    //         // File size in bytes
    //         const fileSize = file.size;

    //         const ext = value.match(/\.([^\.]+)$/)[1];

    //         if (fileSize < minFileSize) {
    //             notify("error", 'File is too small. Please select a file that is 50KB or larger.');
    //         } else if (fileSize > maxFileSize) {
    //             notify("error", 'File too big. Please select a file that is 5MB or smaller.');
    //             formik.setFieldError("avatar", "please  don  take  more  than  for  items")
    //             formik.setFieldTouched("avatar", true)
    //         } else if (['JPG', 'JPEG', 'PNG', 'GIF'].indexOf(ext.toUpperCase()) === -1) {
    //             notify("error", 'Invalid file type!  Please load an image!');
    //             formik.setFieldError("avatar", "please  don  take  more  than  for  items")
    //             formik.setFieldTouched("avatar", true)
    //         } else {
    //             let image = await readFileToDataURL(file);
    //             image = await downsizeImage(image);

    //             setFilename(file.name);
    //             setImageData(image);
    //             formik.setFieldValue("avatar", currentTarget.files[0]);
    //         }
    //     } else {
    //         formik.setFieldError(name, "please  don  take  more  than  for  items")
    //         formik.setFieldTouched(name, true)
    //     }
    // }



    return (



        <WarperFileBox margin={props.margin} htmlFor={"avatar"}>
            <InputFile
                onChange={() => ``}
                name={"avatar"}
                onFocus={(e) => {
                    formik.setFieldTouched("avatar", true);
                }}
            />
            <span htmlFor={"avatar"} >  تغير</span>
            {/* {formik.values && formik.values['avatar'] && (
                <>
                    <Img
                        src={
                            typeof formik.values.avatar === "object"
                                ? URL.createObjectURL(formik.values["avatar"])
                                : '/assets/userprofile.png'
                        }

                        alt="images"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                    {filename && <Typography>{filename} <span htmlFor={name} >  تغير</span> </Typography>}
                </>

            )} */}
        </WarperFileBox>

    );
};

