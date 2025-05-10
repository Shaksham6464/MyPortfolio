import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#https://www.linkedin.com/in/shaksham-shahi-sh6464/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Shaksham6464" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/_shaksham_shahi_/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;