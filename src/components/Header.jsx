import Logo from '../assets/par.png'
import * as C from '../home/styled'


export default function Header() {
    return (
        <C.Header className='menu'>
            <img src={Logo} alt="logo-royals" />
            <a className='paragraph-header' href="#start">Inicio</a>
            <a className='paragraph-header' href="#products">Produtos</a>
            <a  className='paragraph-header'href="#about">Sobre Nós</a>
            <a className='paragraph-header' href="#contact">Contato</a>
            <a className='whats' target="_blank" href='https://api.whatsapp.com/send?phone=5541997999847'>Nosso WhatsApp</a>
        </C.Header>
    )
}
