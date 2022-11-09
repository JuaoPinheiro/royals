import * as C from '../home/styled'
import IconInsta from '../assets/insta.png'
import IconFace from '../assets/face.png'



export default function Others() {
    return (
        <C.Others>
            <div className='div-others'>
                <h1>Entre muitos outros produtos presentes em nosso catálogo</h1>
                <p>venha conhecer um pouco mais sobre nós!</p>
                <a target='_blank' href="https://www.instagram.com/royalsparfums/"><img src={IconInsta} alt="icone-instagram" /></a>
                <a target='_blank' href="https://www.facebook.com/royalsparfums"><img src={IconFace} alt="icone-instagram" /></a>
            </div>
        </C.Others>
    )
}