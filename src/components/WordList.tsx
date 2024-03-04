import { useEffect, useState } from "react";

function WordList() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/flashcards")
      .then((response) => response.json())
      .then((json) => setWords(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="row">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Word</th>
                <th>Created At</th>
                <th>Edited At</th>
              </tr>
            </thead>
            <tbody>
              {words.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.word}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.editedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default WordList;
