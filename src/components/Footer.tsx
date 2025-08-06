export function Footer() {
  return (
    <footer
      className="mt-3"
      style={{
        borderTop: "1px solid #dee2e6",
      }}
    >
      <div className="d-flex flex-column  justify-content-start container">
        <div
          className="d-flex flex-row  justify-content-start"
          style={{
            gap: "32px",
            paddingTop: "48px",
            paddingBottom: "48px",
          }}
        >
          <img
            src="/assets/logotipo-LBC-transparente.png"
            alt="Logo"
            height={32}
            width={169}
          />
          <p className="mb-0">
            Exercício desenvolvido por: <span>Lourenço Sofécia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
