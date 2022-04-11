import videoData from '@data/items.json';

const videos = () => {
  return (
    videoData.items.map(item => {
      return {
        id: item?.id?.videoId,
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
      }})
  );
}

export default videos;