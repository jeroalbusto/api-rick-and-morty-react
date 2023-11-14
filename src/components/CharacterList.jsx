import { useEffect, useState } from "react";
import Character from "./Character";
import { FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";

const NavPage = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-4">
      {props.page > 1 && (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => props.setPage(props.page - 1)}
          >
          Page: {props.page - 1}
            <br />
            <FaArrowLeftLong size={20} color="white" />
        </button>
      )}  
      <p>Page: {props.page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page +1)}
      >
        Page: {props.page+1}
        <br />
        <FaArrowRightLong size={20} color="white"/>
      </button>
    </div>
  );
};



const CharacterList = () => {

  const [character, setCharacter] = useState([]);

  const [page, setPage] = useState(1);

  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacter(data.results);
    }

    fetchData();
  }, [page]);


  return (
      <div className="container">
        <NavPage page={page} setPage={setPage} />


      
        <div className="row">
          {character.map((p) => {
            return (
              <div className="col-md-3" key={p.id}>
                <Character p={p} />
              </div>
            );
          })}
        </div>

    </div>
  );
};

export default CharacterList;
