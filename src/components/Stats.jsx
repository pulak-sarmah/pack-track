import PropTypes from "prop-types";

export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        <em>You have not add any item..</em>
      </p>
    );

  const numItem = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = Math.round((packed / numItem) * 100);

  return (
    <footer className="stats">
      {percent === 100 ? (
        <em> You Got Everything... </em>
      ) : (
        <em>
          You have {numItem} item in the list, and you have already packed {""}
          {packed} | ({percent}%)
        </em>
      )}
    </footer>
  );
}
Stats.propTypes = {
  items: PropTypes.array.isRequired,
};
