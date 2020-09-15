const universities = [
  { id: 0, name: "青山学院大学" },
  { id: 1, name: "慶應義塾大学" },
  { id: 2, name: "早稲田大学" },
];

export default {
  get: () => [200, universities],

  post({ data }) {
    universities.push({
      id: universities.length,
      name: data.name,
    });

    return [201];
  },
};
