const universities = [
  { id: 0, name: "青山学院大学", link: "aoyama_univ" },
  { id: 1, name: "慶應義塾大学", link: "keio_univ" },
  { id: 2, name: "早稲田大学", link: "waseda_univ" },
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
