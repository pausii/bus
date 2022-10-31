<template>
  <div>
    <Header></Header>
    <Fasilitas></Fasilitas>
    <Destinasi></Destinasi>
    <About></About>
    <Berita></Berita>
    <WhyMe></WhyMe>
    <Hubungi></Hubungi>
    <Footer></Footer>
  </div>
</template>
<script>
// import NavHead from './Nav.vue'
import Header from './Header.vue'
import Fasilitas from './Fasilitas.vue'
import Destinasi from './Destinasi.vue'
import About from './About.vue'
import Berita from './Berita.vue'
import WhyMe from './WhyMe.vue'
import Hubungi from './Hubungi.vue'
import Footer from './Footer.vue'
export default {
  name: 'MyHome',
  components: {
    Header,
    Fasilitas,
    Destinasi,
    About,
    Berita,
    WhyMe,
    Hubungi,
    Footer
  }
}
</script>