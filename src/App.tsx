import Button from "./components/Button";

export default function App() {
  const printSomething = () => {
    console.log("button clicked");
  };

  return (
    <>
      <Button
        themeColor="primary"
        themeSize="small"
        fontSize="xSmall"
        fontBold="large"
        shape="fullyRounded"
        isHover
        isActive
        onClick={printSomething}
        style={{ marginRight: "20px" }}
      >
        a
      </Button>
      <Button themeColor="secondary" isHover isActive>
        b
      </Button>
    </>
  );
}
