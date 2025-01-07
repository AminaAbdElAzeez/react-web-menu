import image1 from "../../assets/apatshy.png";
import image2 from "../../assets/fyagra.png";
import image3 from "../../assets/totshy.png";
import image4 from "../../assets/friday.png";
import image5 from "../../assets/steek.png";
import image6 from "../../assets/steek.png";
import image7 from "../../assets/chocolate.png";
import image8 from "../../assets/footer.png";

function Zagazig() {
  return (
    <>
      <header>
        <div className="container">
          <h2 className="title">MENU ZAGAZIG</h2>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="menu">
            <div className="menu-left">
              <div className="menu-item">
                <div className="menu-item-title item1">
                  <h2>
                    <span>mixes</span>
                    <span>مكسات</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li>
                    <span>150</span>
                    <span>مكس & تشيز</span>
                  </li>
                  <li>
                    <span>150</span>
                    <span>مشوي صدور</span>
                  </li>
                  <li>
                    <span>110</span>
                    <span>أباتشي</span>
                  </li>
                  <li>
                    <span>110</span>
                    <span>شيش طاووق</span>
                  </li>
                  <li>
                    <span>110</span>
                    <div className="menu-item-new">
                      <span>new</span>
                      <span>
                        <span className="cold">بارد /</span>
                        <span className="hot">حار</span>
                      </span>
                    </div>
                    <span>شيش طاووق</span>
                  </li>
                  <li>
                    <span>110</span>
                    <div className="menu-item-new po2lz">
                      <span>new</span>
                      <span>
                        <span className="cold">بارد /</span>
                        <span className="hot">حار</span>
                      </span>
                    </div>
                    <span>بقلظ</span>
                  </li>
                  <li>
                    <span>110</span>
                    <span>شيش طاووق</span>
                  </li>
                  <li>
                    <span>110</span>
                    <span>أباتشي</span>
                  </li>
                  <li>
                    <span>150</span>
                    <span>مشوي صدور</span>
                  </li>
                </ul>
                <div className="menu-item-img">
                  <img src={image1} alt="Menue" />
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-title item1">
                  <h2>
                    <span>Sea Food</span>
                    <span>سي فود</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li>
                    <span>150</span>
                    <span>جمبري مشوي</span>
                  </li>
                  <li>
                    <span>150</span>
                    <span>فياجيرا</span>
                  </li>
                </ul>
                <div className="menu-item-img">
                  <img src={image2} alt="Menue" />
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-title item1">
                  <h2>
                    <span>Sweet</span>
                    <span>الحلو</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li>
                    <span>35</span>
                    <span>توتشي فراولة</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>توتشي لوتس</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>توتشي فستق</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>توتشي شيكولاته نوتيلا</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>توتشي شيكولاته بلجيكي</span>
                  </li>
                </ul>
                <div className="menu-item-img">
                  <img src={image3} alt="Menue" />
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-title item2">
                  <h2>
                    <span>ADD</span>
                    <span>اضافات</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li>
                    <span>35</span>
                    <span>كومبو ماشين</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>كومبو كانز</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>كول سلو</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>باكت بطاطس</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>باكت بطاطس كرسبي</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>علبة صوص جبنة شيدر</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>علبة بطاطس جبنة شيدر</span>
                  </li>
                </ul>
              </div>
              <div className="menu-item">
                <div className="menu-item-title item1">
                  <h2>
                    <span>beverages</span>
                    <span>مشروبات</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li>
                    <span>150</span>
                    <span>مياه معدنية</span>
                  </li>
                  <li>
                    <span>150</span>
                    <span>بيبسي ماشين</span>
                  </li>
                  <li>
                    <span>110</span>
                    <span>كانز</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu-right">
              <div className="menu-item">
                <div className="menu-item-title item2">
                  <h2>
                    <span>Chicken</span>
                    <span>الدجاج</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li>
                    <span>150</span>
                    <div className="menu-item-new znger">
                      <span>
                        <span className="cold">بارد /</span>
                        <span className="hot">حار</span>
                      </span>
                    </div>
                    <span>زنجر سوبربريم</span>
                  </li>
                  <li>
                    <span>150</span>
                    <span>مشوي صدور</span>
                  </li>
                  <li>
                    <span>110</span>
                    <span>شيش طاووق</span>
                  </li>
                  <li>
                    <span>110</span>
                    <span>كورن بلو</span>
                  </li>
                </ul>
                <div className="menu-item-img">
                  <img src={image4} alt="Menue" />
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-title item2">
                  <h2>
                    <span>Meat</span>
                    <span>اللحم</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li>
                    <span>150</span>
                    <span>كورون بيف</span>
                  </li>
                  <li>
                    <span>150</span>
                    <span>سجق</span>
                  </li>
                  <li>
                    <span>110</span>
                    <span>تكساس برجر</span>
                  </li>
                  <li>
                    <span>110</span>
                    <span>ستيك</span>
                  </li>
                </ul>
                <div className="menu-item-img">
                  <img src={image5} alt="Menue" />
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-title item2">
                  <h2>
                    <span>Breakfast</span>
                    <span>الفطار</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li>
                    <span>35</span>
                    <span>بطاطس</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>سموكد بيف</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>سموكد تركي</span>
                  </li>
                </ul>
                <div className="menu-item-img">
                  <img src={image6} alt="Menue" />
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-title item1">
                  <h2>
                    <span>WAFFLE</span>
                    <span>الوافل</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li>
                    <span>35</span>
                    <span>فراولة</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>لوتس</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>فستق</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>شكولاته لوتيلا</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>شكولاته بلجيكي</span>
                  </li>
                </ul>
                <div className="menu-item-img">
                  <img src={image7} alt="Menue" />
                </div>
              </div>
              <div className="menu-item">
                <div className="menu-item-title item2">
                  <h2>
                    <span>ADD</span>
                    <span>اضافات</span>
                  </h2>
                  <div className="line"></div>
                </div>
                <ul className="menu-item-list">
                  <li className="add-item">
                    <div className="add-span">
                      <span>35</span>
                      <span>اضافة دجاج</span>
                    </div>
                    <p>.بانيه عادي/بانيه حار/مشوي صدور/ شيش/رومي مدخن</p>
                  </li>
                  <li className="add-item">
                    <div className="add-span">
                      <span>35</span>
                      <span>اضافة لحوم</span>
                    </div>
                    <p>.هوت دوج / برجر / سجق/ روزيف</p>
                  </li>
                  <li>
                    <span>35</span>
                    <span>اضافة بطاطس</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>اضافة جبنة موتزاريلا</span>
                  </li>
                  <li>
                    <span>35</span>
                    <span>اضافة صوص جبنة شيدر</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="footer-2">
        <div className="container">
          <img src={image8} alt="footer" />
        </div>
      </div>
    </>
  );
}

export default Zagazig;
