import styled from "styled-components";
import { FaLock } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";





//ICONS
export const Check = styled(BsFillBagCheckFill)`
    color: #8E6C3A;
    width: 50px;
    height: 50px;

    @media (max-width: 740px){
        width: 35px;
        height: 35px;
    }
`
export const Card = styled(FaCreditCard)`
    color: #8E6C3A;
    width: 50px;
    height: 60px;

    @media (max-width: 740px){
        width: 35px;
        height: 35px;
    }
`

export const Truck = styled(FaTruckMoving)`
    color: #8E6C3A;
    width: 50px;
    height: 50px;

    @media (max-width: 740px){
        width: 35px;
        height: 35px;
    }
`

export const Insta = styled(BsInstagram)`
    color: #8E6C3A;
    width: 35px;
    height: 35px;
`

export const Face = styled(BsFacebook)`
    color: #8E6C3A;
    width: 35px;
    height: 35px;
`

export const Zap = styled(BsWhatsapp)`
    color: #8E6C3A;
    width: 35px;
    height: 35px;
`






export const Container = styled.div`
    position: relative;
    top: 50px;

    .div-carousel{
        display: flex;
        position: relative;

        img{
            @media (max-width: 740px){
             width: 100%;
             min-width: 1440px;
    }
        }

        h1{
            position: absolute;
            color: #fff;
            font-size: 40px;
            left: 200px;
            top: 180px;

            @media (max-width: 1190px){
                font-size: 30px;
                top: 130px;
                left: 150px;
        }

        @media (max-width: 945px){
                font-size: 25px;
                top: 120px;
                left: 120px;
        }

        @media (max-width: 755px){
            font-size: 15px;
            top: 95px;
            left: 100px;
        }
        }

        p{
            position: absolute;
            color: #fff;
            font-size: 20px;
            left: 200px;
            top: 250px;

            @media (max-width: 1190px){
            font-size: 14px;
            top: 180px;
            left: 150px;
        }

        @media (max-width: 945px){
            font-size: 10px;
            top: 160px;
            left: 120px;
        }

        @media (max-width: 755px){
            font-size: 8px;
            top: 120px;
            left: 100px;
        }

        }
    }

    .carousel-status{
        display: none;
    }

    .carousel .control-arrow, .carousel.carousel-slider .control-arrow {
    background: #333333;
    cursor: pointer;
    }

    .thumbs-wrapper{
        display: none;
    }

`

export const Header = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    z-index: 1;
    justify-content: space-evenly;
    align-items: center;
    background-color: #2C3145;
    width: 100%;
    height: 100px;

    a{
        text-decoration: none;
        color: #fff;
    }

    .paragraph-header{
        @media (max-width: 800px){
            display: none;
        }
    }

    .whats{
        background: #8E6C3A;
        border-radius: 5px;
        width: 180px;
        height: 40px;
        text-align: center;
        padding-top: 9px;

        &:hover{
            transform: scale(1.1);
            transition: 0.5s ease all;
    }

         &:active{
           opacity: .6;
    }
    }
`

export const ContainerService = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 150px;
    align-items: center;
    margin: 100px;

    @media (max-width: 740px){
        flex-direction: column;
        gap: 100px;
     }

    p{
        color: #8E6C3A;

    @media (max-width: 740px){
        font-size: 15px;
    }
    }
   
`

export const Others = styled.div`

    .div-others{
        background: #2C3145;
        color: #8E6C3A;
        text-align: center;
        width: 100%;
        height: 230px;
        padding-top: 70px;

        h1{
            font-size: 25px;

            @media (max-width: 775px){
            font-size: 20px;
        }

        }

        p{
            font-size: 20px;
            padding-bottom: 20px;

            @media (max-width: 775px){
            font-size: 15px;
        }

        }

        a{
            text-decoration: none;
            color: #8E6C3A;
        }
    }
`

export const About = styled.div`
    margin-top: 75px;

    .div-about{
        text-align: center;
    }

    p{
        color: #2C3145;
        margin-left: 180px;
        margin-right: 100px;
        word-wrap: normal;
        font-size: 20px;
        text-align: start;

        @media (max-width: 775px){
            flex-direction: column;
        }

        @media (max-width: 740px){
            margin-left: 10%;
            padding-top: 20px;
            margin-right: 20px;
        }
    }

    h1{
        color: #8E6C3A;
        margin-bottom: 5px;
        margin-left: 180px;

        @media (max-width: 740px){
            margin-left: 40%;
        }
    }

    .line{
        border-bottom: 3px solid #8E6C3A;
        width: 150px;
        margin-bottom: 20px;
        margin-left: 180px;

        @media (max-width: 740px){
            margin-left: 40%;
        }

    }

`

export const Contact = styled.div`
    margin-top: 75px;
    margin-bottom: 100px;

    .principal-div-contact{
        display: flex;

        @media (max-width: 1035px){
            flex-direction: column;
        }
    }

    .box-message{
        width: 300px;
        margin-left: 50px;
        border: 1px solid #8E6C3A;
        border-radius: 5px;
        padding-left: 15px;
        padding-top: 10px;
        font-size: 17px;
        outline: #8E6C3A;
        
    }

    h1{
        margin-left: 180px;
        color: #8E6C3A;
        margin-bottom: 5px;

        @media (max-width: 740px){
            margin-left: 40%;
        }
    }


    .line{
        border-bottom: 3px solid #8E6C3A;
        width: 150px;
        margin-bottom: 50px;
        margin-left: 180px;

        @media (max-width: 740px){
            margin-left: 40%;
        }
    }

    .line2{
        border-bottom: 3px solid #8E6C3A;
        width: 150px;
        margin-top: -35px;

        @media (max-width: 740px){
            margin-left: 10%;
        }
    }

    .div-contact{
        display: flex;
        flex-direction: column;
        margin-left: 200px;
        gap: 30px;
        border: 3px solid #8E6C3A;
        border-radius: 5px;
        width: 425px;
        height: 650px;

        @media (max-width: 1035px){
            margin-left: 30%;
        }
        @media (max-width: 785px){
            margin-left: 20%;
        }
        
        @media (max-width: 670px){
            margin-left: 17%;
        }

        @media (max-width: 580px){
            margin-left: 15%;
        }
        span{
            color: red;
            margin-top: -25px;
            margin-left: 55px;
            font-size: 13px;
        }

        input{
            width: 300px;
            height: 50px;
            padding-left: 10px;
            margin-left: 52px;
            margin-top: 20px;
            border: 2px solid #8E6C3A;
            border-radius: 5px;
            font-size: 17px;
            outline: none;
        }

        input[type=number]::-webkit-inner-spin-button { 
            -webkit-appearance: none; 
        }

        button{
            width: 250px;
            height: 40px;
            margin-left: 80px;
            background: #8E6C3A;
            border: none;
            color: #fff;
            cursor: pointer;
            border-radius: 10px;


            &:hover{
                opacity: .9;
            }

            &:active{
                opacity: .6;
            }
        }
    }

    .links-contact{
        display: flex;
        flex-direction: column;
        padding-left: 150px;
        padding-top: 30px;
        gap: 50px;

        .individual-contact{
            display: flex;
            gap: 20px;
            align-items: center;
        }

        a{
            text-decoration: none;
            font-size: 20px;
            color: #8E6C3A;
        }

        h2{
            color: #8E6C3A;


            @media (max-width: 1035px){
                margin-top: 40px;
        }

        @media (max-width: 740px){
            margin-left: 10%;
        }
        }
    }
`

export const Footer = styled.footer`
    background: #2C3145;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 150px;
    color: #fff;
    font-size: 13px;
`
