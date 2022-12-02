export interface SiteListing {
  id: string
  name: string
  sector: string
  tosdr_id: string
  categories?: string[],
  alias?: string
}

export const sectors: string[] = ["Any Sector", "Social", "Shopping", "Entertainment", "Food", "Financial", "Technology", "Lifestyle"];

export const sites: SiteListing[] = [
  {id: "google", name: "Google", sector: "Technology", tosdr_id: "217", categories: ["Biographical", "Behavioral", "Consumer", "Financial", "Biometric"]},
  {id: "amazon", name: "Amazon", sector: "Shopping", tosdr_id: "190", categories: ["Biographical", "Behavioral", "Consumer", "Financial", "Biometric"]},
  {id: "instagram", name: "Instagram", sector: "Social", tosdr_id: "219"},
  {id: "apple", name: "Apple", sector: "Technology", tosdr_id: "158"},
  {id: "microsoft", name: "Microsoft", sector: "Technology", tosdr_id: "244"},
  {id: "tiktok", name: "TikTok", sector: "Social", tosdr_id: "1448"},
  {id: "snapchat", name: "Snapchat", sector: "Social", tosdr_id: "311"},
  {id: "youtube", name: "YouTube", sector: "Entertainment", tosdr_id: "274"},
  {id: "twitter", name: "Twitter", sector: "Social", tosdr_id: "195"},
  {id: "discord", name: "Discord", sector: "Social", tosdr_id: "536"},
  {id: "facebook", name: "Facebook", sector: "Social", tosdr_id: "182"},
  {id: "paypal", name: "PayPal", sector: "Financial", tosdr_id: "230"},
  {id: "venmo", name: "Venmo", sector: "Financial", tosdr_id: "1799"},
  {id: "cash_app", name: "Cash App", sector: "Financial", tosdr_id: "2431"},
  {id: "steam", name: "Steam", sector: "Entertainment", tosdr_id: "180"},
  {id: "spotify", name: "Spotify", sector: "Entertainment", tosdr_id: "225"},
  {id: "nintendo", name: "Nintendo", sector: "Entertainment", tosdr_id: "869"},
  {id: "netflix", name: "Netflix", sector: "Entertainment", tosdr_id: "185"},
  {id: "hulu", name: "Hulu", sector: "Entertainment", tosdr_id: "348"},
  {id: "crunchyroll", name: "Crunchyroll", sector: "Entertainment", tosdr_id: "846"},
  {id: "aliexpress", name: "Aliexpress", sector: "Shopping", tosdr_id: "1570"},
  {id: "doordash", name: "Doordash", sector: "Food", tosdr_id: "2475"},
  {id: "uber", name: "Uber", sector: "Technology", tosdr_id: "252"},
  {id: "grubhub", name: "Grubhub", sector: "Food", tosdr_id: "2652"},
  {id: "soundcloud", name: "Soundcloud", sector: "Entertainment", tosdr_id: "276"},
  {id: "ebay", name: "Ebay", sector: "Shopping", tosdr_id: "226"},
  {id: "twitch", name: "Twitch", sector: "Entertainment", tosdr_id: "200"},
  {id: "github", name: "Github", sector: "Technology", tosdr_id: "297"},
  {id: "disney_plus", name: "Disney+", sector: "Entertainment", tosdr_id: "2745"},
  {id: "electronic_arts", name: "Electronic Arts", sector: "Entertainment", tosdr_id: "3131"},
  {id: "activision_blizzard", name: "Activision Blizzard", sector: "Entertainment", tosdr_id: "539"},
  {id: "etsy", name: "Etsy", sector: "Shopping", tosdr_id: "243"},
  {id: "epic_games", name: "Epic Games", sector: "Entertainment", tosdr_id: "624"},
  {id: "duckduckgo", name: "DuckDuckGo", sector: "Technology", tosdr_id: "222"}
];