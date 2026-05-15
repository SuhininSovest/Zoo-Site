from flask import Flask, request
import os

app = Flask(__name__)

@app.route('/heal', methods=['POST'])
def heal():
    data = request.json
    if data and data.get('status') == 'firing':
        print("Авария обнаружена! Выполняю протокол восстановления...", flush=True)
        os.system("docker restart target_nginx")
        print("Nginx успешно перезапущен.", flush=True)
    return "OK", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)