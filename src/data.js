// export const filterByGender = (personajes, gender) => {
//   if(gender === 'Female'){
//     //function filterFemale(personajes, gender) {
//       const filterForFemale= personajes.filter(element=> element.gender === gender);
//       return filterForFemale;
//   }

//   else if(gender === 'Male'){
//     const filterForMale= personajes.filter(element=> element.gender === gender);
//     return filterForMale;
//   }

//   else if(gender === 'unknown'){
//     const filterForUnkwon= personajes.filter(element=> element.gender===gender);
//     return filterForUnkwon;
//   }
// } 

function filterFemale(personajes, gender) {
  
  const filterForFemale= personajes.filter(element=> element.gender === gender);
  return filterForFemale;
};

export function filterMale(personajes, gender) {

  const filterForMale= personajes.filter(element=> element.gender === gender);
  
  return filterForMale;
};

export function filterUnknown(personajes, gender) {

  const filterForUnkwon= personajes.filter(element=> element.gender===gender);
  
  return filterForUnkwon;
};

export function filterAlive(personajes, status) {

  const filterForAlive= personajes.filter(element=> element.status === status);
  
  return filterForAlive;
};

export function filterDead(personajes, status) {

  const filterForDead= personajes.filter(element=> element.status === status);
  
  return filterForDead;
};

export function filterSunknown(personajes, status) {

  const filterUnknown= personajes.filter(element=> element.status === status);
  
  return filterUnknown;
};

export const orderData = (data, sortBy, sortOrder) =>{
  if(sortBy === 'name' && sortOrder === 'sortAZ'){
      const sortAZ = data.sort((a,b) => {
      if (a.name < b.name) return -1;
      if (b.name > b.name) return 1;
      return 0;
    });
    return sortAZ;
} 
  else if (sortBy === 'name' && sortOrder === 'sortZA'){
    const sortZA = data.sort((a,b) => {
      if (a.name > b.name) return -1;
      if (b.name < b.name) return 1;
      return 0;
    });
  return sortZA;
}
}

// export function orderAsc(personajes, name) {

//   const orderName = personajes.sort((a,b) => a.name.localeCompare(b.name));
//   return orderName;

// };

// export function orderDes(personajes, name) {

//   const orderName2 = personajes.sort((a,b) => b.name.localeCompare(a.name));
//   return orderName2;

// };


