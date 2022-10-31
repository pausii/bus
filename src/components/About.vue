<template>
    <div id="Aboutx">
    <hr>
    <section id="about-us" class="mt-5" style="height: 100vh !important;">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <img class="img-fluid rounded shadow-lg wow animate__animated animate__pulse"
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt="bus">
          </div>
          <div class="col-lg-5 mb-4">
            <h5 class="fw-light fs-3 fs-lg-5 lh-sm mb-3 mt-sm-3 mt-lg-0 wow animate__animated animate__fadeIn">TENTANG KAMI</h5>
            <p class="text-left wow animate__animated animate__backInLeft">Mayasari Bakti (disingkat MYS) adalah salah satu perusahaan jasa yang bergerak dalam bidang transportasi yang beroperasi di Jabodetabek.
              </p>
              <p class="wow animate__animated animate__backInRight">Mayasari Bakti merupakan salah satu
                perusahaan bus yang memiliki trayek terbanyak dan termasuk ke dalam kategori Bus Kota. </p>
              <p class="wow animate__animated animate__backInUp">Saat ini, Mayasari Bakti mengoperasikan armada untuk layanan Transjabodetabek, Patas, Reguler dan Transjakarta.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>
<script>
export default {
    name: 'PAbout',
    mounted() {
      // get url path
      const path = this.$route.path;
      // if path is not / then id Aboutx margin top 30px
      if (path !== '/') {
        document.getElementById('Aboutx').style.marginTop = '80px';
      }
    }
}
</script>