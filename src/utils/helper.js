export const heroesListLoader = async () => {
  const res = await fetch('https://hahow-recruit.herokuapp.com/heroes');
  const heroesData = await res.json();
  return heroesData;
};

export const heroProfileLoader = async ({ params }) => {
  const { heroId } = params;
  const res = await fetch(
    `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
  );
  const heroesData = await res.json();
  return heroesData;
};
