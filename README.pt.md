# Card payment processing with Checkout Bricks

[Inglês](README.md) / [Español](README.es.md)

## :computer: Tecnologias

- [Python3](https://www.python.org/downloads/)
- [Flask](https://flask.palletsprojects.com/en/2.2.x/) 2.2.x

## 💡 Requisitos

- Python3 intalado no seu computador(siga as intruções de instalação [here](https://www.python.org/downloads/)).
- [Leia nossas instruções](https://www.mercadopago.com/developers/pt/docs/getting-started) sobre como criar uma aplicação no Painel de Desenvolvedores do Mercado Pago para obter a public key e o access token. Essas chaves irão te dar acesso às APIs do Mercado Pago.
- pipenv instalado no seu computado (siga as intruções de instalação [here](https://pipenv.pypa.io/en/latest/)).
- mercadopago library instalado no seu computador

```bash
pipenv install mercadopago
```

## :gear: Instalação

1. Clone o projeto.

```bash
git clone https://github.com/mercadopago/card-payment-bricks-sample-python.git
```

2. Acesse a pasta do projeto.

```bash
cd card-payment-bricks-sample-python
```

## 🌟 Como executar

1. Execute o seguinte comando::

```bash
pipenv run flask --debug run -h 0.0.0.0
```

2. Lembre-se de trocar os valores `YOUR_PUBLIC_KEY` e `YOUR_ACCESS_TOKEN` no arquivo de `.env` pelas [crendecias](https://www.mercadopago.com/developers/panel) s da sua conta.

3. Acesse a url http://127.0.0.1:5000 no seu browser.

### :test_tube: Testes

Em nossas [instruções de teste](https://www.mercadopago.com/developers/pt/docs/checkout-bricks/integration/integration-test) você irá encontrar **[cartões de crédito](https://www.mercadopago.com/developers/pt/docs/checkout-bricks/additional-content/test-cards)** que podem ser usados para simular o pagamento neste exemplo e um guia sobre como criar **usuários de teste**.

## :handshake: Contribuindo

Você pode contribuir com este projeto reportando problemas e bugs. Antes de abrir uma issue, leia nosso [código de conduta](CODE_OF_CONDUCT.md).

## :bookmark: Licença

MIT License. Copyright (c) 2021 - Mercado Pago <br/>
Para mais informações, consulte o arquivo [LICENSE](LICENSE).
