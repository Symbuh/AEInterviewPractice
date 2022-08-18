function tournamentWinner(competitions, results) {
  let tally = {};

  for (let i = 0; i < results.length; i++) {
    competitions[i] = competitions[i].reverse();
    let winner = competitions[i][results[i]];

    if (!tally[winner]) {
      tally[winner] = 3;
    } else {
      tally[winner] += 3;
    }
  }

  let max = 0,
    winner = '';
  for (const team in tally) {
    if (tally[team] > max) {
      max = tally[team];
      winner = team;
    }
  }

  return winner;
}
