const Map = () => {
  return (
    <section className="map__section">
      <div className="map__container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.716013947813!2d6.980056974473295!3d4.818747240623948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cfe780c9e9bf%3A0xea527a4ee931e4da!2sNigerian%20Stored%20Products%20Research%20Institute(NSPRI)!5e0!3m2!1sen!2sng!4v1776265657981!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Purpose Palm Oil Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
