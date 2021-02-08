import { filterFemale, filterMale, filterUnknown, filterAlive, filterDead, filterSunknown, orderAsc } from '../src/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

describe('filterFemale', () => {
  it('is a function', () => {
    expect(typeof filterFemale).toBe('function');
  });

  it('returns female charecters when selecting filtering by female gender', () => {
    const filterForFemale = filterFemale('Female')
    expect(filterForFemale.length).toBe(73);
  });
});

describe('filterMale', () => {
  it('is a function', () => {
    expect(typeof filterMale).toBe('function');
  });

  it('returns male charecters when selecting filtering by male gender', () => {
    const filterForMale = filterMale('Male')
    expect(filterForMale.length).toBe(372);
  });
});

describe('filterUnknown', () => {
  it('is a function', () => {
    expect(typeof filterUnknown).toBe('function');
  });

  it('returns unknown charecters when selecting filtering by unknown gender', () => {
    const filterForUnkn = filterUnknown('unknown')
    expect(filterForUnkn.length).toBe(42);
  });
});

describe('filterAlive', () => {
  it('is a function', () => {
    expect(typeof filterAlive).toBe('function');
  });

  it('returns unknown charecters when selecting filtering by unknown gender', () => {
    const filterForAlive = filterAlive('Alive')
    expect(filterForAlive.length).toBe(281);
  });
});

describe('filterDead', () => {
  it('is a function', () => {
    expect(typeof filterDead).toBe('function');
  });

  it('returns unknown charecters when selecting filtering by unknown gender', () => {
    const filterForDead = filterDead('Dead')
    expect(filterForDead.length).toBe(147);
  });
});

describe('filterSunknown', () => {
  it('is a function', () => {
    expect(typeof filterSunknown).toBe('function');
  });

  it('returns unknown charecters when selecting filtering by unknown gender', () => {
    const filterForSunknown = filterSunknown('unknown')
    expect(filterForSunknown.length).toBe(65);
  });
});

describe('orderAsc', () => {
  it('is a function', () => {
    expect(typeof orderAsc).toBe('function');
  });

  it('returns the characters sorted alphabetically', () => {
    const orderName = orderAsc('name')
    expect(orderName.length).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
});
// it('returns characters ', () => {
//   const pokemons = filterByType('poison')
//   expect(pokemons.length).toBe(30);
// });
// });
