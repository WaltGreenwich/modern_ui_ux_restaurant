const FooterOverlay = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="h-[25%] bg-black opacity-90"></div>

      <div
        className="h-[75%] bg-cover bg-center bg-fixed opacity-80"
        style={{ backgroundImage: "url('assets/bg.png')" }}
      ></div>
    </div>
  );
};

export default FooterOverlay;
