import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    direction: rtl !important;

}

input[type="date"] {
  direction: ltr;
  -webkit-align-items: center;
  display: -webkit-inline-flex;
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
  padding: 0;
  -webkit-padding-start: 4px;
  -webkit-padding-end: 4px;
}

::-webkit-datetime-edit-day-field:not([aria-valuetext]),
::-webkit-datetime-edit-month-field:not([aria-valuetext]),
::-webkit-datetime-edit-year-field:not([aria-valuetext]) {
  color: #999;
}

.css-1okebmr-indicatorSeparator{
  display:none !important ;

}
input::-webkit-datetime-edit {
  -webkit-flex: 1;
  -webkit-user-modify: read-only !important;
  display: inline-block;
  /* min-width: 0; */
  overflow: hidden;
  text-align: end;
}

input::-webkit-datetime-edit-fields-wrapper {
  -webkit-user-modify: read-only !important;
  display: inline-block;
  padding: 1px 0;
  white-space: pre;
}




@font-face {
  font-family: 'itchandelgothicarabic';
  src: url('/public/assets/Fonts/itchandelgothicarabic.ttf');
  font-weight: normal;
  font-style: normal;
}

body{
    padding:0 !important;
    /* overflow: auto !important; */
    margin: 0;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   direction: rtl !important;
  box-sizing: border-box;
  font-size: 16px;
}



/* width */
::-webkit-scrollbar {
  /* width: 5px; */
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 2px grey;  */
  /* border-radius: 3px; */
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  /* background: #707070;  */
  /* border-radius: 3px; */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #707070; 
}
`;
