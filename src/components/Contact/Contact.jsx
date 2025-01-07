import image1 from "../../assets/crepes.png";
import { Button, Form, Input, Radio } from "antd";
import "./Contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-item-left">
            <img src={image1} alt="image" />
          </div>
          <div className="contact-item-right">
            <h5 className="contact-sub-title">{t("contactSubTitle")}</h5>
            <h2 className="contact-title">{t("contactTitle")}</h2>
            <Form form={form} className="contact-form">
              <Form.Item>
                <Input placeholder={t("name")} className="contact-input" />
              </Form.Item>
              <Form.Item>
                <Input placeholder={t("email")} className="contact-input" />
              </Form.Item>
              <Form.Item>
                <Input placeholder={t("message")} className="contact-input" />
              </Form.Item>
              <Form.Item>
                <Button className="contact-form-btn">{t("contactBtn")}</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
