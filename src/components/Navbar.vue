<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-white shadow-transition"
      data-navbar-on-scroll="data-navbar-on-scroll">
      <div class="container"><router-link class="navbar-brand d-flex align-items-center fw-semi-bold fs-3 animate__animated animate__fadeIn" to="/">
          <p class="h3" style="font-family: 'Oswald', sans-serif;margin-bottom: 0px;">BUS MAYASARI BAKTI</p>
        </router-link>

        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto pt-2 pt-lg-0 font-base rounded">
            <li class="nav-item px-2" data-anchor="data-anchor">
              <router-link class="nav-link animate__animated animate__bounceIn " aria-current="page" to="/" style="animation-delay: calc(0.1s * 2);">Home</router-link>
            </li>
            <li class="nav-item px-2 " data-anchor="data-anchor"><router-link class="nav-link animate__animated animate__bounceIn" style="animation-delay: calc(0.2s * 2);" to="/fasilitas">Fasilitas</router-link>
            </li>
            <li class="nav-item px-2" data-anchor="data-anchor"><router-link class="nav-link animate__animated animate__bounceIn" to="/destinasi" style="animation-delay: calc(0.3s * 2);">Destinasi </router-link>
            </li>
            <li class="nav-item px-2" data-anchor="data-anchor"><router-link class="nav-link animate__animated animate__bounceIn" to="/tentang-kami" style="animation-delay: calc(0.4s * 2);">Tentang Kami
              </router-link>
            </li>
            <li class="nav-item px-2 " data-anchor="data-anchor"><router-link class="nav-link animate__animated animate__bounceIn" style="animation-delay: calc(0.45s * 2);" to="/berita">Berita</router-link>
            </li>
            <li class="nav-item px-2" data-anchor="data-anchor"><router-link class="nav-link animate__animated animate__bounceIn" to="/hubungi-kami" style="animation-delay: calc(0.48s * 2);">Hubungi Kami</router-link>
            </li>
          </ul>
          <form class="ps-lg-5">
            <!-- <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i> -->
            <button class="btn btn-outline-primary animate__animated animate__slideInRight" type="submit">
              <i class="fa fa-bus" aria-hidden="true"></i>
              Booking</button>
          </form>
        </div>
      </div>
    </nav>
</template>
<script>
    export default {
        name: 'PNavbar'
    }
</script>