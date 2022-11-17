# Procesamiento de pagos con tarjeta a través de Checkout Bricks

[English](README.md) / [Português](README.pt.md)

## :computer: Tecnologías

- [Python3](https://www.python.org/downloads/)
- [Flask](https://flask.palletsprojects.com/en/2.2.x/) 2.2.x

## 💡 Requisitos

- Python3 instalado (sigue las instrucciones de descarga [aquí](https://www.python.org/downloads/)).
- [Lee nuestras instrucciones](https://www.mercadopago.com/developers/es/docs/getting-started) sobre cómo crear una aplicación en el Panel de Desarrolladores de Mercado Pago para obtener la public key y el access token. Estas llaves te darán acceso a las API de Mercado Pago.
- pipenv instalado (sigue las instrucciones de descarga [aquí](https://pipenv.pypa.io/en/latest/)).
- mercadopago library intalador

```bash
pipenv install mercadopago
```

## :gear: Instalación

1. Clona el proyecto.

```bash
git clone https://github.com/mercadopago/card-payment-bricks-sample-python.git
```

2.  Accede a la carpeta del proyecto.

```bash
cd card-payment-bricks-sample-python
```

## 🌟 Como ejecutar

1. Execute o seguinte comando::

```bash
pipenv run flask --debug run -h 0.0.0.0
```

2. Recuerda cambiar los valores de `YOUR_PUBLIC_KEY` y `YOUR_ACCESS_TOKEN` en `.env` archivar por las [credenciales](https://www.mercadopago.com/developers/panel) de su cuenta.

3. Accede a http://127.0.0.1:5000 en tu navegador.

### :test_tube: Pruebas

En nuestras [instrucciones de prueba](https://www.mercadopago.com/developers/es/docs/checkout-bricks/integration/integration-test) encontrarás **[tarjetas de crédito](https://www.mercadopago.com/developers/es/docs/checkout-bricks/additional-content/test-cards)** que se pueden utilizar para simular el pago de este ejemplo, junto con una guía sobre cómo crear **usuarios de prueba**.

## :handshake: Contribuyendo

Puedes contribuir a este proyecto informando problemas y bugs. Antes de abrir una contribución, lee nuestro [código de conducta](CODE_OF_CONDUCT.md).

## :bookmark: Licencia

MIT License. Copyright (c) 2021 - Mercado Pago <br/>
Para obtener más información, consulte el archivo [LICENSE](LICENSE).
