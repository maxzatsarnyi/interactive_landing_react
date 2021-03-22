import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    /* border: 0.1px solid green; */
    
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    
    --primary-color: #C774EE;
    --text-first-color: #111563;
    --text-second-color: #286DBD;;
    --text-third-color: #63718E;
    --text-fourth-color: #3A3A3A;

    --add-first-color: #FEE5FF;
    --add-second-color: #E8F8FF;
    --add-third-color: #BAD9E7;

    --bg-color: #F9FAFC;

  }
  
  // CALENDAR
  .react-datepicker__input-container input{
    width: 180px;
    height: 50px;
    background: #F9FAFC;
    box-shadow: 0px 1px 3px rgba(5, 41, 83, 0.14);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    line-height: 150%;
    color: #111563;
    border: none;
    outline: none;
  }
  .react-datepicker__input-container input:focus{
    border: 1px solid var(--primary-color);
  }
  .react-datepicker__day--selected{
    background-color: var(--primary-color);
  }
  // CALENDAR END

  /* transition FAQ */

  .fade-enter {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 350ms ease-in-out;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0;
  transition: opacity 500ms ease-in-out;
}

/* END FAQ transition */

/* STARS RATINGS */
.dv-star-rating-star{
  background: var(--primary-color);
  margin: 3px;
  height: 22px;
  width: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}
/* END STARS RATINGS */

/* ICONS HOVER */

/* .social-icon{
  cursor: pointer;
  transition: 0.3 ease-in-out;

} */


  h1{
    font-size: 42px;
    font-weight: 700;
  }

  h2{
    font-size: 32px;
    font-weight: 700;
  }

  h3{
    font-size: 22px;
    font-weight: 700;
  }

  h4{
    font-size: 22px;
  }
`;
 
export default GlobalStyle;