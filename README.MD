# Card payment processing with Checkout Bricks

[Português](README.pt.md) / [Español](README.es.md)

## :computer: Technologies

- [Python3](https://www.python.org/downloads/)
- [Flask](https://flask.palletsprojects.com/en/2.2.x/) 2.2.x

## 💡 Requirements

- Python3 install on your computer(follow the download instructions [here](https://www.python.org/downloads/)).
- [Read our instructions](https://www.mercadopago.com/developers/en/docs/getting-started) on how to create an application at the Mercado Pago Developer Panel in order to acquire your public key and access token. They will grant you access to Mercado Pago's public APIs.
- pipenv install on yout computer(follow the download instructions [here](https://pipenv.pypa.io/en/latest/)).
- mercadopago library install on your computer

```bash
pipenv install mercadopago
```

## :gear: Installation

1. Clone the project.

```bash
git clone https://github.com/mercadopago/card-payment-bricks-sample-python.git
```

2. Go to the project's folder.

```bash
cd card-payment-bricks-sample-python
```

## 🌟 How to run it

1. Run the following command to start the application:

```bash
pipenv run flask --debug run -h 0.0.0.0
```

2. Remember to replace the values of `YOUR_PUBLIC_KEY` and `YOUR_ACCESS_TOKEN` on `.env` file with the corresponding [credentials](https://www.mercadopago.com/developers/panel) from your account.

3. Navigate to http://127.0.0.1:5000 in your browser.

### :test_tube: Testing

On our [testing instructions](https://www.mercadopago.com/developers/en/docs/checkout-bricks/integration/integration-test) you'll find **[credit cards](https://www.mercadopago.com/developers/en/docs/checkout-bricks/additional-content/test-cards)** that can be used along with this sample and a guide on how to create **test users**.

## :handshake: Contributing

You can contribute to this project by reporting problems and bugs. Before opening an issue, make sure to read our [code of conduct](CODE_OF_CONDUCT.md).

## :bookmark: License

MIT License. Copyright (c) 2021 - Mercado Pago <br/>
For more information, see the [LICENSE](LICENSE) file.
