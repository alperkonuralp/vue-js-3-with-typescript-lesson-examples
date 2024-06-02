# Vue.js 3

## Vue.js 3 Nedir?

- **Tanım**: Vue.js 3, kullanıcı arayüzleri geliştirmek için kullanılan açık kaynaklı bir JavaScript framework'üdür. Özellikle tek sayfa uygulamalar (SPA) geliştirmede yaygın olarak kullanılır.

### Temel Özellikler

- **Reactivity (Tepkisellik)**: Vue.js 3'ün reactivity sistemi, verilerde yapılan değişikliklerin otomatik olarak kullanıcı arayüzüne yansımasını sağlar.
- **Composition API**: Vue 3 ile gelen Composition API, daha iyi kod organizasyonu ve yeniden kullanılabilirlik sunar.
- **Performans İyileştirmeleri**: Vue.js 3, selefi olan Vue.js 2'ye göre daha hızlı ve daha hafif bir yapıya sahiptir.
- **Tree Shaking**: İhtiyaç duyulmayan kod parçalarının projeden çıkarılmasına olanak tanır, böylece son kullanıcıya sunulan kod miktarını azaltır.

### Vue.js 2 ile Karşılaştırma

- **Proxys Tabanlı Tepkisellik**: Vue.js 3, Vue.js 2'deki Object.defineProperty yerine Proxy kullanarak daha güçlü ve esnek bir tepkisellik sistemi sunar.
- **Fragments, Teleport, ve Suspense**: Daha önce mümkün olmayan bazı kullanıcı arayüzü yapıları ve desenleri destekler.

### Kullanım Alanları

- **Tek Sayfa Uygulamalar (SPA)**: Modern web uygulamalarının çoğunda kullanılan, kullanıcı deneyimini artıran tek sayfa uygulamaları.
- **Progressive Web Applications (PWA)**: Mobil cihazlarda hızlı ve duyarlı deneyimler sunmak için kullanılabilir.
- **Static Site Generation (SSG)**: Vue.js 3, Nuxt.js gibi araçlarla entegre edilerek statik web siteleri oluşturulabilir.

### Topluluk ve Ekosistem

- **Topluluk**: Geniş ve aktif bir topluluğa sahiptir. Birçok geliştirici tarafından desteklenir ve sürekli güncellemeler alır.
- **Ekosistem**: Vue Router, Vuex gibi resmi eklentiler ve Nuxt.js, Vuetify gibi üçüncü parti kütüphaneler ile geniş bir ekosisteme sahiptir.

### Geliştirme Deneyimi

- **Kolay Öğrenme Eğrisi**: Özellikle Vue CLI ve Vue Devtools gibi araçlar ile geliştirme deneyimi oldukça kullanıcı dostudur.
- **Dokümantasyon**: Vue.js'in kapsamlı ve anlaşılır dokümantasyonu, öğrenmeyi ve projelerde kullanmayı kolaylaştırır.

## Vue & Komponent Kavramı

### Komponent Nedir?

- **Tanım**: Komponentler, Vue.js uygulamalarının temel yapı taşlarıdır. Her biri, kendi veri ve davranışları ile bağımsız ve yeniden kullanılabilir parçalardır.
- **Tek Sayfa Uygulamalarda Rolü**: Her bir komponent, uygulamanın belirli bir bölümünü veya özelliğini temsil eder ve birlikte çalışarak tam işlevsel bir kullanıcı arayüzü oluşturur.

### Komponentlerin Temel Yapısı

- **Template**: HTML benzeri bir yapı kullanarak kullanıcı arayüzünü tanımlar.
- **Script**: JavaScript kodlarını içeren bölüm, burada veri ve metodlar tanımlanır.
- **Style**: Komponentin stil tanımlamaları, genellikle CSS kullanılarak yapılır.

### Temel Örnek

- **Kod Örneği**:
  ```vue
  <template>
    <div class="greeting">
      <h1>{{ message }}</h1>
    </div>
  </template>

  <script setup lang=”ts”>
  import { ref } from ‘vue’;

  const message = ref( 'Hello, Vue!' ); 
  </script>

  <style scoped>
  .greeting {
    font-size: 2em;
    color: blue;
  }
  </style>
  ```

### Komponent Türleri

- **Single File Components (SFC)**: .vue uzantılı dosyalar, template, script ve style bölümlerini aynı dosyada barındırır.
- **Global ve Yerel Komponentler**: Komponentler global olarak tüm uygulamada veya yerel olarak belirli bir komponent içinde kullanılabilir.

### Komponent İletişimi

- **Props**: Üst komponentten alt komponentlere veri aktarımı.
- **Events**: Alt komponentten üst komponentlere veri gönderimi.
- **State Management**: Komponentler arası iletişim için merkezi bir yapı.

### Komponentlerin Avantajları

- **Yeniden Kullanılabilirlik**: Aynı komponenti birden fazla yerde kullanarak kod tekrarını önler.
- **Modülerlik**: Uygulamanın farklı bölümlerini ayrı komponentlere ayırarak kodun daha okunabilir ve yönetilebilir olmasını sağlar.
- **Test Edilebilirlik**: Her bir komponenti ayrı ayrı test etmek, hataları bulmayı ve düzeltmeyi kolaylaştırır.

### Lifecycle Hooks

- **Tanım**: Komponentlerin yaşam döngüsünde belirli noktalarda çalıştırılan fonksiyonlardır.
- **Önemli Lifecycle Hooks**:
  - `created()`
  - `mounted()`
  - `updated()`
  - `destroyed()`

### Vue DevTools ile Komponent Yönetimi

- **Tanım**: Geliştirici araçları, komponentlerin durumunu ve yapısını incelemeyi kolaylaştırır.
- **Kullanım**: Vue DevTools kullanarak uygulamanızdaki komponentleri, state'leri ve event'leri takip edebilirsiniz.

### Özet

- **Komponentler**: Vue.js uygulamalarının temel yapı taşlarıdır ve her biri bağımsız ve yeniden kullanılabilir.
- **İletişim**: Props ve event'ler aracılığıyla komponentler arasında veri akışı sağlanır.
- **Yeniden Kullanılabilirlik ve Modülerlik**: Komponent tabanlı yaklaşım, uygulamaların daha yönetilebilir ve test edilebilir olmasını sağlar.
