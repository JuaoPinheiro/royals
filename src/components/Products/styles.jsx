import styled from 'styled-components'


export const Products = styled.div`

    .container-1{
        display: flex;
        align-items: center;
        gap: 50px;
        background: #d9d9d9;

        img{
            height: 500px;
            border-radius: 3px;
            padding-left: 80px;

            @media (max-width: 1155px){
                height: 400px;
         }

         @media (max-width: 860px){
                height: 300px;
         }

         @media (max-width: 690px){
                height: 200px;
         }

        }
    }

    .container-2{
        display: flex;
        align-items: center;
        gap: 50px;
        background: #ebf6f8;

        img{
            height: 500px;
            padding-right: 100px;
            border-radius: 3px;

            @media (max-width: 1155px){
                height: 400px;
         }

         @media (max-width: 860px){
                height: 300px;
         }

         @media (max-width: 690px){
                height: 200px;
         }

        }
        }

        .container-3{
        display: flex;
        align-items: center;
        gap: 50px;
        background: #ffffec;

        img{
            height: 500px;
            padding-right: 100px;
            border-radius: 3px;

            @media (max-width: 1155px){
                height: 400px;
         }

         @media (max-width: 860px){
                height: 300px;
         }

         @media (max-width: 690px){
                height: 200px;
         }

        }
        }
`

export const TextContainer = styled.div`
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding-left: 100px;

            h2{
                font-size: 30px;
                @media (max-width: 1155px){
                    font-size: 20px;
                }

                @media (max-width: 860px){
                    font-size: 15px;
                }

                @media (max-width: 785px){
                    font-size: 10px;
                }

                @media (max-width: 690px){
                    font-size: 8px;
                }
            }

            p{
                word-wrap: normal;
                font-size: 18px;
                @media (max-width: 1155px){
                    font-size: 15px;
                }

                @media (max-width: 860px){
                    font-size: 10px;
                }

                @media (max-width: 785px){
                    font-size: 9px;
                }

                @media (max-width: 690px){
                    font-size: 7px;
                }

                @media (max-width: 550px){
                    font-size: 5px;
                }
            }

            a{
                text-decoration: none;
                color: #fff;
                background: #2C3145;
                border-radius: 5px;
                width: 160px;
                height: 45px;
                font-size: 14px;
                text-align: center;
                padding-top: 12px;
                margin-top: 40px;

                @media (max-width: 1155px){
                    width: 130px;
                    height: 40px;
                    font-size: 11px;
                }

                @media (max-width: 785px){
                    width: 100px;
                    height: 30px;
                    font-size: 8px;
                    padding-top: 10px;
                    margin-top: 20px;
                }

                @media (max-width: 690px){
                    width: 80px;
                    height: 20px;
                    font-size: 7px;
                    padding-top: 6px;
                    margin-top: 3px;
                }

                &:hover{
                   transform: scale(1.2);
                   transition: 0.5s ease all;
                }

                &:active{
                    opacity: .6;
                }
            }  
`


export const TextContainer2 = styled.div`
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding-right: 100px;

            @media (max-width: 580px){
            padding-right: 20px;
        }

            h2{
                font-size: 30px;
                @media (max-width: 1155px){
                    font-size: 20px;
                }

                @media (max-width: 860px){
                    font-size: 15px;
                }

                @media (max-width: 785px){
                    font-size: 10px;
                }

                @media (max-width: 690px){
                    font-size: 8px;
                }
            }

            p{
                word-wrap: normal;
                font-size: 18px;
                @media (max-width: 1155px){
                    font-size: 15px;
                }

                @media (max-width: 860px){
                    font-size: 10px;
                }

                @media (max-width: 785px){
                    font-size: 9px;
                }
            
                @media (max-width: 690px){
                    font-size: 7px;
                }

                @media (max-width: 550px){
                    font-size: 5px;
                }

                
            }

            a{
                text-decoration: none;
                color: #fff;
                background: #8E6C3A;
                border-radius: 5px;
                width: 160px;
                height: 45px;
                font-size: 14px;
                text-align: center;
                padding-top: 12px;
                margin-top: 40px;

                @media (max-width: 1155px){
                    width: 130px;
                    height: 40px;
                    font-size: 11px;
                }

                @media (max-width: 785px){
                    width: 100px;
                    height: 30px;
                    font-size: 8px;
                    padding-top: 10px;
                    margin-top: 20px;
                }

                @media (max-width: 690px){
                    width: 80px;
                    height: 20px;
                    font-size: 7px;
                    padding-top: 6px;
                    margin-top: 3px;
                }

                &:hover{
                   transform: scale(1.2);
                   transition: 0.5s ease all;
                }

                &:active{
                    opacity: .6;
                }
            }  
`