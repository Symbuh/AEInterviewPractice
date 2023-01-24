function levenshteinDistance(str1, str2) {
  /*
    if str1[r] === str2[c]
      E[r][c] E[r-1][c-1]
    else
      E[R][C] = 1 + min(E[r-1][c], E[r][c-1], E[r-1][c-1])

    This basically says to go back diagonally if we find a match while iterating
      This is the formula for building out the rest of our array

    Eventually array looks like this:
      '' y a b d
    '' 0 1 2 3 4
     a 1 1 1 2 3
     b 2 2 2 1 2
     c 3 3 3 2 2 <- Two is the answer to our problem
  */
  let row, column;

  if (str1.length > str2.length) {
    row = str1;
    column = str2;
  } else {
    row = str2;
    column = str1;
  }

  let makeStruct = () => {
    let edits = [];

    for (let i = 0; i < column.length + 1; i++) {
      edits.push([i]);
    }

    for (let i = 0; i < row.length + 1; i++) {
      edits[0][i] = i;
    }
    return edits;
  };

  let findSolution = (edits) => {
    for (let i = 1; i < column.length + 1; i++) {
      for (let j = 1; j < row.length + 1; j++) {
        if (row[j - 1] === column[i - 1]) {
          edits[i][j] = edits[i - 1][j - 1];
        } else {
          edits[i][j] =
            Math.min(edits[i - 1][j - 1], edits[i][j - 1], edits[i - 1][j]) + 1;
        }
      }
    }
    return edits[column.length][row.length];
  };

  return findSolution(makeStruct());
}
