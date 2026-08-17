const findTheOldest = function(people) {
    const sorted = people.sort((a, b) => {
        const aDeath = a.yearOfDeath ?? new Date().getFullYear();
        const bDeath = b.yearOfDeath ?? new Date().getFullYear();

        return (aDeath - a.yearOfBirth) - (bDeath - b.yearOfBirth);
    });
    return sorted[sorted.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
