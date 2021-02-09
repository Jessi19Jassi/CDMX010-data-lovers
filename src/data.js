export function filterByGender (personajes, gender) {
  if(gender === 'Female'){
    //function filterFemale(personajes, gender) {
      const filterByFemale= personajes.filter(element=> element.gender === gender);
      return filterByFemale;
  }

  else if(gender === 'Male'){
    const filterByMale= personajes.filter(element=> element.gender === gender);
    return filterByMale;
  }

  else if(gender === 'unknown'){
    const filterByUnkwonG= personajes.filter(element=> element.gender===gender);
    return filterByUnkwonG;
  }
} 

export function filterByStatus(personajes, status){
  if(status === 'Alive'){
      const filterByAlive= personajes.filter(element=> element.status === status);
      return filterByAlive;
  }

  else if(status === 'Dead'){
    const filterByDead= personajes.filter(element=> element.status === status);
    return filterByDead;
  }

  else if(status === 'unknown'){
    const filterByUnkwonS= personajes.filter(element=> element.status === status);
    return filterByUnkwonS;
  }
} 

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

