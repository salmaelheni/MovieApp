<template>
<div>
    <!-- Navbar -->
    <NavbarComponent/>
    <div class="container">
    <div class="col-6">
      <div class="card">
        <h2>Login</h2>
        <form @submit.prevent="Login()">
          <input v-model="username" type="text" placeholder="Username">
          <input v-model="password" type="password" placeholder="Password">
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>

  </div>
</div>
 

</template>

<script>
import axios from 'axios'
import NavbarComponent from '../../components/NavbarComponent.vue';
export default {
  name: 'LoginPage',
  components:{NavbarComponent},
  data() {
    return {
      username: '',
      password: '',
      token: '',
      request_token: ''
    }
  },
  router: {
    middleware: 'auth'
  },
  methods: {
    async Login() {
      if (this.username !== '' && this.password !== '') {
        const data = {
          username: this.username,
          password: this.password,

        };
        const tokenAccess = await axios.get(
          `https://api.themoviedb.org/3/authentication/token/new?api_key=c3973a7fdda35b0058bef3411c380b1d`
        )
        this.token = tokenAccess.data.request_token
        data.request_token = this.token
        // login process
        if (this.token !== '') {
          await axios.post(
            `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=c3973a7fdda35b0058bef3411c380b1d`, data
          )
            .then(response => {
              this.$store.commit('setUserToken', this.token)
              // eslint-disable-next-line no-console
              console.log(response.data);
              this.$router.push('/')
            })
            .catch(error => {
              // eslint-disable-next-line no-console
              console.error(error);
            });
        } else {
          // eslint-disable-next-line no-console
          console.error("no token was provided");
        }
      } else {
        alert("plz fill all the fields");
      }


    },
  },

}
</script>

<style  scoped>
.card {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}

h2 {
  margin-bottom: 30px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

input[type="submit"] {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>