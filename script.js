document.getElementById('submit-button').addEventListener('click', function() {
    // Placeholder player data for logic (this can be replaced with actual NBA data)
    const correctPlayer = {
        ppg: 25.0,
        mpg: 34.5,
        rpg: 6.0,
        apg: 4.5,
        stocks: 2.0,
        team: 'Minnesota Timberwolves',
        conference: 'West',
        position: 'SG',
        number: 1
    };

    // Get player guesses
    const guessedPPG = parseFloat(document.getElementById('ppg').value);
    const guessedTeam = document.getElementById('team').value;
    const guessedPosition = document.getElementById('position').value;

    // Check PPG
    const ppgBox = document.getElementById('ppg-box');
    if (guessedPPG === correctPlayer.ppg) {
        ppgBox.classList.add('correct');
    } else if (Math.abs(guessedPPG - correctPlayer.ppg) <= 5) {
        ppgBox.classList.add('close');
    } else {
        ppgBox.classList.remove('correct', 'close');
    }

    // Check Team
    const teamBox = document.getElementById('team-box');
    if (guessedTeam === correctPlayer.team) {
        teamBox.classList.add('correct');
    } else {
        teamBox.classList.remove('correct', 'close');
    }

    // Check Position
    const positionBox = document.getElementById('position-box');
    if (guessedPosition === correctPlayer.position) {
        positionBox.classList.add('correct');
    } else {
        positionBox.classList.remove('correct', 'close');
    }
});
