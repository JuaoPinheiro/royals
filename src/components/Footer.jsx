import * as C from '../home/styled'
import Logo from '../assets/par.png'

export default function Footer(){
    return(
        <C.Footer>
            <img src={Logo} alt="" />
            © 2022 Royals Parfums - Todos os Direitos Reservados.
        </C.Footer>
    )
}