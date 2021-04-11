export default {
    container: (provided) => ({
      ...provided,
      width: 105,
      display: 'flex',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#7E8183',
    }),
    menu: (provided) => ({
      ...provided,
      width: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 6,
      paddingBottom: 6,
      background: '#F9FAFC',
      border: 'none',
      borderRadius: 0,
    }),

    input: (provided) => ({
      ...provided,
    }),
    placeholder: () => ({
      color: '#7E8183', 
      fontSize: 16,
    }),
    option: (provided, state) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      color: state.isSelected ? 'var(--primary-color)' : '#111111',
      // padding: 10,
      background: state.isSelected && '#FEE5FF',
      cursor: 'pointer',
      width: '100%',
      fontSize: 12,
      borderRadius: 6,
      padding: 3,
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
      width: 105,
      border: state.isFocused ? '2px solid #7E8183' :'2px solid #7E8183',
      outline: 'none',
      paddingLeft: 10,
      indicatorSeparator: false,
      display: 'flex',
      autoComplete: 'off', autoCorrect: 'off', spellCheck: 'off',
      height: 35,
      backgroundColor: 'transparrent',
      borderRadius: 28,
      cursor: 'pointer',
      borderStyle: 'none',
      color: '#7E8183'
    }),
    
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  }