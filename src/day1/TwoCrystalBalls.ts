/*
You have two crystal balls. You need to determine the highest floor in a 100-story building from 
which you can drop a crystal ball without it breaking.
If you drop a ball from a floor higher than this "breaking point," it will break.
If you drop it from a floor at or below the breaking point, it will not break.
You want to minimize the number of drops in the worst-case scenario.
*/
export default function two_crystal_balls(breaks: boolean[]): number {
   let jump=Math.sqrt(Math.floor(breaks.length))

   let i=jump
   for (; i < breaks.length; i+=jump) 
    if(breaks[i])
        break

   i-=jump
   for (let j = 0; i<breaks.length && j < jump; j++,i++) {
    if(breaks[i])
        return i
   }
   return -1
}
