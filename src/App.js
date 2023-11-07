import React, {useState} from 'react';
import './App.css';
import PostalCodeInput from './component/PostalCodeInput/PostalCodeInput';
import LocationInfo from './component/LocationInfo/LocationInfo';

function App() {

  const [locationData, setLocationData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [countryCode, setCountryCode ] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLocation = async (countryCode, inputValue) => {
    setLoading(true);
    setLocationData('');
    setError('');
    setCountryCode(countryCode)

    try {
      const url = `https://api.zippopotam.us/${countryCode}/${inputValue}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }      
        const data = await response.json();
        setLocationData(data);

    }
   catch (error) {
      console.log("Error in fetching:", error);
      setError(error);
    }
    setLoading(false);
  };

  const handleClear = () => {
    setLocationData(null);
    setInputValue('');
  }

  const handleOptions = (e) => {
    const targetValue = e.target.value;
    console.log(targetValue)
    setCountryCode(targetValue);
  }
return (
  <div className="App">
    <div className='header'>
    <h2 className='main'>We just need your zip code</h2>
    <p className='text'>please enter your zip code below.</p>
    </div>
   
    <div><PostalCodeInput userPostalCode={handleLocation} countryCode={countryCode} inputValue={inputValue} setInputValue={setInputValue} setCountryCode={setCountryCode} handleOptions={handleOptions}/> </div>
    <div><LocationInfo handleLocation={handleLocation} locationData={locationData} handleClear={handleClear } loading={loading} error={error}/></div>
  </div>
)
};

export default App;