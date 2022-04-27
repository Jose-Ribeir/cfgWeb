const client = require('../../api-cfg/models/connection.js')
const express = require('express');
const {log} = require("debug");
const app = express();


client.connect();

const client = require("../../api-cfg/models/connection");
const getGames = (request, response) => {
    client.query('SELECT * FROM software where software_is_game=true', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })

}

const getApps = (request, response) => {
    client.query('SELECT * FROM software where software_is_game=false', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}