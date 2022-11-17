from flask import Flask, render_template, jsonify, request
from dotenv import load_dotenv

import os
import mercadopago


app = Flask(__name__)
sdk = mercadopago.SDK(os.getenv('YOUR_ACCESS_TOKEN'))


@app.route('/')
def home():
   return render_template('index.html', public_key=os.getenv('YOUR_PUBLIC_KEY'))
if __name__ == '__main__':
   app.run()

@app.route('/process_payment', methods=['POST'])
def add_income():
    request_values = request.get_json()
    
    payment_data = {
        "transaction_amount": float(request_values["transaction_amount"]),
        "token": request_values["token"],
        "installments": int(request_values["installments"]),
        "payment_method_id": request_values["payment_method_id"],
        "issuer_id": request_values["issuer_id"],
        "payer": {
            "email": request_values["payer"]["email"],
            "identification": {
                "type": request_values["payer"]["identification"]["type"], 
                "number": request_values["payer"]["identification"]["number"]
            }
        }
    }

    payment_response = sdk.payment().create(payment_data)
    payment = payment_response["response"]

    print("status =>", payment["status"])
    print("status_detail =>", payment["status_detail"])
    print("id=>", payment["id"])

    return jsonify(payment), 200

