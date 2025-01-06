import image1 from "../../assets/crepes.png";
import { Button, Form, Input, Radio } from "antd";
import "./Contact.css";

function Contact() {
  const [form] = Form.useForm();

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-item-left">
            <img src={image1} alt="image" />
          </div>
          <div className="contact-item-right">
            <h5 className="contact-sub-title">Contact us</h5>
            <h2 className="contact-title">Get in touch with us!</h2>
            <Form form={form} className="contact-form">
              <Form.Item>
                <Input placeholder="your Name" className="contact-input" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Your Email" className="contact-input" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Your Message" className="contact-input" />
              </Form.Item>
              <Form.Item>
                <Button className="contact-form-btn">Send Now</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
