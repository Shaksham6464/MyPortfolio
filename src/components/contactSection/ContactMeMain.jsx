import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-2 "
    >
      <h2 className="text-6xl text-black mb-10 text-center">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-white p-8 rounded-2xl md:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;