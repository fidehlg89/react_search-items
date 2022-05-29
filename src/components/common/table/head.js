import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Head = ({ headers }) => {
  return (
    <>
      <div>
        <Skeleton />
      </div>
      {headers.length > 0 ? (
        <thead>
          <tr>
            {headers.map((element, index) => (
              <th key={index}>{element}</th>
            ))}
          </tr>
        </thead>
      ) : (
        <h1>
          <Skeleton />
        </h1>
      )}
    </>
  );
};

export default Head;
