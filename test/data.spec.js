import { filterByGender, filterAlive, filterDead, filterSunknown, orderData } from '../src/data.js';
import rickandmorty from '../src/data/rickandmorty/rickandmorty.js';

let personajes = rickandmorty.results;

describe('filterByGender', () => {
  it('is a function', () => {
    expect(typeof filterByGender).toBe('function');
  });

  it('returns female charecters when selecting filtering by female gender', () => {
    const filterByFemale = filterByGender(personajes, 'Female')
    expect(filterByFemale.length).toBe(73);
  });

  it('returns female charecters when selecting filtering by female gender', () => {
    const filterByMale = filterByGender(personajes, 'Male')
    expect(filterByMale.length).toBe(372);
  });

  it('returns female charecters when selecting filtering by female gender', () => {
    const filterByUnkwonG = filterByGender(personajes, 'unknown')
    expect(filterByUnkwonG.length).toBe(42);
  });

});

describe('filterAlive', () => {
  it.skip('is a function', () => {
    expect(typeof filterAlive).toBe('function');
  });

  it.skip('returns unknown charecters when selecting filtering by unknown gender', () => {
    const filterForAlive = filterAlive('Alive')
    expect(filterForAlive.length).toBe(281);
  });
});

describe('filterDead', () => {
  it.skip('is a function', () => {
    expect(typeof filterDead).toBe('function');
  });

  it.skip('returns unknown charecters when selecting filtering by unknown gender', () => {
    const filterForDead = filterDead('Dead')
    expect(filterForDead.length).toBe(147);
  });
});

describe('filterSunknown', () => {
  it.skip('is a function', () => {
    expect(typeof filterSunknown).toBe('function');
  });

  it.skip('returns unknown charecters when selecting filtering by unknown gender', () => {
    const filterForSunknown = filterSunknown('unknown')
    expect(filterForSunknown.length).toBe(65);
  });
});

describe('orderData', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('returns the characters sorted alphabetically', () => {
    const sortAZ = orderData(personajes,  'sortAZ', 'sortZA','name')
    expect(sortAZ.length).toBe('493');
  });

  it('returns the characters sorted alphabetically', () => {
    const sortZA = orderData(personajes,  'sortAZ', 'sortZA','name')
    expect(sortZA.length).toBe('493');
  });
});
