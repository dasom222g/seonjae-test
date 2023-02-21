export const herokuBaseUrl =
  'https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/databases'
export const baseUrl = 'https://api.notion.com/v1/databases'

export const getNotionItem = async (
  notionKey: string,
  notionDatabaseKey: string,
  notionVersion: string,
): Promise<unknown> => {
  try {
    const response = await fetch(`/${notionDatabaseKey}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${notionKey}`,
        'Notion-Version': notionVersion,
      },
      body: JSON.stringify({
        sort: {
          direction: 'ascending',
          timestamp: 'last_edited_time',
        },
      }),
    })
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}
