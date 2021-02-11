import { filterByGender, filterByStatus, orderData} from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';

let personajes = data.results;

describe('filterByGender', () => {
  it('is a function', () => {
    expect(typeof filterByGender).toBe('function');
  });

  it('returns female characters when selecting filtering by female gender', () => {
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

describe('filterByStatus', () => {
  it('is a function', () => {
    expect(typeof filterByStatus).toBe('function');
  });

  it('returns alive characters when selecting filtering by alive status', () => {
    const filterByAlive = filterByStatus(personajes, 'Alive')
    expect(filterByAlive.length).toBe(281);
  });

  it('returns dead characters when selecting filtering by dead status', () => {
    const filterByDead = filterByStatus(personajes, 'Dead')
    expect(filterByDead.length).toBe(147);
  });
 
  it('returns unknown characters when selecting filtering by unknown status', () => {
    const filterByUnknownS = filterByStatus(personajes, 'unknown')
    expect(filterByUnknownS.length).toBe(65);
  });
});


describe('orderData', () => {
  it('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  it('returns the characters sorted alphabetically A-Z', () => {
    const sortAZ = orderData(personajes, 'name')
    expect(sortAZ.length).toBe('493');
  });

  it('returns the characters sorted alphabetically Z-A', () => {
    const sortZA = orderData(personajes, 'name')
    expect(sortZA.length).toBe('493');
  });
});
