import React from 'react';

class Type extends React.Component {
    typo = tipo => {
        switch (tipo) {
            case 'normal': return 'Normal';
            case 'fighting': return 'Lutador';
            case 'flying': return 'Voador';
            case 'poison': return 'Veneno';
            case 'ground': return 'Solo';
            case 'rock': return 'Pedra';
            case 'bug': return 'Inseto';
            case 'ghost': return 'Fantasma';
            case 'steel': return 'Aco';
            case 'fire': return 'Fogo';
            case 'water': return 'Agua';
            case 'grass': return 'Grama';
            case 'eletric': return 'Eletrico';
            case 'psychic': return 'Psiquico';
            case 'ice': return 'Gelo';
            case 'dragon': return 'Dragao';
            case 'dark': return 'Sombrio';
            case 'fairy': return 'Fada';
            default: return 'Desconhecido';
        }
    }
    render() {
        return (
            <div className={this.typo(this.props.type) + " col-6"}>
                <p>{this.typo(this.props.type)}</p>
            </div>
        )
    }
}
export default Type;