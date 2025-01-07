import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      contact: "Contact Us",
      mainTitle:
        "Why stay <span>hungry</span> <br /> when <br /> you can order <span>now!</span>",
      mainDesc: "Download the bella onoje’s <br/> food app now on",
      crepes: "Crepes",
      waffles: "Waffles",
      seaFood: "Sea Food",
      juices: "Juices",
      aboutTitle: "About <span>CREB & WAFFLE</span>",
      aboutDesc1:
        "Download our app from google play or app store and you don’t have to be worry about your food anymore. Download our app from google play or app store and you don’t have to be worry about your food anymore.",
      aboutDesc2:
        "Download our app from google play or app store and you don’t have to be worry about your food anymore.",
      menusSubTitle: "Special Dishes",
      menusTitle: "CREB & WAFFLE Menus",
      menuCairo: "MENU CAIRO",
      menuZagazig: "MENU Zagazig",
      menuTanta: "MENU Tanta",
      menuAlmahala: "MENU almahala",
      serviceTitle1: "Wide selection of <br/>restaurants",
      serviceTitle2: "Easy ordering <br/> process",
      serviceTitle3: "Fast delivery <br/> within 20 min",
      serviceDesc1:
        "Lorem ipsum dolor sit amet <br/> consectetur. Ornare massa <br/> nunc nibh tristique.",
      serviceDesc2:
        "Lorem ipsum dolor sit amet <br/> consectetur. Ornare massa nunc.",
      serviceDesc3:
        "Lorem ipsum dolor sit amet <br/> consectetur. Ornare massa <br/> nunc nibh.",
      branchTitle: "The Nearest Branch",
      branchDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue",
      branch1Desc: "3rd Branch",
      branch1Address: "Elnady Street, Elnady Square",
      branch2Desc: "3rd Branch",
      branch2Address: "Elnady Street, Elnady Square",
      branch3Desc: "2nd Branch",
      branch3Address: "Saied street in front of faculty of commerce",
      branch4Desc: "1st Branch",
      branch4Address: "El-Giesh st.",
      contactSubTitle: "Contact us",
      contactTitle: "Get in touch with us!",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      contactBtn: "Send Now",
      pocketTitle: "Put us in your pocket",
      pocketDesc:
        "Download our app from google play or app store and you don’t have to be worry about your food anymore.",
      aboutUs: "about Us",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      copyright: "Copyright ©2024 Apps Square",
    },
  },
  ar: {
    translation: {
      contact: "اتصل بنا",
      mainTitle:
        "لماذا تبقى <span>جائعا</span> <br /> عندما <br /> يمكنك الطلب <span>الان!</span>",
      mainDesc: " قم بتنزيل تطبيق الطعام الخاص بـ <br/> Bella Onoje الآن على",
      crepes: "الكريب",
      waffles: "الوافلز",
      seaFood: "المأكولات البحرية",
      juices: "العصائر",
      aboutTitle: "نبذة عن <span>CREB & WAFFLE</span>",
      aboutDesc1:
        "قم بتنزيل تطبيقنا من متجر جوجل بلاي أو متجر التطبيقات ولن تقلق بشأن طعامك بعد الآن. قم بتنزيل تطبيقنا من متجر جوجل بلاي أو متجر التطبيقات ولن تقلق بشأن طعامك بعد الآن.",
      aboutDesc2:
        " قم بتنزيل تطبيقنا من متجر جوجل بلاي أو متجر التطبيقات ولن تقلق بشأن طعامك بعد الآن.",
      menusSubTitle: "أطباق خاصة",
      menusTitle: "قائمة طعام كريب و وافل",
      menuCairo: "قائمة القاهرة",
      menuZagazig: "قائمة الزقازيق",
      menuTanta: "قائمة طنطا",
      menuAlmahala: "قائمة المحلة",
      serviceTitle1: "تشكيلة واسعة من المطاعم",
      serviceTitle2: "عملية الطلب سهلة",
      serviceTitle3: "تسليم سريع خلال 20 دقيقة",
      serviceDesc1:
        "العميل سعيد جدًا بمتابعته. أصبح تزيين القداس أمرًا محزنًا الآن.",
      serviceDesc2: "العميل سعيد جدًا بمتابعته. تزيين العجينة الآن.",
      serviceDesc3: "العميل سعيد جدًا بمتابعته. تزيين الكتلة الآن.",
      branchTitle: "أقرب فرع",
      branchDesc:
        "العميل مهم جدًا، العميل سيتبعه العميل. ولكن قيل أن الجعبة لم تكن كتلة من الواجبات المنزلية",
      branch1Desc: "الفرع الثالث",
      branch1Address: "شارع النادي، ميدان النادي",
      branch2Desc: "الفرع الثالث",
      branch2Address: "شارع النادي، ميدان النادي",
      branch3Desc: "الفرع الثاني",
      branch3Address: "شارع سعيد امام كلية التجارة",
      branch4Desc: "الفرع الأول",
      branch4Address: "شارع الجيش",
      contactSubTitle: "اتصل بنا",
      contactTitle: "تواصل معنا!",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك",
      contactBtn: "أرسل الآن",
      pocketTitle: "ضعنا في جيبك",
      pocketDesc:
        "قم بتنزيل تطبيقنا من Google Play أو App Store ولا داعي للقلق بشأن طعامك بعد الآن.",
      aboutUs: "معلومات عنا",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      copyright: "حقوق الطبع والنشر © 2024 Apps Square",
    },
  },
};

const savedLanguage = localStorage.getItem("language") || "en";
document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
