import * as Yup from 'yup'


export const simpleStringRegex = /^[A-z0-9 ,.'-]*$/;

export const validationSchema = () => {
    return Yup.object().shape({
        email: Yup.string()
            .required("يرجى إدخال عنوان بريد إلكتروني صالح *")
            .email("يرجى إدخال عنوان بريد إلكتروني صالح *"),

        password: Yup.string()
            .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف *")
            .matches(/(?=.*[a-z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .matches(/^(?=.*[A-Z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .matches(/(?=.*\d)/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .required("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف"),


    })
}


export const validationSchemaForget = () => {
    return Yup.object().shape({

        old_password: Yup.string()
            .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف *")
            .matches(/(?=.*[a-z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .matches(/^(?=.*[A-Z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .matches(/(?=.*\d)/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .required("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف"),
        password: Yup.string()
            .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف *")
            .matches(/(?=.*[a-z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .matches(/^(?=.*[A-Z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .matches(/(?=.*\d)/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .required("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف"),
        password_confirmation: Yup.string()
            .required("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .oneOf([Yup.ref('password'), null], "كلمتا المرور غير متطابقتان *"),

    })
}
export const validationSchemaSignUp1 = () => {
    return Yup.object().shape({

        email: Yup.string()
            .required("يرجى إدخال عنوان بريد إلكتروني صالح *")
            .email("يرجى إدخال عنوان بريد إلكتروني صالح *"),

        password: Yup.string()
            .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف *")
            .matches(/(?=.*[a-z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .matches(/^(?=.*[A-Z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .matches(/(?=.*\d)/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .required("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف"),
        password_confirmation: Yup.string()
            .required("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
            .oneOf([Yup.ref('password'), null], "كلمتا المرور غير متطابقتان *"),

    })
}

const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
];
// const FILE_SIZE = 0;



export const validationSchemaSignUp2 = () => {
        return Yup.object().shape({
                firstName: Yup.string().matches(simpleStringRegex)
                    .required("يرجى إدخال اسم  المستخدمالاول بطريقة  صحيحة    *"),
                lastName: Yup.string().matches(simpleStringRegex)
                    .required("يرجى إدخال اسم  المستخدم الاخير بطريقة  صحيحة    *"),
                birthday: Yup.date()
                    .nullable()
                    .transform((curr, orig) => orig === '' ? null : curr)
                    .required('يرجى إدخال اسم  تاريخ  الميلاد   بطريقة  صحيحة    *'),
                gender: Yup.string().required().oneOf(['male', 'female', 'other']),
                country: Yup.string().required(),
                avatar: Yup
                    .mixed()
                    .required("يرجى إدخال اسم  صورة  مستخدم  بطريقة  صحيحة  *")
                    .nullable()
                    .test(
                        "fileSize",
                        "* 11يجب ان تكون الصورة أكبر من 500* 500 بيكسل وبحجم لا يتجاوز 300 كليو بايت",
                        value => !value || (value && value?.size <= 1024 * 1024)
                        )
                    .test(
                        "fileFormat",
                        "* يجب ان تكون الصورة أكبر من 500* 500 بيكسل وبحجم لا يتجاوز 300 كليوssss بايت",
                        value => !value || (value && SUPPORTED_FORMATS.includes(value?.type)))

    })
}


        export const validationSchemaReset = () => {
            return Yup.object().shape({

                old_password: Yup.string()
                    .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف *")
                    .matches(/(?=.*[a-z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
                    .matches(/^(?=.*[A-Z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
                    .matches(/(?=.*\d)/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
                    .required("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف"),

                password: Yup.string()
                    .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف *")
                    .matches(/(?=.*[a-z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
                    .matches(/^(?=.*[A-Z])/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
                    .matches(/(?=.*\d)/, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
                    .required("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف"),
                password_confirmation: Yup.string()
                    .required("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على أرقام * وحروف")
                    .oneOf([Yup.ref('password'), null], "كلمتا المرور غير متطابقتان *"),

            })
        }







        export const validationSchemaEmail = () => {
            return Yup.object().shape({

                email: Yup.string()
                    .required("يرجى إدخال عنوان بريد إلكتروني صالح *")
                    .email("يرجى إدخال عنوان بريد إلكتروني صالح *"),
            })
        }



        export const PostSchema = () => {
            return Yup.object().shape({

                text: Yup.string()
                    .min(2, "يجب أن  يقل عدد أحرف المنشور 2 حرف *")
                    .max(300, "يجب أن لا يتعدى عدد أحرف المنشور 300 حرف *!")
                    .required("يجب أن لا يتعدى عدد أحرف المنشور 300 حرف *"),
                    medias: Yup.lazy((val) =>
                    Array.isArray(val) && typeof val[0] === "string"
                      ? Yup
                          .array()
                          .of(Yup.string())
                          .max(4,"At Most Four image is required")
                          .nullable()
                      : Yup
                          .array()
                          .of(Yup.object())
                          .max(4,"At Most Four image is required")
                
                          .nullable()
                  ),
            })
        }















        // export const CratePostSchema = () => {
        //     return Yup.object().shape({
        //         text: Yup.string()
        //         .required("يرجى إدخال عنوان بريد إلكتروني صالح *")
        //             .requird(8, "يجب أن عدد أحرف المنشور من 8 أحرف *"),
        //         // images: Yup.lazy((val) =>
        //         //     Array.isArray(val) && typeof val[0] === "string" ?
        //         //     Yup
        //         //     .array()
        //         //     .of(Yup.string())
        //         //     .min(1, "At least one image is required")
        //         //     .max(4, "At Most Four image is required")
        //         //     .nullable() :
        //         //     Yup
        //         //     .array()
        //         //     .of(Yup.object())
        //         //     .min(1, "At least one image is required")
        //         //     .max(4, "At Most Four image is required")
        //         //     .nullable()
        //         // )

        //     })
        // }