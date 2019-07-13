import scrapeIt from 'scrape-it'

import request from 'request'

exports.handler = async (event, context, callback) => {
  request('https://www.hltv.org/matches?event=4500', async function (error, response, body) {
    console.error('error:', error)
    const data = await scrapeIt.scrapeHTML(body, {
      id: '.header h1',
      name: '.eventname',
      date: 'tbody .eventdate',
      image: {
        selector: '.event-img',
        attr: 'src'
      },
      days: {
        listItem: '.match-day',
        data: {
          name: '.standard-headline',
          matches: {
            listItem: 'a',
            data: {
              score: '.result-score',
              type: '.map.map-text',
              team1: {
                data: {
                  name: 'td:nth-child(2) .team',
                  image: {
                    selector: 'td:nth-child(2) .logo',
                    attr: 'src'
                  }
                }
              },
              team2: {
                data: {
                  name: 'td:nth-child(4) .team',
                  image: {
                    selector: 'td:nth-child(4) .logo',
                    attr: 'src'
                  }
                }
              }
            }
          }
        }
      }
    })
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data)
    })
  })
}
