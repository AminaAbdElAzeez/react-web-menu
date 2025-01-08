import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      contact: "Contact Us",
      mainTitle:
        "Why stay <span>hungry</span> <br /> when <br /> you can order <span>now!</span>",
      mainDesc: "Download the Creb & Waffle <br/> food app now",
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
      branch1Desc: "1st Branch",
      branch1Address: "Inside Platz Club, Fifth Settlement, New Cairo",
      branch2Desc: "2nd Branch",
      branch2Address: "Al-Filal District, Omar Bin Al-Khattab Street",
      branch3Desc: "3rd Branch",
      branch3Address: "Shokry El-Quowatly St.,in front of East Edu. Admin",
      branch4Desc: "4th Branch",
      branch4Address: "The first elbahr street next to the tax building",
      branch5Desc: "5th Branch",
      branch5Address: "Said Street in front of the College of Commerce",
      branch6Desc: "6th Branch",
      branch6Address: "Al-Nadi Street (The Club Roundabout).",
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
      // card
      cardTitle1: "Branches",
      cardTitle2: "Menus",
      learn: "Learn More",

      cairoLink: "Cairo",
      zagazigLink: "Zagazig",
      tantaLink: "Tanta",
      almahalaLink: "Almahala",

      cairoMenu: "Cairo Menu",
      zagazigMenu: "Zagazig Menu",
      tantaMenu: "Tanta Menu",
      almahalaMenu: "Almahala Menu",

      cairoBranch: "Cairo Branch",
      zagazigBranch: "Zagazig Branch",
      tantaBranch: "Tanta Branch",
      almahalaBranch: "Almahala Branch",
      details: "Details",
      detailsBranch: "Details Branch",
    },
  },
  ar: {
    translation: {
      contact: "اتصل بنا",
      mainTitle:
        "لماذا تبقى <span>جائعا</span> <br /> عندما <br /> يمكنك الطلب <span>الان!</span>",
      mainDesc: " قم بتنزيل تطبيق الطعام الخاص بـ <br/> كريب & وافل الآن",
      crepes: "الكريب",
      waffles: "الوافلز",
      seaFood: "المأكولات البحرية",
      juices: "العصائر",
      aboutTitle: "نبذة عن <span>كريب & وافل </span>",
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
      branch1Desc: "الفرع الاول",
      branch1Address: "داخل نادي بلاتز، التجمع الخامس، القاهره الجديده",
      branch2Desc: "الفرع الثاني",
      branch2Address: "حي الفلل, شارع عمر بن الخطاب",
      branch3Desc: "الفرع الثالث",
      branch3Address: "شارع شكري القواتلي, أمام إدارة شرق التعليمية",
      branch4Desc: "الفرع الرابع",
      branch4Address: "أول شارع البحر بجوار عمارة الضرائب",
      branch5Desc: "الفرع الخامس",
      branch5Address: "شارع سعيد امام كلية تجاره",
      branch6Desc: "الفرع السادس",
      branch6Address: "شارع النادي (دوران النادي)",
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
      // card
      cardTitle1: "الفروع",
      cardTitle2: "القوائم",
      learn: "لمعرفة المزيد",

      cairoLink: "القاهرة",
      zagazigLink: "الزقازيق",
      tantaLink: "طنطا",
      almahalaLink: "المحلة",

      cairoMenu: "قائمة القاهرة",
      zagazigMenu: "قائمة الزقازيق",
      tantaMenu: "قائمة طنطا",
      almahalaMenu: "قائمة المحلة",

      cairoBranch: "فرع القاهرة",
      zagazigBranch: "فرع الزقازيق",
      tantaBranch: "فرع طنطا",
      almahalaBranch: "فرع المحلة",

      details: "تفاصيل",
      detailsBranch: "تفاصيل الفرع",
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
