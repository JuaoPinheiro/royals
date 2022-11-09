import Logo from '../assets/par.png'
import * as C from '../home/styled'


export default function Header() {
    return (
        <C.Header>
            <img src={Logo} alt="logo-royals" />
            <a className='paragraph-header' href="#">Inicio</a>
            <a className='paragraph-header' href="#">Produtos</a>
            <a  className='paragraph-header'href="#">Sobre Nós</a>
            <a className='paragraph-header' href="#">Contato</a>
            <a className='whats' target="_blank" href='https://api.whatsapp.com/send?phone=5541984501617'>Nosso WhatsApp</a>
        </C.Header>
    )
}
