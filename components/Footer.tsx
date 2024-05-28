import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="width_parent flex-col bg-site-blue pt-12">
      <div className="width_container text-white flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-4 lg:gap-8 mx-auto text-center lg:text-left">
        <div className="w-full md:w-[48%] lg:w-1/4">
          <h4 className="font-monteserat font-bold text-xl my-8">
            Build With Urban Nest
          </h4>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in ipsum id orc.
          </p>
          <p>
            Mon - Sat 8:00 - 17:30,
            <br /> Sunday - CLOSED
          </p>
        </div>

        <div className="w-full md:w-[48%] lg:w-1/4">
          <h4 className="font-monteserat font-bold text-xl my-8">
            Our Services
          </h4>
          <p className="hover:text-site-yellow hover:cursor-pointer">
            Chemical Engineering Projects
          </p>
          <p className="hover:text-site-yellow hover:cursor-pointer">
            Mining Engineering Construction
          </p>
          <p className="hover:text-site-yellow hover:cursor-pointer">
            Engineering Welding Engineering
          </p>
          <p className="hover:text-site-yellow hover:cursor-pointer">
            Welding Engineering
          </p>
          <p className="hover:text-site-yellow hover:cursor-pointer">
            Space Program XYZ
          </p>
        </div>

        <div className="w-full md:w-[48%] lg:w-1/4">
          <h4 className="font-monteserat font-bold text-xl my-8">
            Office in Canada
          </h4>
          <p className="mb-8">
            7300-7398 Colonial Rd,
            <br />
            Brooklyn, NY 11209
          </p>

          <p>
            (123) 1234-567-8901
            <br />
            (123) 1234-567-8902
            <br />
            office@example.com
            <br />
            contact@example.com
          </p>
        </div>

        <div className="w-full md:w-[48%] lg:w-1/4">
          <h4 className="font-monteserat font-bold text-xl my-8">
            Our Locations
          </h4>
          <p>
            United States
            <br />
            Australia
            <br />
            Canada
            <br />
            Europe
          </p>
        </div>
      </div>

      <div className="w-full border-t border-site-gray width_parent mt-12">
        <div className="width_container text-white flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center py-12">
          <p>Copyright © {new Date().getFullYear()} Construction Company</p>
          <div className="text-site-yellow text-2xl flex gap-6">
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faSquareInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
