import styled from "styled-components";

export const StyledContents = styled.div`
    display: flex;
    justify-content: center;
    //font-size:1vw;
    @media (max-width: 1024px) {
       flex-direction: column;
    }
    li{
        margin-bottom: 10px;
        white-space: nowrap;
     }
    .list{
        list-style-type: none;
        padding: 0;
        @media (max-width: 1024px) {
          padding-left: 8%;
        }
    }
   
   
    .list-values{
        list-style-type: none; 
        color: blue;
    }
    
    .mother-content{
        width: 75%;  
    }
    
    .card{
        display: flex;
        flex-direction: column;
        margin-left: 1%;
        width: 30%;
        @media (max-width: 1024px) {
           width: 50%; 
           flex-wrap: wrap;
           margin: auto;
        }
    }

    .att-list{
        text-align: left;
        display:flex; 
        @media (max-width: 1024px) {
           width: 70%;
        }
    }
`;

export const StyledLabel = styled.div`
    font-family: 'Asap', sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: bold;
    border-radius:3px;
     
    .modal{
        background: red;
        border-radius: 5px; !important
    };
     
    .add-btn{
        margin-left: 2%;
        position: relative;
        border-radius: 50%;
        height: 28px;
        width: 28px;
        border: none;
        outline: none;
        background: ${props => props.theme.primary.gray};
        &:hover{
            background: gray;
            .add-icon{ 
                color: white;
            }
        }
    }
    
    .add-icon{ 
        color: black;
        position: absolute;
        font-size: 30px; 
        top: -32%;
        left: 20%;
    }
     
    p{
        justify-content: space-between;
        width: 33%;
    }
    

    .inline-badges{
        display: flex;
        justify-content: flex-start;
        margin: 0 2%;
        width: 55%; 
    }
    
    .inline{
        display: flex;
        align-items: center;
        width: 25%;
        justify-content: flex-end;
    }
    
    .name{
        width: 20%; 
        text-align: left;
        padding-left: 1%;
    }
    
    .svg-icon{
        margin-right: 5%
    }
    
    .svg-text{
        font-weight: normal;
        text-align: left;
        padding-left: 3%;
    }
     .modal-title{
        font-family: 'Asap', sans-serif;
   }    
`;

export const Content = styled.div`
    position: relative; 
    display: flex;
    justify-content: center;
    margin-top: 25px; 
    margin-left: 3%;
    margin-right: 4%;
    width: 70%;
    //font-size:1vw;
    @media (max-width: 1024px) { 
       width: 100%;
       flex-wrap: wrap;
    }
    .card{
        width: 50%;
        flex-direction: column;
        margin: 0 10px;
        @media (max-width: 1024px) {
           width: 50%;
        }
    };
    .divider {
        position:absolute;
        top: 18px;
    };
    .title{
        text-transform: uppercase;
        margin-bottom: 10px;
        font-weight: bold;
        display: inline;
        line-height: 16px;
        min-width: 200px;
    }
    .status-no{
        color: #C4C4C4;
        //font-weight: 600;
    }
    .status-yes{ 
        color: red;
        //font-weight: 600;
    }
    .high-risk-card{
        margin-top: 0;
    }
    position: relative;
    
    .see-more{
        position: absolute;
        top: 83%;
        left: 0;
        color: blue;
    }
    
`;

export const Card = styled.div`
     li{
        margin-bottom: 15px;
        white-space: nowrap;
     }
      .card-content{
        display: flex;
        justify-content: center;
        @media (max-width: 1024px) {
            justify-content: flex-start;
        }
     }
     
     .align-left {
        text-align: left;
        list-style-type: none; 
        @media (max-width: 1024px) {
            text-align: left;         
            padding: 0;
        }
    }
    
    .values{
        color: #1337F1;
        @media (max-width: 1024px) {
            padding-left: 1%;
        }
    }
    
      .align-right {
        text-align: right;
        list-style-type: none; 
        @media (max-width: 1024px) {
            text-align: left;
            padding: 0;
        }
    };
    
    .align-center{
        text-align: center;
        list-style-type: none; 
        padding: 0;
    }
`;

export const Palette = styled.div`
    font-family: 'Asap', sans-serif;
    background: #fff;
    align-item: center;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    
    .active {
        height: 105%;
        width: 115%;
        z-index: 1;
        left: 0px;
        top: 0px;
        border: 1.5px solid white;
        box-shadow: 0px 0px 6px 0px rgba(91, 87, 87, 0.62);
    }
    
    .palette-label{
        font-size: 14px;
    }
    .boxes{
        position: relative;
        width: 100%;
        height: 33px;
        display: flex;
        justify-content: center;
    }
    .box{ 
        width: 10%;
        height: 35px; 
        background-color: #fff;
        position: relative;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    } 
    .color{
        height: 100%;
        width: 100%;
        cursor: pointer;
        position: absolute;
         &:hover{
            height: 105%;
            width: 115%;
            z-index: 1;
            left: -2px;
            top: -1px;
            border: 1.5px solid white;
            box-shadow: 0px 0px 6px 0px rgba(91, 87, 87, 0.62);
        }
    }
    .box1{
        background: ${props => props.theme.palette.red};     
        cursor: pointer;
    }
    .box2{
        background:  ${props => props.theme.palette.blue};
        cursor: pointer;
    }
    .box3{
        background:  ${props => props.theme.palette.yellow};
        cursor: pointer;
    }
    .box4{
        background:  ${props => props.theme.palette.lightPink};
        cursor: pointer;
      
    }
    .box5{
        background:  ${props => props.theme.palette.orange};
        cursor: pointer;
    }
    .box6{
        background:  ${props => props.theme.palette.deepPink};
        cursor: pointer;
    }
    .box7{
        background:  ${props => props.theme.palette.green};
        cursor: pointer;
    }
    .box8{
        background:  ${props => props.theme.palette.black};
        cursor: pointer;
    }
    .box9{
        background:  ${props => props.theme.palette.plum};
        cursor: pointer;
    }
    .box10{
        background:  ${props => props.theme.palette.rebeccaPurple};
        cursor: pointer;
    }
    .box11{
        background:  ${props => props.theme.palette.gray};
        cursor: pointer;
    }
`;

export const BadgeLimit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .limit-icon{
         width: 20%;
        height: 20%;
    }
    .limit-text{
        font-family: 'Asap', sans-serif;
        color: red;
        text-transform: uppercase;
        font-size: 14px;
    }
`;
