import Header_bangla from "@/components/Header_bangla";
import WordGame from "@/components/WordGame";

export default async function shuffle_game() {
    const response = await fetch(`http://localhost:5000/api/game1/shuffle_game`, {
      method: 'GET',
      cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error('Error fetching Word');
    }
    const data = await response.json();
    const originalWord = data.Word;
  return (
      <div>
          <Header_bangla />
          <WordGame originalWord={originalWord} />
      </div>
  );
}