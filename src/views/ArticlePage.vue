<template>
  <div>
    <main class="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <ArticleHeader :article="article" />
      <ArticleBody :article="article" />
      <ArticleActions />
    </main>
    <RelatedArticles />
  </div>
</template>

<script setup>
import ArticleHeader from '../components/article/ArticleHeader.vue'
import ArticleBody from '../components/article/ArticleBody.vue'
import ArticleActions from '../components/article/ArticleActions.vue'
import RelatedArticles from '../components/article/RelatedArticles.vue'

const article = {
  category: 'Эдийн засаг',
  readTime: 8,
  title: 'Монгол Улсын гадаад өрийн стратеги ба 2024 оны эдийн засгийн төлөв байдал',
  author: 'Б. Гантулга',
  authorRole: 'Ахлах редактор, Эдийн засгийн тоймч',
  authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBByPaTf7vYGSDy58i5Sl72PpsLgZgHjSn-RndQkK67YVT5ROSDGvCgEBf9IqPf76KnCxW-VN910R8dY2rG_VxTokPrcueblFoLiChgZ_IByddVZdR3Dq0mX0eTaTRFDcGBLhQCbiBzkyCWgbB_iVSyaetR-qAGS2wkITsSPyI4HvOW-PRsVO6OjTrhKF24eWIEJzvtr7SyI1bIUhXOMOU2Y_ZW4SISbTz96Ig2c5FyDUjlK7TpgP8a-QdcNooz74VR11lvF_h2kw',
  authorAlt: 'Journalist headshot',
  date: '2024.05.20',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoljrRabrbezlWGpyOa_bI-SxfADS9Yn6w3d3SA32PGC7PVHncBy3CLkljnMEt-5rlNTZL0IWvwSemkmxzRlQgVRAC2x0EdNpya3dsa6ti-GyTemwpXs24MlXN6BT2S6fMOvCw4af0x4rtopXUtVkAIpYupBzYgLQrTEuLRF1pevm_NiGGuguZC2fVu84gjP22BQdmqo_0WehUaqsxbMaAjMKGSFS-DB1YdkI1Jj6YYWne9zBV7zRLZ8rgYgo2HQALVlfJmsJSW2c',
  imageAlt: 'Mongolian Stock Exchange building at sunrise',
  imageCaption: 'Гэрэл зургийг: А. Бат-Эрдэнэ',
  lead: 'Өнгөрсөн арван жилийн хугацаанд Монгол Улсын эдийн засгийн гол хөшүүрэг болсон гадаад өрийн асуудал өнөөдөр ч анхаарлын төвд байна. Сүүлийн статистик мэдээллээр гадаад өр төлбөр тодорхой хэмжээнд буурсан үзүүлэлттэй байгаа ч дэлхийн зах зээл дээрх түүхий эдийн үнийн хэлбэлзэл эрсдэл дагуулсаар байна.',
  paragraphs: [
    'Эдийн засгийн шинжээчдийн үзэж байгаагаар, ойрын хоёр жилийн хугацаанд хийгдэх өрийн зохицуулалтууд нь манай улсын ирээдүйн 10 жилийн хөгжлийн чиг хандлагыг тодорхойлно. Ялангуяа уул уурхайн салбарын орлогоос хамааралтай төсвийн тогтолцоо нь гадаад өрийг хугацаанд нь төлөхөд тодорхой дарамт учруулж болзошгүйг Олон Улсын Валютын Сангаас сануулж байна.',
    'Иймд Засгийн газраас гаргаж буй бодлогын шийдвэрүүд нь зөвхөн өнөөгийн нөхцөл байдлыг бус, ирэх үеийн санхүүгийн тогтвортой байдлыг харгалзсан байх шаардлагатай юм.',
    'Нүүрс болон зэсийн экспорт сүүлийн улиралд түүхэн дээд хэмжээнд хүрсэн нь валютын нөөцийг нэмэгдүүлж, төгрөгийн ханшийг тогтворжуулахад чухал үүрэг гүйцэтгэв. Гэвч БНХАУ-ын эдийн засгийн өсөлт саарч байгаа нь манай улсын экспортын гол түншийн хувьд эрсдэлт хүчин зүйл болж байна.',
    'Дүгнэж хэлэхэд, Монгол Улс эдийн засгийн хувьд "сорилтын үе"-ийг амжилттай давж байгаа ч урт хугацааны тогтвортой байдлыг хангахын тулд бүтцийн өөрчлөлт, төрөлжилтийг яаравчлах шаардлага тулгарч байна. Ирэх оны төсвийн төсөлд эдгээр асуудлуудыг хэрхэн тусгах нь эдийн засагчдын гол хүлээлт болоод байна.',
  ],
  quote: {
    text: 'Бид зөвхөн өнөөдрийн төлбөрийг бус, хойч үедээ үлдээх санхүүгийн дархлааг бодож төлөвлөлтөө хийх шаардлагатай байна.',
    source: 'Сангийн яамны мэргэжилтний хэлсэн үгнээс',
  },
  subheading: 'Түүхий эдийн экспортын нөлөө',
  stats: [
    { label: 'Валютын нөөц (2024)', value: '$5.2 Тербум', change: '↑ 12% өсөлт', positive: true },
    { label: 'Инфляцийн түвшин', value: '8.4%', change: '↓ 2.1% бууралт', positive: false },
  ],
}
</script>
