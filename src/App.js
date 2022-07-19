import React, { Component } from "react";
export default class App extends Component {
  state = {
    pessoas: [
      {
        nome: "Jésus",
        idade: 25,
        curso: "Moda",
        descricao: "Perfeito",
        religiao: "evangelico",
        bairro: "Caju"
      },
      {
        nome: "Andressa",
        idade: 24,
        curso: "Audivisual",
        descricao: "Inteligente",
        religiao: "catolica",
        bairro: "Bonsucesso"
      },
      {
        nome: "Stella",
        idade: 22,
        curso: "EngMat",
        descricao: "Divertida",
        religiao: "umbandista",
        bairro: "Iraja"
      }
    ]
  };

  render() {
    return (
      <nav>
        {this.state.pessoas.map((item) => (
          <section className="card">
            <ul className="map-list">
              <li>
                {item.nome}, {item.idade}, {item.religiao}
              </li>
            </ul>
            <p>{item.descricao}</p>
            <button>Saiba+</button>
          </section>
        ))}
      </nav>
    );
  }
}
