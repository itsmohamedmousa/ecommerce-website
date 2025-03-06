import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const category = searchParams.get('category');

  return (
    <>
      <div>
        <h1>Search Results for: {query}</h1>
        <h1>Category: {category}</h1>
      </div>
    </>
  );
}

export default Search;
