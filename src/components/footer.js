function Footer() {
  const yr = new Date();
  const options = {
    year : "numeric"
  }

  const yrText = yr.toLocaleDateString("en-US", options);
  return (
    <div className="footer">Raunak Roy {yrText}</div>
  );
}

export default Footer;
