<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://academy.openlab.sk/homepage">
        <img
          src="https://academy.openlab.sk/img/openacademy.bf0f5a12.svg"
          width="112"
          height="28"
        />
      </a>

      <router-link
        class="navbar-item is-active"
        :class="{ 'is-tab': $route.path === '/' }"
        to="/"
      >
        Home
      </router-link>

      <router-link
        class="navbar-item is-active"
        :class="{ 'is-tab': $route.path === '/deleted' }"
        to="/deleted"
      >
        Deleted tasks
      </router-link>
    </div>
  </nav>
  <div class="container mt-6 is-flex is-justify-content-center">
    <RouterView />
  </div>
</template>

<style lang="scss">
html {
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image: radial-gradient(#444cf7 0.5px, transparent 0.5px),
    radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}
</style>
