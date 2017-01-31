import json

class Songs(object):
    TEST_FILE = 'songs.json'
    __songs = None
	
    '''
    Class for handling our songs library. All songs are read from a JSON
    file which is given in the constructor.
    '''

    def __init__(self, data_file):
        '''
        Songs library constructor. All songs are read from the given file.

        @param data_file - Path to the JSON file containing the song definitions.
        '''
        with open(data_file) as file:
            json_data = json.load(file)
            self.__songs = json_data['songs']

        pass

    def get_songs(self, skip=0, count=20):
        '''
        List the songs in release date order (newest first).

        @param skip - Number of skipped songs from the beginning.
        @param count - Maximum number of songs returned.

        @return - songs array in JSON format
        '''
        
        # sort by 'released' date
        #songs = sorted(self.__songs, key=lambda song: song['released'], reverse=True)
        songs = self.sort_by_released_date(self.__songs)

        # limit / offset list
        songs = songs[skip:(skip+count)]

        return json.dumps(songs)

    def get_average_difficulty(self):
        '''
        Calculates the average difficulty of all songs.
        @return - average song difficulty with two decimals in JSON format.
            For example: {"avg_difficulty": 10.01}
        '''

        # add all difficulties
        sum = 0;
        for song in self.__songs:
            sum += float ( song['difficulty'] )

        print (sum,sum)

        # calcultate average difficulty
        avg_difficulty = sum / len( self.__songs )

        return json.dumps({
            'avg_difficulty': round ( avg_difficulty, 2 )
        })

    def search_songs(self, phrase):
        '''
        Searches for songs. Search should take into account song's artist and title.

        @param phrase - Search phrase to be used (case insensitive).

        @return - songs in release date order (newest first) in JSON format (songs
            that matched the search)
        '''
        songs = []
        
        phrase = phrase.lower()

        for song in self.__songs:
            if phrase in song['title'].lower() or phrase in song['artist'].lower():
                songs.append(song)

        # sort by 'released' date
        # songs = sort_by_released_date(songs)

        return json.dumps( self.sort_by_released_date(songs) )

    def sort_by_released_date(self, songs):
        '''
        Sort the songs in release date order (newest first).

        @param songs - list of songs to be sorted.
        '''

        return sorted(songs, key=lambda song: song['released'], reverse=True)
