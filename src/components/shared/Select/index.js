import React from 'react';
import Select from 'react-select';


  const customStyles = {
    container: (provided) => ({
      ...provided,
      display: 'flex',
      width: 240,
      
    }),

    menu: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 240,
      paddingTop: 6,
      paddingBottom: 6,
      filter: 'drop-shadow(4px 6px 10px rgba(0, 0, 0, 0))',
      background: '#F9FAFC',
      border: 'none',
      borderRadius: 0,
    }),
    
    option: (provided, state) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      color: state.isSelected ? 'var(--primary-color)' : '#111111',
      padding: 10,
      background: state.isSelected && '#FEE5FF',
      cursor: 'pointer',
      width: 208,
      height: 40,
      borderRadius: 6,
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: (provided,state) => ({
      ...provided,
      transition: 'all 0.2s ease',
      transform: state.isFocused ? 'rotate(180deg)' : null,
    }),
    control: (provided,state) => ({
      ...provided,
      border: state.isFocused && '1px solid #C774EE',
      outline: 'none',
      paddingLeft: 10,
      indicatorSeparator: false,
      display: 'flex',
      autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off',
      width: 240,
      height: 50,
      background: '#F9FAFC',
      boxShadow: state.isSelected ? '4px 6px 10px rgba(0, 0, 0, 0.05)' : '0px 1px 3px rgba(5, 41, 83, 0.14)',
      borderRadius: 10,
      cursor: 'pointer',
      marginBottom: 20,
    }),
    
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  }

const Selector = ({placeholder, options, handleChange=null, width=200, height}) => (
        <Select
          styles={{
            container: (provided) => ({
              ...provided,
              width: width,
              display: 'flex',
            }),
            menu: (provided) => ({
              ...provided,
              width: width,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 6,
              paddingBottom: 6,
              filter: 'drop-shadow(4px 6px 10px rgba(0, 0, 0, 0))',
              background: '#F9FAFC',
              border: 'none',
              borderRadius: 0,
            }),
            // playceholder: () => ({
            //   color: '#111563',

            // }),
            placeholder: () => ({
              color: '#111563', 
            }),
            option: (provided, state) => ({
              ...provided,
              display: 'flex',
              alignItems: 'center',
              color: state.isSelected ? 'var(--primary-color)' : '#111111',
              padding: 10,
              background: state.isSelected && '#FEE5FF',
              cursor: 'pointer',
              width: 208,
              height: 40,
              borderRadius: 6,
            }),
            indicatorSeparator: () => ({
              display: 'none'
            }),
            dropdownIndicator: (provided,state) => ({
              ...provided,
              transition: 'all 0.2s ease',
              transform: state.isFocused ? 'rotate(180deg)' : null,
            }),
            control: (provided,state) => ({
              ...provided,
              width: width,
              border: state.isFocused && '1px solid #C774EE',
              outline: 'none',
              paddingLeft: 10,
              indicatorSeparator: false,
              display: 'flex',
              autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off',
              height: 50,
              background: '#F9FAFC',
              boxShadow: state.isSelected ? '4px 6px 10px rgba(0, 0, 0, 0.05)' : '0px 1px 3px rgba(5, 41, 83, 0.14)',
              borderRadius: 10,
              cursor: 'pointer',
              marginBottom: 20,
              // marginLeft: 25,

              borderStyle: 'none',
            }),
            
            singleValue: (provided, state) => {
              const opacity = state.isDisabled ? 0.5 : 1;
              const transition = 'opacity 300ms';
              return { ...provided, opacity, transition };
            }
          }}
          options={options}
          inputProps={{autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off' }}
          placeholder={placeholder}
          searchable={true}
          onChange={handleChange}
          //   clearable={true}
        />
  );
export default Selector;

