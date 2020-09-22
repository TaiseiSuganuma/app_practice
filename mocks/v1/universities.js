const universities = [
  { name: "青山学院大学", link: "aoyama_univ" },
  { name: "慶應義塾大学", link: "keio_univ" },
  { name: "早稲田大学", link: "waseda_univ" },
];

export default {
  get: () => [200, universities],

  post({ data }) {
    universities.push({
      name: data.name,
      link: data.link,
    });

    return [201];
  },
};
