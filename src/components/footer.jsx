import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaCommentDots, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    window.scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#455E86] text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-left">
        <button className="bg-gray-200 text-[#455E86] px-4 py-2 rounded-lg mb-4">Contact</button>
        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <FaPhone /> +662 470 9850
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> 126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร 10140
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> webadmin@sit.kmutt.ac.th
          </p>
          <p className="flex items-center gap-2">
            <FaCommentDots /> @sit.kmutt
          </p>
          <div className="flex gap-4 text-xl mt-2">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
}
