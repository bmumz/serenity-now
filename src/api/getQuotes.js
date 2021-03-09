import axios from 'axios';

const url = 'https://seinfeld-quotes.herokuapp.com/quotes';

export default {
  getQuotes() {
    return axios.get(url).then((response) => {
      let filteredQuotes = response.data.quotes.filter(
        (quote) =>
          quote.author === 'Elaine' ||
          quote.author === 'Jerry' ||
          quote.author === 'Kramer' ||
          quote.author === 'George'
      );

      return filteredQuotes;
    });
  },
};
