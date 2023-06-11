from App import app, db

if __name__ == '__main__':
    #linux
    app.run(host="0.0.0.0",port=5140,debug=True)
    #win
    # app.run(debug=True)
