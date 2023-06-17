import { Gender, People } from "./types";

export const sortPeoples = (peoples: People[]): People[] => {
  return peoples.sort((a: People, b: People) => a.name.localeCompare(b.name));
}

export const getPeopleByName = (peoples: People[], name: string): People | null => {
  const targetPeople = peoples.find(people => people.name.toLowerCase() === name.toLowerCase());
  return targetPeople || null;
}

export const embellishNamesOfPeoples = (peoples: People[]): People[] => {
  return peoples.map(people => { return {
    name: 
      people.gender === Gender.MALE ? 
      "Sr. "  + people.name :
      "Sra. " + people.name,
    age: people.age,
    gender: people.gender
  }})
}
