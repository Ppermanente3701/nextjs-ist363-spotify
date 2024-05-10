import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
  const token = await getAccessToken();

  // const taylorSwift = "06HL4z0CvFAxyc27GXpf02";

  const artists = [
    {
      name: "Lana Del Rey",
      spotify_id: "00FQb4jTyendYWaN8pK0wa",
    },
    {
      name: "KAROL G",
      spotify_id: "790FomKkXshlbRYZFtlgla",
    },
    {
      name: "SZA",
      spotify_id: "7tYKF4w9nC0nq9CsPZTHyP",
    },
    {
      name: "Travis Scott",
      spotify_id: "0Y5tJX1MQlPlqiwlOH1tJY",
    },
    {
      name: "Feid",
      spotify_id: "2LRoIwlKmHjgvigdNGBHNo",
    },
    {
      name: "Peso Pluma",
      spotify_id: "12GqGscKJx3aE4t07u7eVZ",
    },
    {
      name: "Drake",
      spotify_id: "3TVXtAsR1Inumwj472S9r4",
    },
    {
      name: "The Weeknd",
      spotify_id: "1Xyo4u8uXC1ZmMpatF05PJ",
    },
    {
      name: "Bad Bunny",
      spotify_id: "4q3ewBCX7sLwd24euuV69X",
    },
    {
      name: "Taylor Swift",
      spotify_id: "06HL4z0CvFAxyc27GXpf02",
    },
  ];

  // Extract the artist IDs
  const artistsIds = artists.map((artist) => artist.spotify_id);

  // Convert the artist IDs to a string
  const artistsString = artistsIds.join(",");

  const apiResponse = await fetch(
    `https://api.spotify.com/v1/artists?ids=${artistsString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const artistsData = await apiResponse.json();

  return new Response(JSON.stringify(artistsData));
}
