// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHeads: true, total: 0, heads: 0, tails: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        isHeads: true,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHeads: false,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {isHeads, total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {isHeads && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="t-pic"
            />
          )}
          {!isHeads && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="t-pic"
            />
          )}
          <button className="butt" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="r-container">
            <p className="res">Total:{total}</p>
            <p className="res">Heads:{heads}</p>
            <p className="res">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
