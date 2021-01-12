import database from "./database"

const firebase = database.getInstance()
const db = firebase.db

export async function getAllTags(){
  const tags = await db.collection('tags').get().then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    return data.map(tag=>tag.name)
  })

  return tags
}

