import styled from "styled-components";
import check from "@/assets/Property 1=check.png";

const CheckboxWrapper = styled.div`
    display: flex; 
    align-items: center; 
    margin-top: 0.3em; 

    input[type="checkbox"]{
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        margin-right: 0.5em;
        border-radius:2px;
        border: 2px solid #323749;
        cursor: pointer;
    }
    input.checked {
        outline:none;
        background-color: ${(props) => props.color?props.color:"#00AE1C"};
        border: 2px solid ${(props) => props.color?props.color:"#00AE1C"};
        position: relative;
    }
    input.checked::before{
        content: url('${check}');
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    span{
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 13.44px;
        text-align: left;
        position:relative;
        top:-4px;
        left:10px;
    } 
`;
export default CheckboxWrapper;

//file