import React, { Component } from 'react';
import axios from 'axios';

export default class PlayGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: null,
        };
    }

    getGameData = () => {
        const gameId = this.props.match.params.gameId;
        
        axios({
            url: `http://localhost:6996/api/game/${gameId}`,
            method: 'GET'
        }).then(response => {
            this.setState({ game: response.data.game });
        }).catch(error => {
            console.log(error);
        })
    }

    updateGameData = (newGame) => {
        const gameId = this.props.match.params.gameId;

        axios({
            url: `http://localhost:6996/api/game/${gameId}`,
            method: 'PUT',
            data: {
                scores: newGame.scores,
            },
        }).then(response => {
            this.setState({ game: response.data.game });
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.getGameData();
    }

    renderPlayerName = () => {
        const players = this.state.game.players;
        
        return players.map((item, index) => {
            return <th key={index} scope="col">{item}</th>
        });
    }

    updatePlayerScore = (value, playerIndex, rowIndex) => {
        const newGame = this.state.game;

        // scores = [
        //     [0,0,0,0], //row
        //     [0,0,0,0], //row
        //     [0,0,0,0], //row
        //     [0,0,0,0], //row
        // ]
        newGame.scores[rowIndex][playerIndex] = value;

        // this.setState({ game: newGame });
        this.updateGameData(newGame);
    }

    renderGameRow = () => {
        const scores = this.state.game.scores;
        const players = this.state.game.players;

        return scores.map((gameRow, rowIndex) => {
            const row = players.map((item, playerIndex) => {
                return (
                    <td key={playerIndex}>
                        <input
                            value={gameRow[playerIndex]}
                            type="number"
                            className="form-control"
                            onChange={(event) => {
                                const value = event.target.value;

                                this.updatePlayerScore(value, playerIndex, rowIndex);
                            }}
                            // style={{
                            //     width: '50px'
                            // }}
                        />
                    </td>
                );
            });
            // players = [ player 1, player 2, player 3, player 4 ]
            // gameRow = [ player 1 score, player 2 score, player 3 score, player 4 score ]
            return (
                <tr key={rowIndex}>
                    <th scope="row">Round {rowIndex + 1}</th>
                    {row}
                </tr>
            );
        });
    }

    addNewRow = () => {
        const newGame = this.state.game;

        newGame.scores.push([0,0,0,0]);

        // this.setState({ game: newGame });
        this.updateGameData(newGame);
    }

    render() {
        console.log(this.state.game);

        if (!this.state.game) return "Loading...";

        return (
            <div className="my-3">
                {/* {this.state.message} */}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            {this.renderPlayerName()}
                        </tr>
                        <tr>
                            <th scope="col">Sum of Score(0)</th>
                            <th scope="col">0</th>
                            <th scope="col">0</th>
                            <th scope="col">0</th>
                            <th scope="col">0</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGameRow()}
                    </tbody>
                </table>
                <div className="text-center">
                    <button onClick={this.addNewRow} className="btn btn-danger">Add new row</button>
                </div>
            </div>
        )
    }
}
