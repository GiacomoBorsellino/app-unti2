function Footer() {
  let year: number = new Date().getFullYear();
  return (
    <>
      <footer className="flex flex-col justify-center items-center text-white text-semibold pt-2">
        <h1>Giacomo Borsellino {year} ™</h1>
      </footer>
    </>
  );
}

export default Footer;
