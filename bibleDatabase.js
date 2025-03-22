const bibleDatabase = {
    old: [
        { name: 'Genesis', chapters: 50 },
        { name: 'Exodus', chapters: 40 },
        { name: 'Leviticus', chapters: 27 },
        { name: 'Numbers', chapters: 36 },
        { name: 'Deuteronomy', chapters: 34 },
        { name: 'Joshua', chapters: 24 },
        { name: 'Judges', chapters: 21 },
        { name: 'Ruth', chapters: 4 },
        { name: '1 Samuel', chapters: 31 },
        { name: '2 Samuel', chapters: 24 },
        { name: '1 Kings', chapters: 22 },
        { name: '2 Kings', chapters: 25 },
        { name: '1 Chronicles', chapters: 29 },
        { name: '2 Chronicles', chapters: 36 },
        { name: 'Ezra', chapters: 10 },
        { name: 'Nehemiah', chapters: 13 },
        { name: 'Esther', chapters: 10 },
        { name: 'Job', chapters: 42 },
        { name: 'Psalms', chapters: 150 },
        { name: 'Proverbs', chapters: 31 },
        { name: 'Ecclesiastes', chapters: 12 },
        { name: 'Song of Solomon', chapters: 8 },
        { name: 'Isaiah', chapters: 66 },
        { name: 'Jeremiah', chapters: 52 },
        { name: 'Lamentations', chapters: 5 },
        { name: 'Ezekiel', chapters: 48 },
        { name: 'Daniel', chapters: 12 },
        { name: 'Hosea', chapters: 14 },
        { name: 'Joel', chapters: 3 },
        { name: 'Amos', chapters: 9 },
        { name: 'Obadiah', chapters: 1 },
        { name: 'Jonah', chapters: 4 },
        { name: 'Micah', chapters: 7 },
        { name: 'Nahum', chapters: 3 },
        { name: 'Habakkuk', chapters: 3 },
        { name: 'Zephaniah', chapters: 3 },
        { name: 'Haggai', chapters: 2 },
        { name: 'Zechariah', chapters: 14 },
        { name: 'Malachi', chapters: 4 }
    ],
    new: [
        { name: 'Matthew', chapters: 28 },
        { name: 'Mark', chapters: 16 },
        { name: 'Luke', chapters: 24 },
        { name: 'John', chapters: 21 },
        { name: 'Acts', chapters: 28 },
        { name: 'Romans', chapters: 16 },
        { name: '1 Corinthians', chapters: 16 },
        { name: '2 Corinthians', chapters: 13 },
        { name: 'Galatians', chapters: 6 },
        { name: 'Ephesians', chapters: 6 },
        { name: 'Philippians', chapters: 4 },
        { name: 'Colossians', chapters: 4 },
        { name: '1 Thessalonians', chapters: 5 },
        { name: '2 Thessalonians', chapters: 3 },
        { name: '1 Timothy', chapters: 6 },
        { name: '2 Timothy', chapters: 4 },
        { name: 'Titus', chapters: 3 },
        { name: 'Philemon', chapters: 1 },
        { name: 'Hebrews', chapters: 13 },
        { name: 'James', chapters: 5 },
        { name: '1 Peter', chapters: 5 },
        { name: '2 Peter', chapters: 3 },
        { name: '1 John', chapters: 5 },
        { name: '2 John', chapters: 1 },
        { name: '3 John', chapters: 1 },
        { name: 'Jude', chapters: 1 },
        { name: 'Revelation', chapters: 22 }
    ]
};

// Add metadata for each book
bibleDatabase.old.forEach(book => {
    book.testament = 'Old Testament';
    book.description = `The Book of ${book.name}`;
    book.content = book.content || {}; // Preserve existing content if any
});

bibleDatabase.new.forEach(book => {
    book.testament = 'New Testament';
    book.description = `The Book of ${book.name}`;
    book.content = book.content || {}; // Preserve existing content if any
});

// Add search functionality
bibleDatabase.search = function(query) {
    const results = [];
    const testaments = ['old', 'new'];
    
    testaments.forEach(testament => {
        this[testament].forEach(book => {
            Object.entries(book.content).forEach(([chapter, verses]) => {
                Object.entries(verses).forEach(([verse, text]) => {
                    if (text.toLowerCase().includes(query.toLowerCase())) {
                        results.push({
                            testament,
                            book: book.name,
                            chapter,
                            verse,
                            text
                        });
                    }
                });
            });
        });
    });
    
    return results;
};

// Add verse of the day functionality
bibleDatabase.getRandomVerse = function() {
    const testament = Math.random() < 0.5 ? 'old' : 'new';
    const book = this[testament][Math.floor(Math.random() * this[testament].length)];
    const chapter = Math.floor(Math.random() * book.chapters) + 1;
    const verses = Object.keys(book.content[chapter] || {});
    const verse = verses[Math.floor(Math.random() * verses.length)];
    
    return {
        reference: `${book.name} ${chapter}:${verse}`,
        text: book.content[chapter]?.[verse] || ''
    };
};

