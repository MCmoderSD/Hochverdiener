
using Google.Apis.Services;
using Google.Apis.YouTube.v3;

namespace Hochverdiener.Commands.Music.src;

public class YouTubeEngine
{
    public static async Task<List<string>> SearchSongsAsync(string query)
    {
        var youtubeService = new YouTubeService(new BaseClientService.Initializer
        {
            ApiKey = keys.YouTube_API_Key.YouTubeApiKey,
            ApplicationName = "SongSearchEngine"
        });

        var searchListRequest = youtubeService.Search.List("snippet");
        searchListRequest.Q = query; // search query
        searchListRequest.MaxResults = 5; // number of results to retrieve
        searchListRequest.Type = "video"; // search only for videos

        var searchListResponse = await searchListRequest.ExecuteAsync();

        var songs = new List<string>();
        foreach (var searchResult in searchListResponse.Items)
        {
            songs.Add(searchResult.Snippet.Title);
        }
        return songs;
    }
}