import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';
import '../stylesheets/Filters.scss';

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="containerFilter">
      <h3 className="containerFilter__title">Look for your favorite RickMortCharacter!</h3>
      <FilterByName handleFilter={props.handleFilter} name={props.name} />
      <FilterBySpecie handleFilter={props.handleFilter} specie={props.specie} />
    </form>
  );
};
export default Filters;
