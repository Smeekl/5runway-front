import { ReactComponent as IconSearch } from '@svgIcons/iconSearch.svg';
import Input from '@components/Input/Input';
import { TSearchIcon, TSearchInput } from '@components/types';
import './style.css';

const SearchIcon = ({ onIconClick }: TSearchIcon) => (
  <IconSearch className="search__icon" onClick={onIconClick} />
);

const SearchInput = ({
  startIcon,
  endIcon = true,
  onIconClick,
  ...props
}: TSearchInput) => (
  <Input
    className="search__field"
    prefix={(startIcon && <SearchIcon onIconClick={onIconClick} />) || null}
    suffix={
      (!startIcon && endIcon && <SearchIcon onIconClick={onIconClick} />) ||
      null
    }
    {...props}
  />
);

export default SearchInput;
