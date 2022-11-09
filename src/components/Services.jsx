import * as C from '../home/styled'

export default function Services() {
    return (
        <C.ContainerService>
            <div>
                <C.Check />
                <p>Produtos Originais</p>
            </div>
            <div>
                <C.Card />
                <p>Parcelamos em até 12x vezes</p>
            </div>
            <div >
                <C.Truck />
                <p>Entregamos para todo o Brasil</p>
            </div>
        </C.ContainerService>
    )
}