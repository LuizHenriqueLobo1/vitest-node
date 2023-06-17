import { expect, test } from "vitest";
import { People, Gender } from "./types";
import { getPeopleByName, sortPeoples, embellishNamesOfPeoples } from "./service";

const peoples: People[] = [
  { "name": "Arthur", "age": 45, "gender": Gender.MALE },
  { "name": "Eva", "age": 14, "gender": Gender.FEMALE },
  { "name": "John", "age": 40, "gender": Gender.MALE },
  { "name": "Abigail", "age": 35, "gender": Gender.FEMALE },
  { "name": "Jack", "age": 15, "gender": Gender.MALE }
];

const sortedPeoples: People[] = [
  { "name": "Abigail", "age": 35, "gender": Gender.FEMALE },
  { "name": "Arthur", "age": 45, "gender": Gender.MALE },
  { "name": "Eva", "age": 14, "gender": Gender.FEMALE },
  { "name": "Jack", "age": 15, "gender": Gender.MALE },
  { "name": "John", "age": 40, "gender": Gender.MALE }
];

const peoplesWithNameEmbellish: People[] = [
  { "name": "Sra. Abigail", "age": 35, "gender": Gender.FEMALE },
  { "name": "Sr. Arthur", "age": 45, "gender": Gender.MALE },
  { "name": "Sra. Eva", "age": 14, "gender": Gender.FEMALE },
  { "name": "Sr. Jack", "age": 15, "gender": Gender.MALE },
  { "name": "Sr. John", "age": 40, "gender": Gender.MALE }
];

const targetPeople: People = {name: "Arthur", age: 45, gender: Gender.MALE };

test("Sort peoples", () => {
  expect(sortPeoples(peoples)).toEqual(sortedPeoples);
});

test("Get people by name", () => {
  expect(getPeopleByName(peoples, "arthur")).toEqual(targetPeople);
});

test("Embellish names of peoples", () => {
  expect(embellishNamesOfPeoples(sortedPeoples)).toEqual(peoplesWithNameEmbellish);
});
