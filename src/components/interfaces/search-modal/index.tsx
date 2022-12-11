import BackdropWrapper from '@components/common/backdrop-wrapper';
import Input from '@components/common/Input';
import { useGetWeather } from '@hooks/useGetWeather';
import { FC, useState } from 'react';
import StyledSearchModal from './styles';

type SearchModalProps = {
  handleClose: () => void;
};
const SearchModal: FC<SearchModalProps> = ({ handleClose }) => {
  const [search, setSearch] = useState<string>('');
  const { getWeather, weather } = useGetWeather();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getWeather({ city: search });
  };
  return (
    <BackdropWrapper closeModal={() => handleClose()}>
      <StyledSearchModal>
        <h2>Search For Your City</h2>
        <form onSubmit={handleSubmit}>
          <Input
            name="search"
            placeholder="Sousse, Tunis, Paris, London, etc..."
            onChange={setSearch}
            required={true}
            label=""
            minLength={3}
          />
        </form>
      </StyledSearchModal>
    </BackdropWrapper>
  );
};

export default SearchModal;
