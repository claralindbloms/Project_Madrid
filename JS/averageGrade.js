// const COMMENTS_PROGRAMME = [
//   {
//     id: 0,
//     programmeID: 0,
//     alias: "Ryan Dusick",
//     text: "Totalt v\u00e4rdel\u00f6st, l\u00e4raren var sjuk h\u00e4lften av tiden, jag l\u00e4rde mig n\u00e4stan inget under kursen och mina klasskamrater h\u00f6ll sig mest till sig sj\u00e4lv.",
//     date: {
//       year: 2017,
//       month: 1,
//       day: 1,
//     },
//     stars: {
//       teachers: 1,
//       students: 3,
//       courses: 1,
//     },
//   },
//   {
//     id: 1,
//     programmeID: 0,
//     alias: "Johan Davidsson",
//     text: "Toppen utbildning, jag f\u00e5r l\u00e4ra mig saker som jag f\u00f6rv\u00e4ntade mig att f\u00e5 l\u00e4ra mig. Mina klasskompisar \u00e4r v\u00e4ldigt engagerade ocks\u00e5. L\u00e4rarna \u00e4r dock inte s\u00e5 pedagogiska, det \u00e4r som de l\u00e4ser av ett manus under lektionen. ",
//     date: {
//       year: 2020,
//       month: 10,
//       day: 14,
//     },
//     stars: {
//       teachers: 2,
//       students: 5,
//       courses: 5,
//     },
//   },
//   {
//     id: 2,
//     programmeID: 1,
//     alias: "Carla Stenlund",
//     text: "B\u00e4sta tiden i mitt liv! \u00c4ven om kurserna kunde varit b\u00e4ttre lyfte l\u00e4rarna och klasskompisarna detta till det b\u00e4sta jag n\u00e5gonsin gjort. Har f\u00e5tt v\u00e4nner och minnen f\u00f6r livet!",
//     date: {
//       year: 2019,
//       month: 3,
//       day: 7,
//     },
//     stars: {
//       teachers: 4,
//       students: 5,
//       courses: 3,
//     },
//   },
//   {
//     id: 3,
//     programmeID: 2,
//     alias: "Mario",
//     text: "Lektionerna var superl\u00e4rorika men om man missade en var det k\u00f6rt!! Inga presentationer l\u00e4ggs ut efter\u00e5t se till att vara p\u00e5 plats!",
//     date: {
//       year: 2020,
//       month: 4,
//       day: 18,
//     },
//     stars: {
//       teachers: 3,
//       students: 4,
//       courses: 5,
//     },
//   },
//   {
//     id: 4,
//     programmeID: 2,
//     alias: "Kevin",
//     text: "Fantastiskt program!!! \u00c4lskade mina l\u00e4rare, mina klasskompisar och lektionerna var alltid roliga och intressanta. Har verkligen inget negativt att s\u00e4ga!",
//     date: {
//       year: 2017,
//       month: 2,
//       day: 8,
//     },
//     stars: {
//       teachers: 5,
//       students: 5,
//       courses: 5,
//     },
//   },
//   {
//     id: 5,
//     programmeID: 2,
//     alias: "Filippa",
//     text: "Helt okej utbildning, har verken n\u00e5got d\u00e5ligt eller super bra att s\u00e4ga om den. Det var l\u00e4rorikt men k\u00e4nner ocks\u00e5 att det ska bli sk\u00f6nt att komma hem :)",
//     date: {
//       year: 2019,
//       month: 11,
//       day: 1,
//     },
//     stars: {
//       teachers: 3,
//       students: 3,
//       courses: 3,
//     },
//   },
// ];

// Parameter 1: Vilken typ, program eller land.
// Parameter 2: vilket id (program, land).
    // console.log(averageGrade(program, "courses"));

function averageGradeProgramme(programme, type) {
  let grade = [];

  COMMENTS_PROGRAMME.filter((comment) => {
    if (comment.programmeID == programme.id) {
      grade.push(comment.stars[type]);
    }
  });

  return averageCalc(grade);
}

function averageGradeCity (city, type) {
  let grade = [];

  COMMENTS_CITY.filter((comment) => {
    if (comment.cityID == city.id) {
      grade.push(comment.stars[type]);
    }
  });

  return averageCalc(grade);
}

function averageCalc(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let average = sum / array.length;

  let averageGrade = Math.round(average * 10) / 10;

  return averageGrade;
}

