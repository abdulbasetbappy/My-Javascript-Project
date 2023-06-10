const convertBtn = document.querySelector('#convert-btn');
const resultDiv = document.querySelector('#result');

convertBtn.addEventListener('click', () => {
  const amount = document.querySelector('#amount').value;
  const from = document.querySelector('#from').value;
  const to = document.querySelector('#to').value;
  var myHeaders = new Headers();
  myHeaders.append("apikey", "4kuf8s2CF6Ag12quZGFWjd9RUMP9hmpu");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.text())
    .then(data => {
      const rate = data.quotes[`${from}${to}`];
      const convertedAmount = amount * rate;
      resultDiv.innerHTML = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
    })
    .catch(error => {
      resultDiv.innerHTML = 'Error occurred while converting currency';
    });
});
