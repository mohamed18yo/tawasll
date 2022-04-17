import styled from 'styled-components';
import { Row } from '../widget';

export  const  WrapperMenu= styled.div`
margin-left: auto;
  margin-right: auto;
  padding-top: 1.5rem/* 24px */;
  padding-bottom: 1.5rem/* 24px */;


  // PROJECT STYLING

.profile-dropdown{
  display: inline-block;
  position:relative;
  background: $primary;
  margin: auto;
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: $border-radius;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
  
  * {
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */     
  }
  
  input[type="checkbox"]{
    display:none;
    &:checked{
      & ~ ul{
        display:block;
        animation: $animation .5s;
      }
      
      & ~ img{
        background: $active;
      }
      
      & ~ label{
        background: $active;

        i{
          color: $primary;
        }

        &:after{
          content: '';
          position:absolute;
          top: 100%;
          right: calc(50% - 10px);
          display:block;
          border-style: solid;
          border-width: 7px 10px 0 10px;
          border-color: $active transparent transparent transparent;
          width: 0;
          height: 0;
        }
      }
    }
  }
  
  img{
    display: inline-block;
    background: darken($primary, 10%);
    height: 2.5rem;
    vertical-align:middle;
    margin-right: 1rem;
    margin: .5rem .75rem .5rem .5rem;
    border-radius: 50%;
  }
  
  span{
    display:inline-block;
    vertical-align: sub;
    width: 125px;
    margin-right:2rem;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  ul{
    display:none;
    list-style: none;
    padding: 0;
    marrgin: 0;
    background: #fff;
    position:absolute;
    top: 100%;
    right: 0;
    width: 100%;
    border-radius: $border-radius;

    li{
      a{
        display:block;
        padding: .75rem 1rem;
        text-decoration: none;
        color: darken($primary ,50%);
        font-size: 1rem;
        
        i{
          font-size: 1.3rem;
          vertical-align: middle;
          margin: 0 .75rem 0 -.25rem;
        }
        
        &:hover{
          background: darken($primary, 5%);
        }
      }
      
      &:first-child a:hover{
        border-radius: $border-radius $border-radius 0 0;
      }
      
      &:last-child a:hover{
        border-radius: 0 0 $border-radius $border-radius;
      }
    }
  }
  
  & > label {
    position: relative;
    height: 3.5rem;
    display: block;
    text-decoration: none;
    background: transparent;
    color: #333;
    box-sizing: border-box;
    padding: .9rem;
    float: right;
    border-radius: 0 $border-radius $border-radius 0;

    i{
      color: darken($primary, 25%);
      font-size: 1.75rem;
    }
  }
  
  &:after{
    content: '';
    display:table;
    clear:both;
  }
}



/// TEMPLATE STYLING
$background: #2c3e50;

body{
  background: $background;
  font-family: Lato;
}

h1{
  text-align:center;
  font-size: 3rem;
  color: rgba(0,0,0, .5);
  text-transform: uppercase;
  margin: 2rem 0 0;
  letter-spacing: .5rem;
}

.container{
  width: 80%;
  margin:4rem auto 2rem;
  
  .half{
    width: 50%;
    float:left;
    margin-bottom: 2rem;
  }
  
  &:after{
    content: '';
    display:table;
    clear:both;
  }
}

p.subtitle{
  color: rgba(0,0,0, .5);
  font-weight: bold;
  text-align:center;
  margin: .5rem 0 2rem;
  letter-spacing: .1rem;
}

.background{
  position:absolute;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: .25;
  z-index: -1;
  background: url(https://ar1web-com.googlecode.com/svn/Bg/bg63.gif);
}

`
export  const  WrapperSubMenu= styled(Row)`
justify-content: center;
margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem/* 24px */;
  margin-bottom: 1.5rem/* 24px */;
  .sub{
     height: 14rem/* 224px */;
     margin-bottom: 8rem/* 128px */;
     margin-left: -8rem/* -128px */;

  }
  .relative{
    display: relative;
    >div{
      cursor: pointer;
    }
    ul{
      visibility: visible;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 3000ms;
  border-radius: 0.25rem/* 4px */;
  position: absolute;
  width: 100%/* 192px */;
  list-style-type: none;;
li{
  display: flex;
  justify-content: space-between;
  color: #10000D;
  margin:0px 11px;
  cursor: pointer;
  line-height: .75rem/* 12px */;
  padding:20px

}
    };
  }


`
