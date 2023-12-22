import { Footer } from "../../components/Footer";

type AuthLayoutProps = {
  children?: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className="bg-auth min-h-screen min-w-screen bg-silverTree dark:bg-nileBlue bg-[center_top] bg-no-repeat bg-[length:1440px_auto] min-[1440px]:bg-[length:100%_auto]">
        <img
          src="/src/assets/login/logo__secret-santa.svg"
          alt="Secret Santa login Background"
          className="mx-auto mb-24 w-[460px] pt-24"
        />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
