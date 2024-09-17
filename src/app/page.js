
"use client";
import Hi from "./components/Hi"
import { useState } from 'react';
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", 
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
  "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
  "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", 
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", 
  "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", 
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", 
  "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", 
  "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", 
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", 
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", 
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", 
  "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
  "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", 
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", 
  "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
  "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", 
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", 
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", 
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", 
  "Yemen", "Zambia", "Zimbabwe"
];
const Country = () => {
  const [search, setSearch] = useState('');
  const [ko, setKo] = useState();
  const filter = countries.filter(country =>
    country.toLowerCase().includes(search.toLowerCase())
  )
const fetchCountry = async (country) => {
  const dt = await fetch (`https://restcountries.com/v3.1/name/${country}`)
  const data = await dt.json()
  setKo(data[0])
}
  return (
    <div className="body2">
      <h2 className="choose">{search === '' && ko === undefined ? 'Choose a country' : ''}</h2>
      <input
        type="text"
        placeholder="Search countries......"
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
 
      <div >
        {filter.map((country, index) => (
          <div>
            <button className="country" key={index} onClick={() => fetchCountry(country)} >{country}  </button>
          </div>
        ))}
      </div>
      <div className="con"> 
    {ko ? <Hi ko={ko} />: null}
       </div>
       
    </div>
  );
};
export default Country;


