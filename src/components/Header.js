import PropTypes from 'prop-types';
import Button from './Button';





const Header = ({title,onAdd,showAdd}) => {
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add' } onClick={onAdd} />
    </header>
  )
}

// CSS in JS
// const headingStyle = {
//   color : 'white',
//   backgroundColor : 'green',
// }

Header.defaultProps = {
    title: 'OrganizeIt'
}


Header.propTypes = {
  title : PropTypes.string.isRequired,

}
export default Header