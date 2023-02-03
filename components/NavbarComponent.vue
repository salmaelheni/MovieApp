<template>
    <div>
        <!-- Navbar -->
        <header>
            <nav>
                <NuxtLink :to="{ name: 'index' }" class="brand">ANGEL MOVIE</NuxtLink>
                <ul class="nav-links">
                    <li>
                        <NuxtLink :to="{ name: 'index' }" class="link">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ name: 'recommendation-recommend' }" class="link">Recommendations</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ name: 'login-loginPage' }" class="link">Login</NuxtLink>
                    </li>
                    <li>
                      <button class="link" @click="logout" >Logout</button>
                    </li>
                </ul>
                <button class="toggle-btn">
                    <span class="bar">DD</span>
                    <span class="bar">DD</span>
                    <span class="bar">FF</span>
                </button>
            </nav>
        </header>
    </div>
</template>



<script>
export default {
  methods:{
    logout() {
      this.$store.commit('clearToken')
      this.$router.push('/login/loginPage')
    }
  }

}

</script>
<style>


nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #c92502;
}

.brand {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-right: 2rem;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links .link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.toggle-btn {
  display: none;
  background-color: #c92502;
  color: white;
  padding: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .toggle-btn {
    display: block;
  }
}

.bar {
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 5px;
  border-radius: 10px;
}
</style>