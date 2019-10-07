import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'

//AnimalManager holds each API fetch call for the animal database.
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

    deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => {
                AnimalManager.getAll()
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("ANIMAL LIST: ComponentDidMount");
        //Fetch call getAll() from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
            .then((animals) => {
                this.setState({
                    animals: animals
                })
            })
    }

    //Dipslays animal cards and buttons to the DOM.
    render() {
        console.log("ANIMAL LIST: Render");
        //Simple html building stuff
        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/animals/new") }}>
                        Admit Animal
                </button>
                </section>
                <div className="container-cards">
                    {this.state.animals.map(animal =>
                        <AnimalCard key={animal.id}
                            animal={animal}
                            deleteAnimal={this.deleteAnimal}
                            {...this.props}
                            />)}
                </div>
            </>
        )
    }
}

//<AnimalCard key is being declared here and the key is referenced in AnimalCard.js

export default AnimalList