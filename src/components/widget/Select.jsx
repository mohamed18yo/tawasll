import ReactSelect from 'react-select';
import styled from 'styled-components';

import { ErrorSection } from '../Form/InputContoller/ErrorSection'



const customStyles = {
  option: (provided) => ({
    ...provided,
    padding: 10,
    cursor: 'pointer',
    width: '100% !important',


  }),
  singleValue: (provided) => ({
    ...provided,
    transform: 'none',
    width: '100% !important',


  }),
  menuList: (provided) => ({
    ...provided,
    zIndex: 9999,
    borderRadius: '2px',
    width: '100% !important',

  }),
  menu: (provided) => ({
    ...provided,
    hyphens: 'auto',
    bottom: '8px',
    borderRadius: '1px',
    zIndex: 9999,
    width: "max-content",
    minWidth: "100%"
  }),
  placeholder: (provided) => ({
    ...provided,
    position: 'static',

    transform: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    overflow: 'visible',
    height: '48px',
    padding: '0 6px'

  }),
  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  container: (provided, state) => ({
    ...provided,
    display: 'flex',
    border: 'none !important',
    borderRadius: 'none',
    cursor: 'pointer',
    // backgroundColor: 'transparent',
    height: '48px',
    width: "95%",

  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    width: '20px !important',
    fontSize: 16,
    color: 'black',

  }),
  indicatorSeparator: state => ({
    // display: 'none',
    backgroundColor: 'red'
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '30px',
  }),



}


export const SelectReact = (props) => {
  const { options, value, onChange } = props

  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : ''
  }






  return (
    <>
      <ReactSelect
        styles={customStyles}
        width='100%'
        cacheOptions
        defaultOptions
        defaultMenuIsOpen={false}
        className="single-select"
        classNamePrefix="react-select"
        menuPlacement="auto"
        maxMenuHeight={200}
        zIndex={10}
        isSearchable={true}
        name={props.name}
        placeholder={props.placeholder}
        value={defaultValue(options, value)}
        onFocus={props.onFocus}
        options={options}
        onChange={onChange}
      />
      <ErrorSection errors={props.errors} touched={props.touched} />
    </>
  )
}