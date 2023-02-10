export const heroesListLoader = async () => {
  const res = await fetch('https://hahow-recruit.herokuapp.com/heroes');
  const heroesData = await res.json();
  return heroesData;
};

export const heroProfileLoader = async ({ params }) => {
  console.log('heroProfileLoader');
  const { heroId } = params;
  const res = await fetch(
    `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
  );
  console.log('res', res);
  const heroesData = await res.json();
  return heroesData;
};
