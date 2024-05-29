function InfoContainer({ location }: { location: string }) {
  return (
    <div className="flex gap-4 flex-col md:flex-row width_container py-12 md:py-20 border-b border-light-gray">
      <div className="flex flex-col gap-6 w-full md:w-2/6">
        <h4 className="bold_heading">{location} Head Office</h4>
        <div className="flex flex-col gap-12">
          <span>
            <h5 className="bold_heading">Address:</h5>
            <p className="text-site-gray">
              75 Tower Court Kernersville, NC 27284 PO Box
              <br className="hidden sm:block" /> 6658 Rockhild SDT 2505
            </p>
          </span>
          <span>
            <h5 className="bold_heading">Phone:</h5>
            <p className="text-site-gray">+1 (238) 456 7894</p>
          </span>
          <span>
            <h5 className="bold_heading">Email:</h5>
            <p className="text-site-gray">
              contact@example.com
              <br />
              support@example.com
            </p>
          </span>

          <button className="solid_btn">GET APPOINTMENT</button>
        </div>
      </div>
      <div className="w-full md:w-4/6">
        <img src="/images/contact/map.png" alt="map" />
      </div>
    </div>
  );
}

export default InfoContainer;
