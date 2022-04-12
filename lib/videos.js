const getCommonvideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = 'youtube.googleapis.com/youtube/v3'
    
    const response = await fetch(
      `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
    )
  
    const data = await response.json();

    if (data?.error){
      console.error('Problem fetching data',data.error);
    }
  
    return (
      data?.items.map((item) => {
        const id = item.id?.videoId || item.id;
        const snippet = item.snippet;
        return {
          title: snippet?.title,
          imgUrl: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
          id,
          description: snippet.description,
          publishTime: snippet.publishedAt,
          channelTitle: snippet.channelTitle,
          statistics: item.statistics ? item.statistics : { viewCount: 0 },
        }
      })
    )
  } catch (error) {
    console.error('Something went wrong in videos library',error);
  }
}



export const getVideos = (searchQuery) => {
  const URL = `search?part=snippet&q=${searchQuery}&type=video`
  return getCommonvideos(URL);
}

export const popularVideos = (searchQuery) => {
  const URL = `search?part=snippet&q=${searchQuery}&type=video`
  const sdf = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=es&key=[YOUR_API_KEY]'
  return getCommonvideos(URL);
}