----------------------------
-- Drop tables if they exist
----------------------------
SET FOREIGN_KEY_CHECKS = 0;
const dropTable = `DROP TABLE IF EXISTS LABELS, ARTISTS, SONGS, SONGS_ARTISTS, ALBUMS;`;
SET FOREIGN_KEY_CHECKS = 1;

---------------------------------------
-- Create LABELS table, and insert data
---------------------------------------
CREATE TABLE LABELS (
    labelID int AUTO_INCREMENT,
    labelName varchar(50) NOT NULL,
    dateFounded date,
    PRIMARY KEY (labelID)
);

INSERT INTO LABELS (labelName, dateFounded)
VALUES 
    ('Top Dawg Entertainment', '2004-01-01'),
    ('Last Gang Records', '2003-01-01'),
    ('EMI Music Japan', '1960-10-01');

----------------------------------------
-- Create ARTISTS table, and insert data
----------------------------------------
CREATE TABLE ARTISTS (
    artistID int AUTO_INCREMENT,
    artistName varchar(50) NOT NULL,
    labelID int,
    PRIMARY KEY (artistID)
);

INSERT INTO ARTISTS (artistName, labelID)
VALUES 
    ('Kendrick Lamar', '5'),
    ('Rihanna', NULL),
    ('Hikaru Utada', '25'),
    ('Crystal Castles', '15');

---------------------------------------
-- Create ALBUMS table, and insert data
---------------------------------------
CREATE TABLE ALBUMS (
    albumID int AUTO_INCREMENT,
    albumName varchar(50) NOT NULL,
    releaseDate date,
    artistID int,
    PRIMARY KEY (albumID)
);

INSERT INTO ALBUMS (albumName, releaseDate, artistID)
VALUES 
    ('Damn', '2017-04-14', '5'),
    ('Amnesty', '2016-08-19', '35'),
    ('One Last Kiss', '2021-03-09', '25');

--------------------------------------
-- Create SONGS table, and insert data
--------------------------------------
CREATE TABLE SONGS (
    songID int auto_increment,
    songName varchar(50) NOT NULL,
    songLength int,
    albumID int,
    PRIMARY KEY (songID)
);

INSERT INTO SONGS (songName, songLength, albumID)
VALUES 
    ('Loyalty', 177, 5),
    ('Frail', 169, 15),
    ('One Last Kiss', NULL, NULL);
    ('First Love', 257, NULL);

------------------------------------------
-- Create relationship table SONGS_ARTISTS
------------------------------------------
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

INSERT INTO SONGS_ARTISTS (labelName, dateFounded)
VALUES 
    (5, 5),
    (5, 15),
    (25, 25),
    (35, 25),
    (15, 35);

------------------------------------------------------------
-- Add foreign key constraints to tables, similar to lecture
------------------------------------------------------------
ALTER TABLE LABELS ()
ALTER TABLE ARTISTS ()
ALTER TABLE SONGS ()
ALTER TABLE ALBUMS ()
