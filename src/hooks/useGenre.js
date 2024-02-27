// export default function useGenre(selectedGenres) {

//     if(selectedGenres.leangth < 1) return ""

//     const GenreID = selectedGenres.map((g) => g.id)
//     return GenreID.reduce((curr , acc) => curr + "," + acc)
// }

const useGenre = (selectedGenres) => {
    if (selectedGenres.length < 1) return "";
  
    const GenreIds = selectedGenres.map((g) => g.id);
    return GenreIds.reduce((acc, curr) => acc + "," + curr);
  };
  
  export default useGenre;