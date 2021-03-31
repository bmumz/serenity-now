<template>
  <div>
    <form method="post" @submit.prevent="setHighscore" >
      <table>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        <tr>
          <th>
            <input
              type="text"
              maxlength="1"
              v-model="initials.first"
              ref="first"
              required
            />
            <input
              type="text"
              maxlength="1"
              v-model="initials.second"
              ref="next"
              required
            />
            <input
              type="text"
              maxlength="1"
              v-model="initials.third"
              ref="last"
              required
            />
          </th>
          <th>{{ getScore }}</th>
          <th>
   
            <button type="submit" class="text highlight">
              <h3 class="submit">Submit</h3>
            </button>
          </th>
        </tr>
      </table>
    </form>
  
  </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'AddHighscore',
  data() {
    return {
      initials: {
        first: '',
        second: '',
        third: '',
      },
    };
  },
  computed: { ...mapGetters(['getScore']) },
  mounted() {
    this.focusInput();
  },
  updated() {
    this.focusNext();
  },
  methods: {
    focusInput() {
      this.$refs.first.focus();
    },
    focusNext() {
      if (this.initials.first !== '') {
        this.$refs.next.focus();
      }
      if (this.initials.second !== '') {
        this.$refs.last.focus();
      }
    },
    setHighscore() {
      axios
        .post('https://serenity-now-leaderboard.herokuapp.com/highscores', {
          highscore: {
            name:
              this.initials.first + this.initials.second + this.initials.third,
            score: this.getScore,
          },
        })
        .then((response) => {
          console.log(response);
          this.initials='';
          this.$router.push('/serenity-now/highscores')
  
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
form {
  padding: 2rem 0;
}
table {
  min-width: 25vw;
  text-transform: uppercase;
}
input {
  background: black;
  width: 1.5rem;
  height: 1.5rem;
  color: rgba(255, 217, 0);
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  text-align: center;
}
.col {
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 1.2rem;
}



</style>
