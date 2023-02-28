import { Header } from "../components";
function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default HeaderOnly;
