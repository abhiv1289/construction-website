// Footer.jsx
import { footerLinks } from "../../data/footerData";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

        {/* Dynamic Columns */}
        {footerLinks.map((section, i) => (
          <div key={i}>
            <h3 className="font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:text-black cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* RIGHT SIDE (Office Info) */}
        <div className="col-span-2">
          <h3 className="font-semibold mb-3">Corporate Office</h3>
          <p className="text-sm leading-6">
            Brindavan, Plot no. 177, CST Road, Kalina,<br />
            Santacruz (East), Mumbai - 400 098,<br />
            Maharashtra, India
          </p>

          <p className="mt-3 text-sm font-medium">+91 22 6212 5000</p>

          <h3 className="font-semibold mt-6">Our Parent Company</h3>
          <p className="text-sm">Larsen & Toubro Limited</p>

          <h3 className="font-semibold mt-6">Our Companies</h3>
          <ul className="text-sm space-y-1">
            <li>L&T Finance Ltd</li>
            <li>L&T Finance Consultants Ltd</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM LEGAL */}
      <div className="border-t mt-10 py-6 text-center text-xs text-gray-600 px-6">
        <p>
          © L&T Finance Limited | Disclaimer | Privacy Policy | Sitemap | Notices
        </p>

        <p className="mt-3 max-w-4xl mx-auto leading-5">
          L&T Finance Ltd does not act as insurer or participate in underwriting the underlying risks.
        </p>
      </div>

    </footer>
  );
};

export default Footer;