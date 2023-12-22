export const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-0 w-full bg-acadia dark:bg-blackPearl py-[72px] text-center">
      <img
        src="/src/assets/footer/logo__secret-santa--small.svg"
        alt="Secret Santa logo small"
        className="relative mx-auto mb-16"
      />
      <p className="font-sans font-medium text-scotchMist">
        Copyright &copy;2023.{" "}
        <a
          href="https://alk3my.com"
          target="_target"
          className="underline hover:no-underline"
        >
          Alk3my
        </a>
        . All rights reserved
        <br />
        Terms &amp; Conditions . Privacy Policy . Disclaimers
      </p>
    </footer>
  );
};
