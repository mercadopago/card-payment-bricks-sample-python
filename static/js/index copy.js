const mercadoPagoPublicKey = document.getElementById("mercado-pago-public-key").value;
const mercadopago = new MercadoPago(mercadoPagoPublicKey);
let cardPaymentBrickController;

async function loadPaymentForm() {
    const productCost = document.getElementById('amount').value;
    const settings = {
        initialization: {
            amount: productCost,
        },
        callbacks: {
            onReady: () => {
                console.log('brick ready')
            },
            onError: (error) => {
                alert(JSON.stringify(error))
            },
            onSubmit: (cardFormData) => {
                proccessPayment(cardFormData)
            }
        },
        locale: 'en',
        customization: {
            paymentMethods: {
                maxInstallments: 5
            },
            visual: {
                style: {
                    theme: 'dark',
                    customVariables: {
                        formBackgroundColor: '#1d2431',
                        baseColor: 'aquamarine'
                    }
                }
            }
        },
    }

    const bricks = mercadopago.bricks();
    cardPaymentBrickController = await bricks.create('cardPayment', 'mercadopago-bricks-contaner__PaymentCard', settings);
};

const proccessPayment = (cardFormData) => {
    fetch("/process_payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cardFormData),
    })
    .then(response => {
        return response.json();
    })
    .then(result => {
        if(!result.hasOwnProperty("error_message")) {
            document.getElementById("payment-id").innerText = result.id;
            document.getElementById("payment-status").innerText = result.status;
            document.getElementById("payment-detail").innerText = result.detail;
            $('.container__payment').fadeOut(500);
            setTimeout(() => { $('.container__result').show(500).fadeIn(); }, 500);
        } else {
            alert(JSON.stringify({
                status: result.status,
                message: result.error_message
            }))
        }
    })
    .catch(error => {
        alert("Unexpected error\n"+JSON.stringify(error));
    });
}

// Handle transitions
document.getElementById('checkout-btn').addEventListener('click', function(){
    $('.container__cart').fadeOut(500);
    setTimeout(() => {
        loadPaymentForm();
        $('.container__payment').show(500).fadeIn();
    }, 500);
});

document.getElementById('go-back').addEventListener('click', function(){
    $('.container__payment').fadeOut(500);
    setTimeout(() => { $('.container__cart').show(500).fadeIn(); }, 500);
});

// Handle price update
function updatePrice(){
    let quantity = document.getElementById('quantity').value;
    let unitPrice = document.getElementById('unit-price').innerText;
    let amount = parseInt(unitPrice) * parseInt(quantity);

    document.getElementById('cart-total').innerText = '$ ' + amount;
    document.getElementById('summary-price').innerText = '$ ' + unitPrice;
    document.getElementById('summary-quantity').innerText = quantity;
    document.getElementById('summary-total').innerText = '$ ' + amount;
    document.getElementById('amount').value = amount;
};



document.getElementById('quantity').addEventListener('change', updatePrice);
updatePrice();