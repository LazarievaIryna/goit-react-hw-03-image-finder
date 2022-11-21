export const Button = ({ onLoad }) => {
  return (
    <div className="Button-wrapper">
      <button
        className="Button"
        type="button"
        onClick={() => {
          onLoad();
        }}
      >
        Load more
      </button>
    </div>
  );
};
