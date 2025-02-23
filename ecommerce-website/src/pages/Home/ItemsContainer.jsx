import ItemCard from "./ItemCard";

function ItemsContainer( props ) {
  const title = props.title;
  
  return (
    <>
      <div className="items-container">
        <h1 className="main-heading">{ title }</h1>
        <div className="items">
          <ItemCard />
          <div className="divider"></div>
          <ItemCard />
          <div className="divider"></div>
          <ItemCard />
        </div>
      </div>
    </>
  );
}
 
export default ItemsContainer;