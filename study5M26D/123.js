const express = require('express');
const { fstat } = require('fs');
const fs = require('fs');

const axios = require('axios');
const cheerio = require('cheerio');

const iconv = require('iconv-lite');
const {syncBuiltinESMexports} = require('module');

const app = express();

app.get('/axios',  (req,res) => {

    axios.get("https://www.naver.com/").then((response) => {
        //console.log(response);
        const htmlContent = response.data
        //console.log(htmlContent);
        const crol = cheerio.load(htmlContent);
        //#NM_THEME_CONTAINER > div:nth-child(3) > div > ul > li:nth-child(5) > a.theme_info > strong
        let pachi = crol('a.theme_info > strong').text();
        console.log(pachi);
    });
    // res.write(`<h1>i hate java, i wanna crush world...</h1>`);
    res.end();
});

app.get('/end', (req,res) => {

    res.write(`<h1>MERONGMERONG</h1>`);
    res.end();
});


app.get('/readFile', (req, res) => {
    fs.readFile('./12345.txt', (err, data) => {
        if(err) throw err;
        res.end(data.toString());
    });
});

app.listen(5227, () => {
    console.log('http://localhost:5227')
    console.log('http://127.0.0.1:5227')
});