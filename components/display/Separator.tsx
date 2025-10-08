type Props = {
  background?: string;
  direction?: "up" | "down";
};

function Separator(props: Props) {
  const { background = "#D9D9D9", direction = "up" } = props;
  return (
    <div
      className="w-full h-[50px] lg:h-[100px] "
      style={{
        clipPath:
          direction == "down"
            ? "polygon(100% 0, 0 0, 50% 100%)"
            : "polygon(50% 0%, 0% 100%, 100% 100%)",
        backgroundColor: background,
      }}
    ></div>
  );
}

export default Separator;
