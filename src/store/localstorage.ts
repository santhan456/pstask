const HIDE_NEWS_STORAGE = "HIDE_NEWS_STORAGE";
const UPVOTE_STORAGE = "UPVOTE_STORAGE";

export function setHideNews(objectID: number){
    const rawItems = localStorage.getItem(HIDE_NEWS_STORAGE); 
    let storageItems;
    if(rawItems){
        try{
            const parsed = JSON.parse(rawItems);
            if(parsed.indexOf(objectID) === -1){
                storageItems = [...parsed, objectID]
            }
        }catch{
            storageItems = [objectID];
        }
    }else{
        storageItems = [objectID];
    }
    localStorage.setItem(HIDE_NEWS_STORAGE, JSON.stringify(storageItems));
}

export function getHideNews(): number[] {
    const rawItems = localStorage.getItem(HIDE_NEWS_STORAGE); 
    let items;
    try{
        if(rawItems){
            const parsed = JSON.parse(rawItems);
            items = parsed;
        }else{
            items = [];
        }
    }catch{
        items = [];
    }
    return items;
}

export function setUpVotes(objectID: string, votes: number){
    const rawItems = localStorage.getItem(UPVOTE_STORAGE); 
    let storageItems;
    if(rawItems){
        try{
            const parsed = JSON.parse(rawItems);
            parsed[objectID] = votes;
            storageItems = parsed;
             
        }catch{
            storageItems = {
              [objectID]: votes
            };
        }
    }else{
        storageItems = {
            [objectID]: votes
          };
    }
    localStorage.setItem(UPVOTE_STORAGE, JSON.stringify(storageItems));
}

export function getUpVotes(): any {
    const rawItems = localStorage.getItem(UPVOTE_STORAGE); 
    let items;
    try{
        if(rawItems){
            const parsed = JSON.parse(rawItems);
            items = parsed;
        }else{
            items = {};
        }
    }catch{
        items = {};
    }
    return items;
}