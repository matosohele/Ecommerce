import './Topo.css'

export default function Topo() {
    return (
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                    <p>10x sem juros!</p>
                </div>
                
            </div>

            <div className='topo'>
                <picture>
                    <a href='#'>
                        <img src='./logo.png' />
                    </a>
                </picture>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Roupas</a>
                    <a href="#">Carrinho</a>
                    <a href="#">Promoções</a>
                </nav>
            </div>
        </header>
    )
}