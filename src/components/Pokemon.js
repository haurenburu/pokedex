import React from 'react';
import Type from './Type';

export default class Pokemon extends React.Component {

    constructor() {
        super();
        this.state = {
            id: null,
            name: null,
            types: 1,
            type1: null,
            type2: null,
            prev: null,
            next: null,
            height: null,
            weight: null,
            sprite: null,
        };
    }
    async componentDidMount() {
        const url = this.props.url;
        const res = await fetch(url);
        const pokemon = await res.json();
        

        this.setState({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.length,
            type1: pokemon.types[0].type.name,
            type2: null,
            next: 'https://pokeapi.co/api/v2/pokemon/'+(pokemon.id+1),
            height: pokemon.height,
            weight: pokemon.weight,
            sprite: pokemon.sprites.front_default
        });

        if(pokemon.types.length === 2){
            this.setState({
                type2: pokemon.types[1].type.name,
            })
        }
    }
    async prevPoke() {
        const url = 'https://pokeapi.co/api/v2/pokemon/'+(this.state.id-1);
        const res = await fetch(url);
        const pokemon = await res.json();
        

        this.setState({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.length,
            type1: pokemon.types[0].type.name,
            type2: null,
            prev: 'https://pokeapi.co/api/v2/pokemon/'+(pokemon.id-1),
            next: 'https://pokeapi.co/api/v2/pokemon/'+(pokemon.id+1),
            height: pokemon.height,
            weight: pokemon.weight,
            sprite: pokemon.sprites.front_default
        });

        if(pokemon.types.length === 2){
            this.setState({
                type2: pokemon.types[1].type.name,
            })
        }
    }
    async nextPoke() {
        const url = 'https://pokeapi.co/api/v2/pokemon/'+(this.state.id+1);
        const res = await fetch(url);
        const pokemon = await res.json();
        

        this.setState({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.length,
            type1: pokemon.types[0].type.name,
            type2: null,
            prev: 'https://pokeapi.co/api/v2/pokemon/'+(pokemon.id-1),
            next: 'https://pokeapi.co/api/v2/pokemon/'+(pokemon.id+1),
            height: pokemon.height,
            weight: pokemon.weight,
            sprite: pokemon.sprites.front_default
        });

        if(pokemon.types.length === 2){
            this.setState({
                type2: pokemon.types[1].type.name,
            })
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.sprite} alt="pokemon"></img>
                <div>id: {this.state.id}</div>
                <div>name: {this.state.name}</div>
                <Type type={this.state.type1} />
                {this.state.types === 2 ? <Type type={this.state.type2} /> : null}
                <div>height: {this.state.height}</div>
                <div>weight: {this.state.weight}</div>

                <p>{this.props.poke}</p>
                <button onClick={() => this.prevPoke()}>Prev</button>
                <button onClick={() => this.nextPoke()}>Next</button>
                {/* <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0" + this.state.id +".png"}></img> */}
            </div>
        );
    }
}