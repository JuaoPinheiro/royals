import Parfum1 from '../../assets/good.png'
import Parfum3 from '../../assets/one.png'
import Parfum4 from '../../assets/inv.png'







import * as C from './styles'


export default function Products() {

    return (
        <C.Products id='products'>
            <div className='container-1'>
                <img src={Parfum4} alt="" />
                <C.TextContainer2>
                    <h2>Invictus Victory</h2>
                    <p>O novo perfume importado masculino de Paco Rabanne da linha Invictus, desperta ainda mais a gana pela vitória e o sucesso. O Eau de Parfum extremo provoca um verdadeiro impacto sensorial. Neste duelo intenso, duas forças se enfrentam: a refrescância e a sensualidade.</p>
                    <a target="_blank" href='https://api.whatsapp.com/send?phone=5541997999847&text=Olá, gostaria de ver o catálogo da Royals Parfums.'>Solicite Catálogo</a>
                </C.TextContainer2>
            </div>

            <div className='container-2'>
                <C.TextContainer>
                    <h2>Good Girl</h2>
                   <p>O perfume Good Girl empodera as mulheres para que conquistem a cidade sem nunca deixarem sua essência de lado.
                    Com os sapatos certos, uma mulher pode conquistar o mundo.</p> 
                    <a target="_blank" href='https://api.whatsapp.com/send?phone=5541997999847&text=Olá, gostaria de ver o catálogo da Royals Parfums.'>Solicite Catálogo</a>
                </C.TextContainer>
                <img src={Parfum1} alt="" />
            </div>

            <div className='container-3'>
                <img src={Parfum3} alt="" />
                <C.TextContainer2>
                    <h2>One Million</h2>
                    <p>One Million líder de vendas, é um perfume que combina sensualidade e frescor. Ele tem o frescor da toranja, a menta e a tangerina vermelha como as primeiras notas que convidam a deixar-se seduzir.</p>
                    <a target="_blank" href='https://api.whatsapp.com/send?phone=5541997999847&text=Olá, gostaria de ver o catálogo da Royals Parfums.'>Solicite Catálogo</a>
                </C.TextContainer2>
            </div>
        </C.Products>
    )
}
