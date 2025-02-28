# Tarefa 1 - Contador com React e TypeScript 🧮

Este é um projeto de treinamento em desenvolvimento web que visa criar um contador interativo utilizando **React** e **TypeScript**. O objetivo é praticar conceitos fundamentais de React, como componentes, estado (`state`) e manipulação de eventos, além de aplicar boas práticas de tipagem com TypeScript.

Este projeto faz parte do programa **3035Teach** da **3035 Tech**, que capacita futuros programadores, com o intuito de aprimorar as habilidades de desenvolvimento web moderno.

Caso queira acessá-lo, clique [aqui](#) (link do projeto quando estiver hospedado).

## Descrição 📋

O objetivo deste projeto é demonstrar a minha evolução como desenvolvedor web durante o programa de capacitação **3035Teach**. O contador inclui as seguintes funcionalidades:

- **Incrementar**: Aumenta o valor do contador em 1. ➕
- **Decrementar**: Diminui o valor do contador em 1. ➖
- **Resetar**: Volta o valor do contador para 0. 🔄

## Tecnologias Utilizadas 🛠️

- **React**: Biblioteca JavaScript para construção de interfaces de usuário. ⚛️
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código. 📜
- **Vite**: Ferramenta de build rápida para projetos modernos. 🚀
- **CSS**: Estilização básica do componente. 🎨

## Estrutura de Diretórios 📂

A estrutura de diretórios do projeto é organizada da seguinte maneira:

```
Tarefa_2/
│
├── public/            # Arquivos públicos (ex.: index.html)
├── src/
│   ├── components/    # Componentes React
│   │   └── Counter.tsx  # Componente do contador
│   ├── App.tsx        # Componente principal da aplicação
│   ├── main.tsx       # Ponto de entrada da aplicação
│   └── styles.css     # Estilos globais
├── package.json       # Dependências e scripts do projeto
├── tsconfig.json      # Configuração do TypeScript
└── README.md          # Arquivo de documentação do projeto
```

### Detalhes

- **`Counter.tsx`**: Componente React que implementa a lógica do contador.
- **`App.tsx`**: Componente principal que renderiza o contador.
- **`main.tsx`**: Ponto de entrada da aplicação, onde o React é renderizado no DOM.
- **`styles.css`**: Arquivo de estilos CSS para a aplicação.
- **`tsconfig.json`**: Configuração do TypeScript para garantir tipagem estática.

## Como Usar 🚀

1. **Clone o Repositório**:
   Para começar, faça o clone do repositório para sua máquina local:
   ```bash
   git clone https://github.com/Felipecardosovargas/Tarefa_2.git
   ```

2. **Acesse o Diretório**:
   Navegue até o diretório do projeto clonado:
   ```bash
   cd Tarefa_2
   ```

3. **Instale as Dependências**:
   Instale as dependências necessárias usando o npm ou yarn:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. **Execute o Projeto**:
   Inicie o servidor de desenvolvimento com o Vite:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a Aplicação**:
   Abra o navegador e acesse o endereço indicado no terminal (geralmente `http://localhost:5173`).


## Funcionalidades do Contador 🎯

### Incrementar
- Clique no botão **"+"** para aumentar o valor do contador em 1.

### Decrementar
- Clique no botão **"-"** para diminuir o valor do contador em 1.

### Resetar
- Clique no botão **"Resetar"** para voltar o valor do contador para 0.


## Exemplo de Código do Contador

Aqui está um trecho do código do componente `Counter.tsx`:

```tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h1>Contador: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
};

export default Counter;
```


## Aprendizados 📚

Durante o desenvolvimento deste projeto, pude praticar e consolidar os seguintes conceitos:

- **Componentes React**: Criação e utilização de componentes funcionais.
- **Estado (`state`)**: Uso do hook `useState` para gerenciar o estado do contador.
- **TypeScript**: Aplicação de tipagem estática para garantir a segurança do código.
- **Manipulação de Eventos**: Uso de eventos como `onClick` para interações do usuário.
- **Vite**: Configuração e uso de uma ferramenta de build moderna.


## Contribuição 🤝

Se você quiser contribuir para este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