// Add book categorization
bibleDatabase.categories = {
    law: ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
    history: ['Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther'],
    poetry: ['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
    majorProphets: ['Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel'],
    minorProphets: ['Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'],
    gospels: ['Matthew', 'Mark', 'Luke', 'John'],
    history_nt: ['Acts'],
    paulineEpistles: ['Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon'],
    generalEpistles: ['Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude'],
    apocalyptic: ['Revelation']
};

// Add verse collections
bibleDatabase.collections = {
    encouragement: [
        { reference: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
        { reference: "Isaiah 41:10", text: "So do not fear, for I am with you; do not be dismayed, for I am your God." },
    ],
    wisdom: [
        { reference: "Proverbs 3:5-6", text: "Trust in the LORD with all your heart and lean not on your own understanding;" },
        { reference: "James 1:5", text: "If any of you lacks wisdom, you should ask God, who gives generously to all" },
    ],
    faith: [
        { reference: "Hebrews 11:1", text: "Now faith is confidence in what we hope for and assurance about what we do not see." },
        { reference: "Romans 10:17", text: "Consequently, faith comes from hearing the message" },
    ]
};

// Add study plans
bibleDatabase.studyPlans = {
    beginners: {
        name: "New Believer's Journey",
        duration: "30 days",
        readings: [
            { day: 1, reference: "John 1", theme: "The Word Became Flesh" },
            { day: 2, reference: "John 3", theme: "Born Again" },
        ]
    },
    intermediate: {
        name: "Walking with Christ",
        duration: "60 days",
        readings: [
            { day: 1, reference: "Romans 8", theme: "Life in the Spirit" },
            { day: 2, reference: "Ephesians 6", theme: "Spiritual Warfare" },
        ]
    }
};

// Add commentary functionality
bibleDatabase.commentary = {
    getCommentary: function(book, chapter, verse) {
        return this.commentaryData[`${book}_${chapter}_${verse}`] || "No commentary available";
    },
    commentaryData: {
        "John_3_16": "This verse is often called 'The Gospel in a nutshell'...",
        "Romans_8_28": "A key verse about God's sovereignty and goodness...",
    }
};

// Add cross-reference functionality
bibleDatabase.crossReferences = {
    getCrossReferences: function(reference) {
        return this.referenceData[reference] || [];
    },
    referenceData: {
        "John_3_16": ["1 John 4:9", "Romans 5:8", "Ephesians 2:4-5"],
        "Romans_8_28": ["Genesis 50:20", "Jeremiah 29:11"],
    }
};

// Add timeline data
bibleDatabase.timeline = {
    oldTestament: [
        { year: "4000 BC", event: "Creation", reference: "Genesis 1-2" },
        { year: "2348 BC", event: "Great Flood", reference: "Genesis 7-8" },
    ],
    newTestament: [
        { year: "4 BC", event: "Birth of Jesus", reference: "Luke 2" },
        { year: "30 AD", event: "Crucifixion and Resurrection", reference: "Matthew 27-28" },
    ]
};

// Add geographical data
bibleDatabase.places = {
    jerusalem: {
        name: "Jerusalem",
        description: "The holy city and capital of Israel",
        coordinates: { lat: 31.7683, lng: 35.2137 },
        references: ["Psalm 122:6", "2 Samuel 5:6-7"]
    },
    bethlehem: {
        name: "Bethlehem",
        description: "Birthplace of Jesus",
        coordinates: { lat: 31.7054, lng: 35.2024 },
        references: ["Micah 5:2", "Matthew 2:1"]
    }
};

// Add search by theme functionality
bibleDatabase.themes = {
    love: ["1 Corinthians 13", "1 John 4:7-21"],
    faith: ["Hebrews 11", "James 2:14-26"],
    hope: ["Romans 8:24-25", "Hebrews 6:19"],
};

// Add parallel verse comparison
bibleDatabase.getParallelVerses = function(reference, translations = ['KJV', 'NIV', 'ESV']) {
    // Implementation for parallel verse comparison
};

// Add word study functionality
bibleDatabase.wordStudy = {
    getOriginalWord: function(word, language = 'greek') {
        return this.originalWords[language][word] || null;
    },
    originalWords: {
        greek: {
            love: { word: 'agape', definition: "Divine, unconditional love" },
            faith: { word: 'pistis', definition: "Trust, conviction, belief" }
        },
        hebrew: {
            love: { word: 'ahava', definition: "Deep affection" },
            peace: { word: 'shalom', definition: "Complete well-being" }
        }
    }
};

// Export the enhanced database
if (typeof module !== 'undefined') {
    module.exports = bibleDatabase;
}
