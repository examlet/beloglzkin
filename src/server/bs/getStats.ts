export default defineEventHandler(event => {
    r = fetch(`${config.API_URL}/getStat`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          date: new Date(),
          opt: event.query
        })
      })
        .then((res) => {
          if (!res.ok) {
            console.log('res not ok')
          } else {
            return res.json();
          }
        }).then((data) => {
          window.open(`${data['form_url']}`, '_self');
        }).catch(e => console.log('Connection error', e));
    return r;
})