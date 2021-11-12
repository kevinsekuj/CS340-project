-- Query for add a new character functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language

-------------------------------------------------------------------------------
-- LABELS
-------------------------------------------------------------------------------
-- select all
SELECT * FROM LABELS;

-- insert
INSERT INTO LABELS (labelID, labelName, dateFounded)
VALUES (:labelIdInput, :labelNameInput, :dateFoundedInput);


-------------------------------------------------------------------------------
-- ARTISTS
-------------------------------------------------------------------------------
-- select
SELECT * FROM ARTISTS WHERE artistID = :artistIdInput;
SELECT * FROM ARTISTS WHERE artistName LIKE %:artistName%;
SELECT * FROM ARTISTS WHERE labelID = :labelIdInput;

-- select all
SELECT * FROM ARTISTS;

-- insert
INSERT INTO ARTISTS (artistName, labelID)
VALUES (:artistNameInput, :labelIdInput);

-- update
UPDATE ARTISTS
SET artistName = :artistNameInput, labelID = :labelIdInput
WHERE artistID = :artistIdInput;

-- delete
DELETE FROM ARTISTS WHERE artistID = :artistIdInput;

-------------------------------------------------------------------------------
-- SONGS
-------------------------------------------------------------------------------
-- select
SELECT * FROM SONGS;

-- insert
INSERT INTO SONGS (songID, songName, songLength, albumID)
VALUES (:songIdInput, :songNameInput, :songLengthInput, :albumIdInput);


-------------------------------------------------------------------------------
-- ALBUMS
-------------------------------------------------------------------------------
-- select
SELECT * FROM ALBUMS;

-- insert
INSERT INTO ALBUMS (albumID, albumName, releaseDate, artistID)
VALUES (:albumIdInput, :albumNameInput, :releaseDateInput, :artistIdInput);


-------------------------------------------------------------------------------
-- SONGS_ARTISTS
-------------------------------------------------------------------------------
-- select
SELECT * FROM SONGS_ARTISTS;

-- insert
INSERT INTO SONGS_ARTISTS (songID, artistID)
VALUES (:songIdInput, :artistIdInput)
