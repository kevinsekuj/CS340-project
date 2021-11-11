const useDb = `USE heroku_61222def89864f4;`;

const dropTable = `DROP TABLE IF EXISTS labels, artists, songs, songs_artists, albums;`;

const createLabels = `
    CREATE TABLE LABELS (
    labelID int AUTO_INCREMENT,
    labelName varchar(50) NOT NULL,
    dateFounded date,
    PRIMARY KEY (labelID)
    );
`;

const createArtists = `
    CREATE TABLE ARTISTS (
    artistID int AUTO_INCREMENT,
    artistName varchar(50) NOT NULL,
    labelID int,
    PRIMARY KEY (artistID)
    );
`;

const createSongs = `
    CREATE TABLE SONGS (
    songID int auto_increment,
    songName varchar(50) NOT NULL,
    songLength int,
    albumID int,
    primary key (songID)
    );
`;

const createArtists = `
    CREATE TABLE SONGS_ARTISTS (
    songID int NOT NULL,
    artistID int NOT NULL,
    PRIMARY KEY (songID, artistID),
    FOREIGN KEY fk_song(songID)
    REFERENCES SONGS(songID)
    ON DELETE CASCADE,
    FOREIGN KEY fk_artist(artistID)
    REFERENCES ARTISTS(artistID)
    ON DELETE CASCADE
    );
`;

const createAlbums = `
    CREATE TABLE ALBUMS (
    albumID int AUTO_INCREMENT,
    albumName varchar(50) NOT NULL,
    releaseDate date,
    artistID int,
    PRIMARY KEY (albumID)
    );
`;
