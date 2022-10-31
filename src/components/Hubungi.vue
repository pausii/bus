<template>
    <div id="PHubungi" class="text-center">
        <hr v-if="hu == false">
        <div v-if="hu">
          <h1>Hubungi Kami</h1>
          <p class="p-2">Anda bisa menghubungi kami melalui kontak yang tertera di bawah ini</p>
        </div>
    <section id="hubungi" style="background-color: #ebebeb !important; overflow: hidden !important">
      <div class="row" style="overflow: hidden">
        <div class="col-6 bg-primary d-none d-md-block" style="background-image: url(./assets/img/gallery/kontak.jpg);padding: 0;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d253828.88230764208!2d106.5722061772541!3d-6.253679656103418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-6.2561966!2d106.57019299999999!4m5!1s0x2e69ed9ffbdb101d%3A0xfc303db1b9921a39!2skantor%20mayasari%20bakti!3m2!1d-6.3178306!2d106.86452129999999!5e0!3m2!1sid!2sid!4v1656721374611!5m2!1sid!2sid" style="border:0;width: 100%;height: 100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="col" style="padding: 0">
          <div class="col-12 row" style="margin:0;">
            <div class="col-6 py-5 text-center bg-dark wow animate__animated animate__bounceIn">
              <i class="fa fa-map-marker" aria-hidden="true" style="font-size: 30px"></i><br><br>
              <b class="h5 text-light">Alamat</b><br>
              <p class="text-muted"> Jl. Raya Bogor No.KM. 24 No. 71, RT.2/RW.7, Susukan, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13750</p>
            </div>
            <div class="col-6 py-5 text-center bg-light wow animate__animated animate__bounceIn">
              <i class="fa fa-comments" aria-hidden="true" style="font-size: 30px"></i><br><br>
              <b class="h5 text-dark">Telephone</b><br>
              Mobile : 08121219545 <br>
Phone : 0218009545
            </div>
            <div class="col-6 py-5 text-center bg-light wow animate__animated animate__bounceIn">
              <i class="fa fa-envelope" aria-hidden="true" style="font-size: 30px"></i><br><br>
              <b class="h5 text-dark">Email</b><br>
              info@bus-mayasari.co.id <br><br><br><br>
            </div>
            <div class="col-6 py-5 text-center bg-dark wow animate__animated animate__bounceIn">
              <i class="fa fa-telegram" aria-hidden="true" style="font-size: 30px"></i><br><br>
              <b class="h5 text-light">Telegram</b><br>
              <p class="text-muted">@Bus_Mayasari_Bakti</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>
<script>
export default {
    name: 'PHubungi',
    data() {
        return {
            hu: false
        }
    },
    mounted() {
      // get url path
      const path = this.$route.path;
      if (path !== '/') {
        this.hu = true
        document.getElementById('PHubungi').style.setProperty("margin-top", "90px", "important")
      }
    }
}
</script>