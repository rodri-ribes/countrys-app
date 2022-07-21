const express = require('express');

const router = '../../../api/src/routes/index.js'

it('when doing the Get method, it is expected to receive the object of a country', async () => {
    const res = await request(router).get('/contruies?name=Argentina');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe([{
        id: "ARG",
        name: "Argentina",
        flag: "https://flagcdn.com/w320/ar.png",
        continent: "South America",
        capital: "Buenos Aires",
        area: 2780400,
        subregion: "South America",
        population: 45376763,
        createdAt: "2022-07-09T21:56:40.198Z",
        updatedAt: "2022-07-09T21:56:40.198Z",
        activities: []
    }]);
  });