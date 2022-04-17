import { ErrorSection } from "./ErrorSection"
import { Input, WrapperInput } from "./style"

export const InputController = (props) => {
    const  
    {name,
        type,
        errors,
        defaultValue,
        value,
        touched,
        placeholder,
        style,
        onBlur,
        onChange}
    =props
    return (
        <WrapperInput style={style}>
            {/* <div> */}
                <Input
                    error={errors &&touched}
                    onChange={onChange}
                    type={type}
                    defaultValue={defaultValue}
                    value={value}
                    id={name}
                    name={name}
                    onBlur={onBlur}
                    required
                    placeholder={placeholder}
                />
            {/* </div> */}
            <ErrorSection errors={errors} touched={touched} />
        </WrapperInput>
    )
}