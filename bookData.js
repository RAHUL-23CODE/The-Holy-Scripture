const bookData = {
    // Old Testament Books
    genesis: {
        name: "Genesis",
        hebrew: "בְּרֵאשִׁית",
        meaning: "In the Beginning",
        chapters: 50,
        verses: 1533,
        author: "Moses",
        date: "c. 1445-1405 BC",
        outline: [/* detailed outline */],
        themes: [/* major themes */],
        keyVerses: [/* significant verses */]
    },
    exodus: {
        name: "Exodus",
        hebrew: "שְׁמוֹת",
        meaning: "Names",
        chapters: 40,
        verses: 1213,
        // ... more data
    },
    // ... Add all books
};

// Export the book data
if (typeof module !== 'undefined') {
    module.exports = bookData;
}
