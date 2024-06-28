import React from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  // Usar apenas array de objtos
  const produtos = [
    {
      nome: "Celular",
      preco: 1999,
      id: 0,
    },
    {
      nome: "Notebook",
      preco: 2399,
      id: 1,
    },
    {
      nome: "Tablet",
      preco: 1299,
      id: 2,
    },
  ];

  const [carrinho, setCarrinho] = useState([]);

  const adicionarCarrinho = (id) => {
    const filtrado = produtos.find((e) => e.id === id);
    // Muda o id do produto para ser removido na função removerProduto();
    filtrado.id = Math.random() * 1;
    setCarrinho(carrinho.concat(filtrado));
  };

  const removerProduto = (id) => {
    const remove = carrinho.filter((e) => e.id !== id);
    setCarrinho(remove);
  };

  return (
    <>
      <h1>Estoque</h1>
      <section className="produtos">
        {produtos.map((item, index) => (
          <div key={index} className="card">
            <h2>{item.nome}</h2>
            <p>{item.preco.toFixed(2)}</p>
            <p>id: {item.id}</p>
            <button onClick={() => adicionarCarrinho(item.id)}>comprar</button>
          </div>
        ))}
      </section>

      <section className="carrinho">
        <div>
          <h2>Carrinho</h2>
          <button onClick={() => setCarrinho([])}>
            remover tudo do carrinho
          </button>
        </div>

        <div className="total">
          <h2>Total</h2>
          {/* Reduce percorre o array 'carrinho' e soma todos os valores */}
          <p>R$ {carrinho.reduce((valor, item) => valor + item.preco, 0)},00</p>
        </div>
      </section>

      {/* Produtos */}
      {carrinho.map((item, index) => (
        <div key={index} className="card">
          <h2>{item.nome}</h2>
          <p>{item.preco.toFixed(2)}</p>
          <p>id: {item.id}</p>
          <button onClick={() => removerProduto(item.id)}>remover</button>
        </div>
      ))}
    </>
  );
}
