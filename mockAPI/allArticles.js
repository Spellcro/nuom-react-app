import database from "./database";

const firebase = database.getInstance();
const db = firebase.db;

const articleExample = {
  image:
    "https://i2-prod.mirror.co.uk/incoming/article1899080.ece/ALTERNATES/s615b/Tottenham-Hotspur-v-Sunderland-Premier-League.jpg",
  tags: ["sport"],
  title:
    "Gareth Bale could take iconic former Tottenham shirt number on dramatic Spurs return",
  text:
    "Gareth Bale could wear the same No.3 shirt that he donned during his famous breakthrough Champions League season at Tottenham if he does end up completing a stunning return to the club.  Spurs and Real Madrid are said to be close to reaching an agreement for the Welsh forward to go back to north London and rejoin the team where he first became a world superstar.  Bale spent six happy seasons at Spurs between 2007-13 before his move to Madrid, but he actually began as a left-back, and thus was initially handed the No.16 shirt when he first arrived.  In his second season he changed to No.3, and it was while wearing this number that he famously terrorised the Inter Milan defence twice in the Champions League campaign of 2010-11 before he eventually took the No.11 shirt as he was deployed in a more attacking position. He has worn 11 during his whole time at Madrid, but will be unable to reclaim it if he does go back to Spurs because it is currently held by Erik Lamela.  The No.3 shirt is available, however, after Danny Rose was not given a number for the current season ahead of his prospective move to Genoa, and for sentimental reasons Bale may fancy pulling it on again.  However, given his position on the field the vacant No.9 or No.14 shirts may also be two other options.",
  date: { seconds: 1600074000 }
};

export async function getAllArticles() {
  const articles = await db
    .collection("articles")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      return data;
    });

  return articles;
}

/* TODO: Bonus points, create a function that return only the articles with a set of tags, or keywords */
