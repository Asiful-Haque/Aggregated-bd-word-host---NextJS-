import NotFound from '@/app/not-found';

export default async function Game1CatchAll({ params }) {
    const slug = await params;
  
    // Check if the path is exactly 'shuffle_game'
    const isValidPath = Array.isArray(slug) && slug.length === 1 && slug[0] === "shuffle_game";
  
    if (isValidPath) {
      return <div>Valid Path: Shuffle Game</div>;
    }
  
    return <div>Invalid Path</div>;
  }