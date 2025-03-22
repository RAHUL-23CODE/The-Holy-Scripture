const biblicalFestivals = {
    passover: {
        name: "Passover (Pesach)",
        hebrewName: "פֶּסַח",
        date: "Nisan 14-22",
        importance: "Most significant spring festival commemorating God's deliverance of Israel from Egypt",
        significance: [
            "Remembrance of liberation from Egyptian bondage",
            "Symbol of redemption through the blood of the lamb",
            "Foundation of salvation history",
            "Jesus' sacrifice as the ultimate Passover Lamb",
            "Connection between Old and New Covenant"
        ],
        modernRelevance: [
            "Freedom from spiritual bondage",
            "Remembrance of God's saving power",
            "Family and community unity",
            "Teaching faith to next generation"
        ],
        scriptures: ["Exodus 12:1-28", "Luke 22:7-20"],
        customs: [
            "Seder meal",
            "Unleavened bread (Matzah)",
            "Four cups of wine",
            "Bitter herbs"
        ]
    },

    pentecost: {
        name: "Pentecost (Shavuot)",
        hebrewName: "שָׁבוּעוֹת",
        date: "Sivan 6-7",
        importance: "Celebrates both the giving of the Torah and the birth of the Church",
        significance: [
            "Reception of God's Law at Mount Sinai",
            "Outpouring of the Holy Spirit",
            "First fruits of wheat harvest",
            "Birth of the Christian Church",
            "Unity of believers across cultures"
        ],
        modernRelevance: [
            "Spiritual empowerment",
            "Divine guidance through Scripture",
            "Community of faith",
            "Cultural inclusivity"
        ],
        scriptures: ["Exodus 20:1-17", "Acts 2:1-47"],
        customs: [
            "Reading the Book of Ruth",
            "All-night Torah study",
            "Eating dairy foods"
        ]
    },

    tabernacles: {
        name: "Feast of Tabernacles (Sukkot)",
        hebrewName: "סוכות",
        date: "Tishri 15-22",
        importance: "Major harvest festival remembering God's provision in the wilderness",
        significance: [
            "God's protection during wilderness journey",
            "Divine providence and care",
            "Temporary nature of earthly life",
            "Future messianic kingdom",
            "God dwelling among His people"
        ],
        modernRelevance: [
            "Trust in God's provision",
            "Gratitude for blessings",
            "Environmental stewardship",
            "Community celebration"
        ],
        scriptures: ["Leviticus 23:33-43", "John 7:37-39"],
        customs: [
            "Building and dwelling in temporary shelters (Sukkah)",
            "Waving the Four Species (Lulav and Etrog)",
            "Water-drawing ceremony"
        ]
    },

    trumpets: {
        name: "Feast of Trumpets (Rosh Hashanah)",
        hebrewName: "ראש השנה",
        date: "Tishri 1-2",
        importance: "Jewish New Year and day of spiritual awakening",
        significance: [
            "Beginning of High Holy Days",
            "Divine kingship and judgment",
            "Spiritual renewal",
            "Prophetic signal of Messiah's return",
            "Call to repentance"
        ],
        modernRelevance: [
            "Self-examination and growth",
            "New beginnings",
            "Spiritual alertness",
            "Personal accountability"
        ],
        scriptures: ["Leviticus 23:23-25", "1 Thessalonians 4:16-17"],
        customs: [
            "Blowing the Shofar",
            "Eating apples dipped in honey",
            "Tashlich ceremony"
        ]
    },

    atonement: {
        name: "Day of Atonement (Yom Kippur)",
        hebrewName: "יוֹם כִּפּוּר",
        date: "Tishri 10",
        significance: [
            "Holiest day of the year",
            "Repentance and forgiveness of sins",
            "Foreshadows Christ's ultimate sacrifice"
        ],
        scriptures: ["Leviticus 16", "Hebrews 9:11-14"],
        customs: [
            "25-hour fast",
            "Prayer and confession",
            "Wearing white garments"
        ]
    },

    dedication: {
        name: "Feast of Dedication (Hanukkah)",
        hebrewName: "חֲנֻכָּה",
        date: "Kislev 25 - Tevet 2/3",
        significance: [
            "Rededication of the Second Temple",
            "Miracle of the oil",
            "Victory of light over darkness"
        ],
        scriptures: ["John 10:22-23", "Daniel 8:9-14"],
        customs: [
            "Lighting the menorah",
            "Playing dreidel",
            "Eating fried foods"
        ]
    },

    purim: {
        name: "Purim",
        hebrewName: "פּוּרִים",
        date: "Adar 14-15",
        significance: [
            "Deliverance of the Jewish people from Haman's plot",
            "God's providence and protection",
            "Victory over enemies"
        ],
        scriptures: ["Esther 9:20-32"],
        customs: [
            "Reading the Book of Esther",
            "Giving gifts to the poor",
            "Festive meal"
        ]
    },

    firstfruits: {
        name: "Feast of Firstfruits",
        hebrewName: "ביכורים",
        date: "Nisan 16",
        significance: [
            "Offering of the first harvest to God",
            "Resurrection of Jesus Christ",
            "Promise of future resurrection"
        ],
        scriptures: ["Leviticus 23:9-14", "1 Corinthians 15:20-23"],
        customs: [
            "Offering of barley sheaf",
            "Beginning the counting of the Omer",
            "Thanksgiving for harvest"
        ]
    }
};

// Add methods for accessing festival information
biblicalFestivals.getUpcoming = function() {
    // Implementation to get upcoming festivals based on current date
};

biblicalFestivals.getByMonth = function(month) {
    // Implementation to get festivals in a specific month
};

biblicalFestivals.getCustoms = function(festivalName) {
    return this[festivalName.toLowerCase()]?.customs || [];
};

biblicalFestivals.getScriptures = function(festivalName) {
    return this[festivalName.toLowerCase()]?.scriptures || [];
};

// Add festival calendar functionality
biblicalFestivals.calendar = {
    getUpcomingFestivals: function() {
        const today = new Date();
        // Implementation for upcoming festivals
    },
    
    getFestivalsByMonth: function(month) {
        // Implementation for festivals in specific month
    },
    
    getFestivalDetails: function(festivalName) {
        const festival = this[festivalName.toLowerCase()];
        return {
            ...festival,
            preparationGuide: this.getPreparationGuide(festivalName),
            celebrations: this.getCelebrationDetails(festivalName)
        };
    }
};

// Add festival study resources
biblicalFestivals.resources = {
    getScriptures: function(festivalName) {
        return this[festivalName.toLowerCase()]?.scriptures || [];
    },
    
    getTeachingMaterials: function(festivalName) {
        // Implementation for teaching materials
    },
    
    getCelebrationGuide: function(festivalName) {
        // Implementation for celebration guides
    }
};

if (typeof module !== 'undefined') {
    module.exports = biblicalFestivals;
}
