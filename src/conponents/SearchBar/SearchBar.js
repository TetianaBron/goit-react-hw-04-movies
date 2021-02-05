import './SearchBar.scss';
import PropTypes from 'prop-types';

// export default class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func,
//   };

//   state = {
//     query: "",
//   };

//   handleQueryChange = event => {
//     this.setState({ query: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.query.trim() === '') {
//         toast("Введите что-то.");
//       return;
//     }

//     this.props.onSubmit(this.state.query);
//     // this.setState({ query: "" });
//   };

//   render() {
//     return (
//       <div className="Searchbar">
//             <form onSubmit={this.handleSubmit} className="SearchForm">
//                 <input
//                  className="SearchFormInput"
//                  type="text"
//                  name="query"
//                  value={this.state.query}
//                  onChange={this.handleQueryChange}
//                  autoComplete="off"
//                  autoFocus
//               />
//           <button type="submit" className="SearchFormButton">
//             Search
//             </button>
//            </form>
//       </div>
//     );
//   }
// }

const Searchbar = ({ handleSubmit, handleChange, value }) => {
  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          className="SearchFormInput"
          type="text"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className="SearchFormButton">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};
