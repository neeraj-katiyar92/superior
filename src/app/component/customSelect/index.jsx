import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Custom dropdown options
const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];

const CustomSelect = () => {
  const [selectedValues, setSelectedValues] = useState(['china']);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle option click
  const handleOptionClick = (value) => {
    setSelectedValues((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((v) => v !== value)
        : [...prevValues, value]
    );
    setSearchTerm(''); // Clear the search term when selecting
    setIsOpen(false); // Close dropdown after selection
  };

  // Handle search input and toggle dropdown
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    if (!isOpen) {
      setIsOpen(true); // Open dropdown when user types
    }
  };

  // Remove selected option when "X" is clicked
  const removeSelectedOption = (value) => {
    setSelectedValues(selectedValues.filter((v) => v !== value));
  };

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={{ width: '300px', position: 'relative' }}>
      {/* Input with selected values and cross (remove) buttons */}
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: '#fff',
          marginLeft:'10px',
          borderRadius:"10px",
          height:"73px"
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValues.length > 0 ? (
          selectedValues.map((value) => (
            <div
              key={value}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px',
                backgroundColor: '#f0f0f0',
                borderRadius: '5px',
                marginRight: '5px',
                marginBottom: '5px',
              }}
            >
              {options.find((option) => option.value === value)?.emoji}
              <span style={{ marginLeft: '5px' }}>
                {options.find((option) => option.value === value)?.label}
              </span>
              <span
                style={{
                  marginLeft: '8px',
                  cursor: 'pointer',
                  color: '#ff0000',
                  fontWeight: 'bold',
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent dropdown from opening on click
                  removeSelectedOption(value);
                }}
              >
                ×
              </span>
            </div>
          ))
        ) : (
            "" 
        //   <span style={{ color: '#999' }}>Select a country</span>
        )}

        {/* Input for search */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            flex: 1,
            padding: '5px',
            border: 'none',
            outline: 'none',
            minWidth: '100px',
          }}
          placeholder="Search..."
        />
      </div>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            width: '100%',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            zIndex: 1,
            left:"11px"
          }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                style={{
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor: selectedValues.includes(option.value)
                    ? '#f0f0f0'
                    : '#fff',
                }}
                onClick={() => handleOptionClick(option.value)}
              >
                <span role="img" aria-label={option.label} style={{ marginRight: '8px' }}>
                  {option.emoji}
                </span>
                {option.desc}
              </div>
            ))
          ) : (
            <div style={{ padding: '10px', color: '#999' }}>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelect

