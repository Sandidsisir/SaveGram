!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="741a3773-e766-4213-a358-5391bc41a033",e._sentryDebugIdIdentifier="sentry-dbid-741a3773-e766-4213-a358-5391bc41a033")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"2355ac7aea3ec4f8c529032b6c317c6bbb252cc2"},(()=>{var e={561:()=>{var e;history.pushState=(e=history.pushState,function(){arguments[2]&&arguments[2].startsWith("https://")&&arguments[2].includes("?img_index=")&&(arguments[2]="?"+arguments[2].split("?")[1]);var t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t}),history.replaceState=(e=>function(){arguments[2]&&arguments[2].startsWith("https://")&&arguments[2].includes("?img_index=")&&(arguments[2]="?"+arguments[2].split("?")[1]);var t=e.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),t})(history.replaceState),window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))}))},816:()=>{"#__ig_downloader_options"!==location.hash&&(window.addEventListener("message",(async e=>{if((e.origin===window.location.origin||"https://www.instagram.com"===e.origin)&&e.ports&&e.ports.length>0&&e.data&&e.data.procedure){const t=e.data;if("loadPostFromShortcode"===t.procedure){let n=null;try{n=await window.__igdl_resolvePostByShortcode(t.shortcode,t.mediaId),n=n?window.__igdl_cloneSafe(n):null}catch(e){n=null}return void e.ports[0].postMessage(n)}if("loadProfilePosts"===t.procedure){let r=null;try{r=await window.__igdl_loadProfilePosts(t.username,t.after,t.count||12),r=r?window.__igdl_cloneSafe(r):null}catch(e){r=null}return void e.ports[0].postMessage(r)}e.ports[0].postMessage(void 0)}})),(()=>{
const origJsonParse=JSON.parse;
window.__igdl_cloneSafe=function(obj){
  if(!obj)return null;
  try{return origJsonParse(JSON.stringify(obj))}catch(e){return null}
};

function e(){try{sessionStorage.setItem("__ig_www_claim",window.require("PolarisWWWClaim").getWWWClaim())}catch(t){setTimeout(e,100)}}

function isValidMediaPk(val){
  if(null==val)return!1;
  const s=String(val).split("_")[0];
  return/^\d{10,}$/.test(s);
}

function cleanMediaPk(val){
  if(null==val)return"";
  const s=String(val).split("_")[0];
  return/^\d{10,}$/.test(s)?s:"";
}

function extractExactMediaPk(obj){
  if(!obj||"object"!=typeof obj)return cleanMediaPk(obj);
  for(const k of["pk","id","strong_id__","media_id"]){
    const v=obj[k];
    if("string"==typeof v){
      const c=cleanMediaPk(v);
      if(c)return c;
    }
  }
  return cleanMediaPk(obj.pk||obj.id||obj.media_id);
}

function isMatchingMediaPk(pkA,pkB){
  const a=cleanMediaPk(pkA),b=cleanMediaPk(pkB);
  if(!a||!b)return!1;
  if(a===b)return!0;
  if(a.length>=16&&b.length===a.length&&a.slice(0,14)===b.slice(0,14)&&Math.abs(Number(a)-Number(b))<=4096)return!0;
  return!1;
}

function shortcodeToId(code){
  if(!code||"string"!=typeof code)return"";
  try{
    let s=code.length>28?code.substr(0,code.length-28):code;
    const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    let n=BigInt(0);
    for(const ch of s){const idx=alpha.indexOf(ch);if(idx<0)return"";n=n*BigInt(64)+BigInt(idx)}
    const out=n.toString();
    return/^\d{5,}$/.test(out)?out:"";
  }catch(e){return""}
}

function idToShortcode(numId){
  if(!numId)return"";
  try{
    const clean=String(numId).split("_")[0];
    if(!/^\d+$/.test(clean)||"0"===clean)return"";
    const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    let r=BigInt(clean),o="";
    for(;r>0;){const rem=r%BigInt(64);o=alpha[Number(rem)]+o,r/=BigInt(64)}
    return o;
  }catch(e){return""}
}

function extractIdFromHref(el){
  try{
    if(!el||!el.closest)return"";
    const link=el.closest('a[href*="/p/"], a[href*="/reel/"], a[href*="/reels/"], a[href*="/tv/"]')||
               (el.querySelector&&el.querySelector('a[href*="/p/"], a[href*="/reel/"], a[href*="/reels/"], a[href*="/tv/"]'));
    if(link){
      const href=link.getAttribute("href")||"";
      const m=href.match(/\/(?:p|reel|reels|tv)\/([A-Za-z0-9_-]{5,})/);
      if(m&&m[1]){
        const id=shortcodeToId(m[1]);
        if(id)return id;
      }
    }
  }catch(e){}
  return"";
}

function r(el){
  if(!el)return;
  const fromHref=extractIdFromHref(el);
  if(fromHref)return fromHref;
  for(const key of Object.keys(el)){
    if(key.startsWith("__reactFiber$")){
      let curr=el[key];
      for(let depth=0;curr&&depth<35;depth++,curr=curr.return){
        try{
          const mp=curr.memoizedProps;
          if(mp&&"object"==typeof mp){
            if(Array.isArray(mp.items)&&mp.items.length>0){
              try{window.__igdl_storeStoryReel&&window.__igdl_storeStoryReel(mp)}catch(e){}
            }
            for(const objKey of["post","media","item","story","reelItem","storyMedia","xdt_shortcode_media","reel"]){
              const mObj=mp[objKey];
              if(mObj&&"object"==typeof mObj){
                if(Array.isArray(mObj.items)&&mObj.items.length>0){
                  try{window.__igdl_storeStoryReel&&window.__igdl_storeStoryReel(mObj)}catch(e){}
                }
                try{window.__igdl_storeMediaNode&&window.__igdl_storeMediaNode(mObj)}catch(e){}
                const cand=extractExactMediaPk(mObj);
                if(cand)return cand;
                if(mObj.code||mObj.shortcode){
                  const scId=shortcodeToId(mObj.code||mObj.shortcode);
                  if(scId)return scId;
                }
              }
            }
            for(const idKey of["postId","mediaId","videoFBID","id","pk"]){
              const cand=cleanMediaPk(mp[idKey]);
              if(cand)return cand;
            }
          }
          if(curr.key){
            const candKey=cleanMediaPk(curr.key);
            if(candKey)return candKey;
          }
        }catch(e){}
      }
    }
  }
}

function s(rootEl){
  if(!rootEl||!rootEl.querySelectorAll)return;
  const links=rootEl.querySelectorAll('a[href*="/p/"], a[href*="/reel/"], a[href*="/reels/"], a[href*="/tv/"]');
  for(const a of links){
    const href=a.getAttribute("href")||"";
    const m=href.match(/\/(?:p|reel|reels|tv)\/([A-Za-z0-9_-]{5,})/);
    if(m&&m[1]){
      const id=shortcodeToId(m[1]);
      if(id)a.setAttribute("__igdl_id",id);
    }
  }
  let n=rootEl.querySelectorAll("._aatk._aiao > div, video, article, a._a6hd");
  for(const el of n){
    const id=r(el);
    if(id&&isValidMediaPk(id))el.setAttribute("__igdl_id",id);
  }
  n=rootEl.querySelectorAll(".x9f619.xjbqb8w.x1lliihq.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1");
  for(const el of n){
    const id=r(el);
    if(id&&isValidMediaPk(id)){
      el.setAttribute("__igdl_id",id);
      el.querySelectorAll("a").forEach((a=>a.setAttribute("__igdl_id",id)));
    }
  }
  n=rootEl.querySelectorAll("img");
  for(const img of n){
    const id=r(img)||r(img.parentNode?.parentNode)||r(img.parentNode?.parentNode?.parentNode);
    if(id&&isValidMediaPk(id))img.setAttribute("__igdl_id",id);
  }
}

!function(){
window.__igdl_media_map=window.__igdl_media_map||new Map;
window.__igdl_story_reels=window.__igdl_story_reels||new Map;
window.__igdl_user_id_map=window.__igdl_user_id_map||new Map;
window.__igdl_profile_req_template=window.__igdl_profile_req_template||null;
window.__igdl_last_raw_timeline=null;
window.__igdl_initial_timeline_conn=null;

function unwrapRelayFragments(e,seen=new WeakSet){
  if(!e||"object"!=typeof e)return e;
  if(seen.has(e))return e;
  seen.add(e);
  if(Array.isArray(e))return e.map((t=>unwrapRelayFragments(t,seen)));
  const out={...e};
  if(out.__fragments&&"object"==typeof out.__fragments){
    for(const fragVal of Object.values(out.__fragments)){
      if(fragVal&&"object"==typeof fragVal){
        const uFrag=unwrapRelayFragments(fragVal,seen);
        for(const[k,v]of Object.entries(uFrag)){
          "__fragments"!==k&&(void 0===out[k]||null===out[k])&&(out[k]=v);
        }
      }
    }
  }
  for(const[k,v]of Object.entries(out)){
    "__fragments"!==k&&v&&"object"==typeof v&&(out[k]=unwrapRelayFragments(v,seen));
  }
  return out;
}

function getSlideCount(e){
  if(!e||"object"!=typeof e)return 0;
  if(Array.isArray(e.carousel_media)&&e.carousel_media.length>0)return e.carousel_media.length;
  if(Array.isArray(e.edge_sidecar_to_children?.edges)&&e.edge_sidecar_to_children.edges.length>0)return e.edge_sidecar_to_children.edges.length;
  return 0;
}

function hasSingleMediaUrl(e){
  if(!e||"object"!=typeof e)return!1;
  if(2===e.media_type||e.is_video||"clips"===e.product_type||"igtv"===e.product_type){
    return Boolean((Array.isArray(e.video_versions)&&e.video_versions.length>0)||e.video_url);
  }
  return Boolean(
    (Array.isArray(e.image_versions2?.candidates)&&e.image_versions2.candidates.length>0)||
    (Array.isArray(e.video_versions)&&e.video_versions.length>0)||
    (Array.isArray(e.display_resources)&&e.display_resources.length>0)||
    e.display_url||
    e.display_uri||
    e.video_url||
    e.thumbnail_src
  );
}

function isCarouselNode(e,code=""){
  if(!e||"object"!=typeof e)return!1;
  if(8===e.media_type||"carousel_container"===e.product_type||(e.carousel_media_count&&e.carousel_media_count>1))return!0;
  const tn=String(e.__typename||"");
  if(tn.includes("Sidecar")||tn.includes("Carousel"))return!0;
  if(getSlideCount(e)>1)return!0;
  const c=code||e.code||e.shortcode;
  if(c){
    try{
      const link=document.querySelector(`a[href*="/p/${c}/"], a[href*="/reel/${c}/"]`);
      if(link){
        const svgs=link.querySelectorAll("svg");
        for(const svg of svgs){
          const label=(svg.getAttribute("aria-label")||"").toLowerCase();
          if(label.includes("carousel")||label.includes("슬라이드")||label.includes("album")||label.includes("multiple")||label.includes("galerie")||label.includes("carrusel"))return!0;
          const html=svg.innerHTML||"";
          if(html.includes("M19 5.5")||html.includes("4.5 3.5")||html.includes("M16.5 4"))return!0;
        }
      }
    }catch(e){}
  }
  return!1;
}

function isCompleteMediaNode(e,code=""){
  if(!e||"object"!=typeof e)return!1;
  if(isCarouselNode(e,code)){
    const count=getSlideCount(e);
    if(count<(e.carousel_media_count||2))return!1;
    const slides=Array.isArray(e.carousel_media)&&e.carousel_media.length>0
      ? e.carousel_media
      : (e.edge_sidecar_to_children?.edges||[]).map((ed=>ed?.node)).filter(Boolean);
    return slides.length>=2&&slides.every((s=>hasSingleMediaUrl(s)));
  }
  return hasSingleMediaUrl(e);
}

function mergeMediaNodes(existing,incoming){
  if(!existing)return incoming;
  if(!incoming)return existing;
  const merged={...existing};
  for(const[k,v]of Object.entries(incoming)){
    if(null!==v&&void 0!==v&&"__fragments"!==k&&"__fragmentOwner"!==k){
      merged[k]=v;
    }
  }
  if(getSlideCount(existing)>getSlideCount(incoming)){
    if(existing.carousel_media)merged.carousel_media=existing.carousel_media;
    if(existing.edge_sidecar_to_children)merged.edge_sidecar_to_children=existing.edge_sidecar_to_children;
  }
  if(existing.image_versions2?.candidates?.length&&!merged.image_versions2?.candidates?.length){
    merged.image_versions2=existing.image_versions2;
  }
  if(existing.video_versions?.length&&!merged.video_versions?.length){
    merged.video_versions=existing.video_versions;
  }
  if((existing.user?.username||existing.owner?.username)&&!(merged.user?.username||merged.owner?.username)){
    if(existing.user)merged.user=existing.user;
    if(existing.owner)merged.owner=existing.owner;
  }
  if(existing.taken_at&&!merged.taken_at)merged.taken_at=existing.taken_at;
  if(existing.code&&!merged.code)merged.code=existing.code;
  if(existing.pk&&!merged.pk)merged.pk=existing.pk;
  return merged;
}

function storeMediaNode(rawNode){
  if(!rawNode||"object"!=typeof rawNode)return;
  let e=unwrapRelayFragments(rawNode);
  let code=e.code||e.shortcode||"";
  let pk=extractExactMediaPk(e);
  if(!pk&&code)pk=shortcodeToId(code);
  if(!code&&pk)code=idToShortcode(pk);
  if(!code&&!pk)return;
  if(!e.image_versions2&&!e.video_versions&&!e.carousel_media&&!e.edge_sidecar_to_children&&!e.display_url&&!e.display_uri&&!e.video_url&&!e.carousel_media_count&&!e.thumbnail_src)return;
  if(code&&!e.code)e.code=code;
  if(pk&&!e.pk)e.pk=pk;
  const existing=(code&&window.__igdl_media_map.get(code))||(pk&&window.__igdl_media_map.get(pk));
  if(existing){
    e=mergeMediaNodes(existing,e);
  }
  const finalCode=e.code||e.shortcode||code;
  const finalPk=extractExactMediaPk(e)||pk;
  finalCode&&window.__igdl_media_map.set(finalCode,e);
  finalPk&&window.__igdl_media_map.set(finalPk,e);
}
window.__igdl_storeMediaNode=storeMediaNode;

function recordUserMapping(userObj,fallbackId=""){
  if(!userObj||"object"!=typeof userObj)return;
  const u=unwrapRelayFragments(userObj);
  const uname=String(u.username||"").trim();
  const uid=extractExactMediaPk(u)||String(u.pk||u.id||fallbackId||"").split("_")[0];
  if(uname&&/^\d+$/.test(uid)){
    window.__igdl_user_id_map.set(uname.toLowerCase(),uid);
    window.__igdl_user_id_map.set(uname,uid);
  }
}

function storeStoryReel(rawReel){
  if(!rawReel||"object"!=typeof rawReel)return;
  const r=unwrapRelayFragments(rawReel);
  const user=r.user||r.owner||null;
  let reelId=String(r.id||r.pk||r.strong_id__||user?.pk||user?.id||"").trim();
  if(user)recordUserMapping(user,reelId.startsWith("highlight:")?"":reelId);
  const uname=String(user?.username||"").trim();
  if(!reelId&&uname&&window.__igdl_user_id_map.has(uname.toLowerCase())){
    reelId=window.__igdl_user_id_map.get(uname.toLowerCase());
  }
  const rawItems=Array.isArray(r.items)?r.items:Array.isArray(r.media)?r.media:[];
  if(!reelId&&!uname&&0===rawItems.length)return;

  const keys=[];
  if(reelId){
    keys.push(reelId);
    if(reelId.startsWith("highlight:"))keys.push(reelId.slice(10));
    else if(/^\d+$/.test(reelId))keys.push(`highlight:${reelId}`);
  }
  if(uname){
    keys.push(uname.toLowerCase());
    keys.push(uname);
  }

  let entry=null;
  for(const k of keys){
    if(window.__igdl_story_reels.has(k)){
      entry=window.__igdl_story_reels.get(k);
      break;
    }
  }
  if(!entry){
    entry={id:reelId||uname,user:user||null,itemsMap:new Map};
  }else{
    if(reelId&&(!entry.id||entry.id===uname))entry.id=reelId;
    if(user&&(user.username||user.pk||user.id))entry.user={...(entry.user||{}),...user};
  }

  for(const rawIt of rawItems){
    if(!rawIt||"object"!=typeof rawIt)continue;
    const it=unwrapRelayFragments(rawIt);
    if(!it.user&&entry.user)it.user=entry.user;
    if(it.user)recordUserMapping(it.user);
    const itemPk=extractExactMediaPk(it)||String(it.pk||it.id||"").split("_")[0];
    if(itemPk)it.pk=itemPk;
    storeMediaNode(it);
    if(itemPk&&(it.image_versions2||it.video_versions||it.display_url||it.video_url)){
      const prev=entry.itemsMap.get(itemPk);
      entry.itemsMap.set(itemPk,prev?mergeMediaNodes(prev,it):it);
    }
  }

  for(const k of keys){
    if(k)window.__igdl_story_reels.set(k,entry);
  }
}
window.__igdl_storeStoryReel=storeStoryReel;

let inHarvest=!1;
function walkAndHarvest(e,depth=0,seen=new WeakSet){
  if(!e||"object"!=typeof e||depth>26||seen.has(e))return;
  seen.add(e);
  if(Array.isArray(e)){
    for(const t of e)walkAndHarvest(t,depth+1,seen);
    return;
  }
  const tlConn=e.xdt_api__v1__feed__user_timeline_graphql_connection||e.xdt_user_timeline_graphql_connection;
  if(tlConn&&Array.isArray(tlConn.edges)){
    const conn=unwrapRelayFragments(tlConn);
    window.__igdl_last_raw_timeline=conn;
    window.__igdl_initial_timeline_conn||(window.__igdl_initial_timeline_conn=conn);
  }
  if(e.user&&"object"==typeof e.user&&e.user.username&&(e.user.pk||e.user.id)){
    recordUserMapping(e.user);
  }
  if(e.username&&(e.pk||e.id)&&(e.profile_pic_url||void 0!==e.full_name||void 0!==e.is_private)){
    recordUserMapping(e);
  }
  if(Array.isArray(e.tray)){
    for(const t of e.tray)storeStoryReel(t);
  }
  if(Array.isArray(e.reels_media)){
    for(const r of e.reels_media)storeStoryReel(r);
  }
  if(e.reels&&"object"==typeof e.reels&&!Array.isArray(e.reels)){
    for(const r of Object.values(e.reels))storeStoryReel(r);
  }
  const rmConn=e.xdt_api__v1__feed__reels_media||e.xdt_api__v1__feed__reels_media__connection;
  if(rmConn&&"object"==typeof rmConn){
    const uRm=unwrapRelayFragments(rmConn);
    if(Array.isArray(uRm.reels_media)){
      for(const r of uRm.reels_media)storeStoryReel(r);
    }
    if(Array.isArray(uRm.edges)){
      for(const ed of uRm.edges)ed?.node&&storeStoryReel(ed.node);
    }
  }
  if(Array.isArray(e.items)&&e.items.length>0&&(e.user||e.owner||e.reel_type||String(e.id||"").startsWith("highlight:"))){
    const first=e.items[0];
    if(first&&"object"==typeof first&&(first.pk||first.id||first.image_versions2||first.video_versions||first.media_type)){
      storeStoryReel(e);
    }
  }
  if((e.code||e.shortcode||e.pk||e.id)&&(e.image_versions2||e.video_versions||e.carousel_media||e.edge_sidecar_to_children||e.display_url||e.display_uri||e.video_url)){
    storeMediaNode(e);
    if(String(e.id||"").includes("_")&&(e.user?.username||e.owner?.username)){
      const uidPart=String(e.id).split("_")[1];
      recordUserMapping(e.user||e.owner,uidPart);
    }
  }
  for(const k of Object.keys(e)){
    if("__fragmentOwner"===k)continue;
    const v=e[k];
    if(v&&"object"==typeof v)walkAndHarvest(v,depth+1,seen);
  }
}

function parseGraphqlResponseText(txt){
  const results=[];
  if("string"!=typeof txt||!txt)return results;
  const clean=txt.startsWith("for (;;);")?txt.slice(9):txt;
  try{
    const parsed=origJsonParse(clean);
    if(parsed&&"object"==typeof parsed){
      walkAndHarvest(parsed,0);
      results.push(parsed);
      return results;
    }
  }catch(e){}
  const lines=clean.split(/\r?\n/);
  for(const line of lines){
    const trimmed=line.trim();
    if(!trimmed)continue;
    const lClean=trimmed.startsWith("for (;;);")?trimmed.slice(9).trim():trimmed;
    if(lClean.startsWith("{")){
      try{
        const parsed=origJsonParse(lClean);
        if(parsed&&"object"==typeof parsed){
          walkAndHarvest(parsed,0);
          results.push(parsed);
        }
      }catch(e){}
    }
  }
  return results;
}

// Hook JSON.parse so any GraphQL / API payload parsed by Instagram or Relay is harvested SYNCHRONOUSLY before Relay masks fragments!
try{
  JSON.parse=function(text,reviver){
    const res=origJsonParse.apply(this,arguments);
    if(!inHarvest&&res&&"object"==typeof res&&"string"==typeof text){
      if(
        text.includes("image_versions2")||
        text.includes("carousel_media")||
        text.includes("edge_sidecar_to_children")||
        text.includes("xdt_api__v1__")||
        text.includes("xdt_shortcode_media")||
        text.includes("shortcode_media")||
        text.includes("video_versions")||
        text.includes("display_url")||
        text.includes("reels_media")||
        text.includes("reels_tray")
      ){
        inHarvest=!0;
        try{walkAndHarvest(res,0)}catch(e){}
        inHarvest=!1;
      }
    }
    return res;
  };
}catch(e){}

function harvestFromRelayStore(){
  try{
    if("function"!=typeof window.require)return;
    const env=window.require("PolarisRelayEnvironment");
    const source=env?.getStore?.()?.getSource?.();
    if(!source||"function"!=typeof source.toJSON)return;
    const records=source.toJSON();
    if(!records||"object"!=typeof records)return;
    function deref(val,depth=0){
      if(!val||"object"!=typeof val||depth>6)return val;
      if(Array.isArray(val))return val.map((item=>deref(item,depth+1)));
      if("string"==typeof val.__ref&&records[val.__ref]){
        return deref(records[val.__ref],depth+1);
      }
      if(Array.isArray(val.__refs)){
        return val.__refs.map((id=>records[id]?deref(records[id],depth+1):null)).filter(Boolean);
      }
      const out={};
      for(const[k,v]of Object.entries(val)){
        const cleanKey=k.includes("(")?k.split("(")[0]:k;
        out[cleanKey]=deref(v,depth+1);
      }
      return out;
    }
    for(const rec of Object.values(records)){
      if(!rec||"object"!=typeof rec)continue;
      const tn=String(rec.__typename||"");
      if(rec.username&&(rec.pk||rec.id)){
        recordUserMapping(rec);
      }
      if(tn.includes("Reel")||Array.isArray(rec.items)||String(rec.id||"").startsWith("highlight:")){
        try{storeStoryReel(deref(rec,0))}catch(e){}
      }
      if(rec.code||rec.shortcode||tn.includes("Media")||tn.includes("Sidecar")||rec.image_versions2||rec.carousel_media||rec.video_versions){
        const hydrated=deref(rec,0);
        storeMediaNode(hydrated);
      }
    }
  }catch(e){}
}

function scanEmbeddedJsonScripts(){
  try{
    const scripts=document.querySelectorAll('script[type="application/json"]');
    for(const s of scripts){
      if(s.__igdl_scanned)continue;
      s.__igdl_scanned=!0;
      const txt=s.textContent||"";
      if(txt.includes("image_versions2")||txt.includes("carousel_media")||txt.includes("edge_sidecar_to_children")||txt.includes("xdt_api__v1__")||txt.includes("xdt_shortcode_media")||txt.includes("video_versions")||txt.includes("reels_media")||txt.includes("reels_tray")){
        parseGraphqlResponseText(txt);
      }
    }
  }catch(e){}
}

function captureRequestBody(bodyStr){
  try{
    if("string"!=typeof bodyStr)return;
    if(bodyStr.includes("PolarisProfilePosts")||bodyStr.includes("user_timeline")){
      const params=new URLSearchParams(bodyStr);
      const docId=params.get("doc_id");
      const varsStr=params.get("variables");
      if(docId&&varsStr){
        const vars=origJsonParse(varsStr);
        const pv={};
        for(const[k,v]of Object.entries(vars))k.startsWith("__relay_internal__pv__")&&(pv[k]=v);
        window.__igdl_profile_req_template={docId,pv,rawParams:bodyStr};
      }
    }
  }catch(e){}
}

try{
  const origOpen=XMLHttpRequest.prototype.open;
  const origSend=XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open=function(){
    try{
      this.addEventListener("readystatechange",(function(){
        if(4===this.readyState){
          try{
            if(!this.responseType||"text"===this.responseType){
              const txt=this.responseText;
              if("string"==typeof txt&&(txt.includes("image_versions2")||txt.includes("carousel_media")||txt.includes("edge_sidecar_to_children")||txt.includes("xdt_api__v1__")||txt.includes("xdt_shortcode_media")||txt.includes("video_versions")||txt.includes("reels_media")||txt.includes("reels_tray"))){
                parseGraphqlResponseText(txt);
              }
            }else if("json"===this.responseType&&this.response&&"object"==typeof this.response){
              walkAndHarvest(this.response,0);
            }
          }catch(e){}
        }
      }));
    }catch(e){}
    return origOpen.apply(this,arguments);
  };
  XMLHttpRequest.prototype.send=function(body){
    try{"string"==typeof body&&captureRequestBody(body)}catch(e){}
    return origSend.apply(this,arguments);
  };
}catch(e){}

try{
  const origFetch=window.fetch;
  if("function"==typeof origFetch){
    window.fetch=async function(...args){
      try{
        const init=args[1];
        if(init?.body){
          "string"==typeof init.body?captureRequestBody(init.body):init.body instanceof URLSearchParams&&captureRequestBody(init.body.toString());
        }
      }catch(e){}
      const resp=await origFetch.apply(this,args);
      try{
        const url=String(args[0]?.url||args[0]||"");
        if(url.includes("graphql")||url.includes("/api/v1/")){
          const clone=resp.clone();
          const txt=await clone.text();
          if(txt&&(txt.includes("image_versions2")||txt.includes("carousel_media")||txt.includes("edge_sidecar_to_children")||txt.includes("xdt_api__v1__")||txt.includes("xdt_shortcode_media")||txt.includes("video_versions")||txt.includes("reels_media")||txt.includes("reels_tray"))){
            parseGraphqlResponseText(txt);
          }
        }
      }catch(e){}
      return resp;
    };
  }
}catch(e){}

function getAuthHeaders(){
  let csrf=(document.cookie.match(/csrftoken=([^;]+)/)||[])[1]||"";
  if(!csrf&&"function"==typeof window.require)try{csrf=window.require("PolarisConfig").getCSRFToken()}catch(e){}
  let lsd="";
  if("function"==typeof window.require)try{lsd=window.require("LSD")?.token||""}catch(e){}
  if(!lsd){const el=document.querySelector('input[name="lsd"]');el&&(lsd=el.value||"")}
  let dtsg="";
  if("function"==typeof window.require){
    try{dtsg=window.require("DTSG")?.getToken?.()||window.require("DTSGInitData")?.token||""}catch(e){}
  }
  if(!dtsg){const el=document.querySelector('input[name="fb_dtsg"]');el&&(dtsg=el.value||"")}
  let userId="";
  if("function"==typeof window.require){
    try{userId=window.require("CurrentUserInitialData")?.USER_ID||window.require("PolarisConfig")?.getViewerId?.()||""}catch(e){}
  }
  const appId=sessionStorage.getItem("__ig_app_id")||"936619743392459";
  const claim=sessionStorage.getItem("__ig_www_claim")||sessionStorage.getItem("www-claim-v2")||"0";
  const headers={
    "Content-Type":"application/x-www-form-urlencoded",
    "X-CSRFToken":csrf,
    "X-IG-App-ID":appId,
    "X-IG-WWW-Claim":claim,
    "X-Requested-With":"XMLHttpRequest"
  };
  lsd&&(headers["X-FB-LSD"]=lsd);
  return{headers,lsd,dtsg,userId,appId,claim,csrf};
}

function getRelayModuleInfo(names,opFallbackName){
  let mod=null,docId=null,pv={};
  if("function"==typeof window.require){
    for(const name of names){
      try{
        const m=window.require(name);
        if(m&&(m.params||m.default?.params||m.POST_QUERY?.params)){
          mod=m.POST_QUERY||m.default||m;
          break;
        }
      }catch(e){}
    }
    if(mod?.params?.id)docId=String(mod.params.id);
    if(!docId&&opFallbackName){
      try{
        const opId=window.require(opFallbackName);
        "string"==typeof opId&&opId.length>5&&(docId=opId);
      }catch(e){}
    }
    if(mod?.params?.providedVariables){
      for(const[k,v]of Object.entries(mod.params.providedVariables)){
        try{"function"==typeof v?.get&&(pv[k]=v.get())}catch(e){}
      }
    }
  }
  return{mod,docId,pv};
}

window.__igdl_resolvePostByShortcode=async function(shortcode,mediaId){
  scanEmbeddedJsonScripts();
  let numId=cleanMediaPk(mediaId);
  if(!numId&&shortcode)numId=shortcodeToId(shortcode);
  if(!shortcode&&numId)shortcode=idToShortcode(numId);

  const getCached=()=>((shortcode&&window.__igdl_media_map.get(shortcode))||(numId&&window.__igdl_media_map.get(numId))||null);

  let cached=getCached();
  if(cached&&isCompleteMediaNode(cached,shortcode))return cached;

  const{headers,lsd,dtsg,userId,appId,claim}=getAuthHeaders();

  // 1. Try /api/v1/media/{id}/info/ first (fast, unmasked REST JSON with full carousel_media and video_versions)
  if(numId&&"0"!==numId){
    try{
      const r=await fetch(`https://www.instagram.com/api/v1/media/${numId}/info/`,{
        credentials:"include",
        headers:{"x-ig-app-id":appId,"x-ig-www-claim":claim,"x-csrftoken":headers["X-CSRFToken"],"x-requested-with":"XMLHttpRequest"}
      });
      if(r.ok&&!r.redirected&&(r.headers.get("content-type")||"").includes("json")){
        const j=await r.json();
        if(j?.items?.[0]){
          storeMediaNode(j.items[0]);
          const afterRest=getCached()||j.items[0];
          if(isCompleteMediaNode(afterRest,shortcode))return afterRest;
        }
      }
    }catch(e){}
  }

  // 2. Try CometRelay.fetchQuery (our synchronous JSON.parse & XHR/fetch hooks capture the unmasked response)
  if(shortcode&&"function"==typeof window.require){
    const actionInfo=getRelayModuleInfo(["PolarisPostActionLoadPostQuery.graphql","PolarisPostActionLoadPostQuery"],"PolarisPostActionLoadPostQuery_instagramRelayOperation");
    const rootInfo=getRelayModuleInfo(["PolarisPostRootQuery.graphql","PolarisPostRootQuery"],"PolarisPostRootQuery_instagramRelayOperation");
    for(const qMod of[actionInfo.mod,rootInfo.mod].filter(Boolean)){
      try{
        const n=await window.require("CometRelay").fetchQuery(
          window.require("PolarisRelayEnvironment"),
          qMod,
          {child_comment_count:3,fetch_comment_count:40,has_threaded_comments:!0,parent_comment_count:24,shortcode},
          {fetchPolicy:"network-only"}
        ).toPromise();
        const item=n?.xdt_api__v1__media__shortcode__web_info?.items?.[0]||n?.xdt_shortcode_media||n?.shortcode_media;
        if(item)storeMediaNode(unwrapRelayFragments(item));
        harvestFromRelayStore();
        const afterRelay=getCached();
        if(afterRelay&&isCompleteMediaNode(afterRelay,shortcode))return afterRelay;
      }catch(e){}
    }
  }

  // 3. Try raw GraphQL PolarisPostRootQuery & PolarisPostActionLoadPostQuery
  if(shortcode){
    const rootInfo=getRelayModuleInfo(["PolarisPostRootQuery.graphql","PolarisPostRootQuery"],"PolarisPostRootQuery_instagramRelayOperation");
    const actionInfo=getRelayModuleInfo(["PolarisPostActionLoadPostQuery.graphql","PolarisPostActionLoadPostQuery"],"PolarisPostActionLoadPostQuery_instagramRelayOperation");
    const candidates=[
      {
        friendly:"PolarisPostRootQuery",
        docId:rootInfo.docId||"27128499623469141",
        vars:{
          shortcode,
          __relay_internal__pv__PolarisAIGMMediaWebLabelEnabledrelayprovider:!1,
          __relay_internal__pv__PolarisFeedShareMenurelayprovider:!0,
          __relay_internal__pv__PolarisIsLoggedInrelayprovider:!0,
          ...rootInfo.pv
        }
      },
      {
        friendly:"PolarisPostActionLoadPostQuery",
        docId:actionInfo.docId||"8845758582119845",
        vars:{
          child_comment_count:3,
          fetch_comment_count:40,
          has_threaded_comments:!0,
          parent_comment_count:24,
          shortcode,
          ...actionInfo.pv
        }
      }
    ];
    for(const cand of candidates){
      if(!cand.docId)continue;
      const body=new URLSearchParams({
        fb_api_req_friendly_name:cand.friendly,
        variables:JSON.stringify(cand.vars),
        doc_id:cand.docId
      });
      lsd&&body.set("lsd",lsd);
      dtsg&&body.set("fb_dtsg",dtsg);
      userId&&body.set("av",userId);
      for(const ep of["/graphql/query","/api/graphql"]){
        try{
          const resp=await fetch(ep,{method:"POST",credentials:"include",headers,body});
          if(!resp.ok||resp.redirected)continue;
          const chunks=parseGraphqlResponseText(await resp.text());
          for(const data of chunks){
            const item=data?.data?.xdt_api__v1__media__shortcode__web_info?.items?.[0]||data?.data?.xdt_shortcode_media||data?.data?.shortcode_media;
            if(item)storeMediaNode(item);
          }
          const afterGql=getCached();
          if(afterGql&&isCompleteMediaNode(afterGql,shortcode))return afterGql;
        }catch(e){}
      }
    }
  }

  harvestFromRelayStore();
  return getCached();
};

window.__igdl_loadProfilePosts=async function(username,after,count=12){
  scanEmbeddedJsonScripts();
  window.__igdl_last_raw_timeline=null;
  const{headers,lsd,dtsg,userId}=getAuthHeaders();
  const info=getRelayModuleInfo(
    ["PolarisProfilePostsTabContentQuery_connection.graphql","PolarisProfilePostsTabContentQuery_connection","PolarisProfilePostsQuery.graphql","PolarisProfilePostsQuery"],
    "PolarisProfilePostsTabContentQuery_connection_instagramRelayOperation"
  );
  const docId=window.__igdl_profile_req_template?.docId||info.docId||"29240983615539641";
  const vars={
    after:after||null,
    before:null,
    data:{
      count,
      include_reel_media_seen_timestamp:!0,
      include_relationship_info:!0,
      latest_besties_reel_media:!0,
      latest_reel_media:!0
    },
    first:count,
    include_multi_captions:!0,
    last:null,
    username,
    __relay_internal__pv__PolarisMultiCaptionCarouselEnabledrelayprovider:!0,
    __relay_internal__pv__PolarisShortDramaEnabledrelayprovider:!0,
    __relay_internal__pv__PolarisSEOIsCrawlerrelayprovider:!1,
    __relay_internal__pv__PolarisThreadsStyleCommentsEnabledrelayprovider:!1,
    __relay_internal__pv__PolarisReelsRecoDebugOverlayEnabledrelayprovider:!1,
    __relay_internal__pv__PolarisFeedShareMenurelayprovider:!0,
    __relay_internal__pv__PolarisIsLoggedInrelayprovider:!0,
    ...(window.__igdl_profile_req_template?.pv||{}),
    ...info.pv
  };

  let conn=null;

  // 1. Try CometRelay.fetchQuery first when available (our synchronous JSON.parse hook captures the full unmasked connection into __igdl_last_raw_timeline!)
  if(info.mod&&"function"==typeof window.require){
    try{
      const res=await window.require("CometRelay").fetchQuery(
        window.require("PolarisRelayEnvironment"),
        info.mod,
        vars,
        {fetchPolicy:"network-only"}
      ).toPromise();
      if(window.__igdl_last_raw_timeline?.edges){
        conn=window.__igdl_last_raw_timeline;
      }else if(res?.xdt_api__v1__feed__user_timeline_graphql_connection){
        conn=unwrapRelayFragments(res.xdt_api__v1__feed__user_timeline_graphql_connection);
      }
    }catch(e){}
  }

  // 2. Try raw HTTP GraphQL if CometRelay did not return a connection
  if(!conn){
    const body=new URLSearchParams({
      fb_api_req_friendly_name:"PolarisProfilePostsTabContentQuery_connection",
      variables:JSON.stringify(vars),
      doc_id:docId
    });
    lsd&&body.set("lsd",lsd);
    dtsg&&body.set("fb_dtsg",dtsg);
    userId&&body.set("av",userId);
    for(const ep of["/graphql/query","/api/graphql"]){
      try{
        const resp=await fetch(ep,{method:"POST",credentials:"include",headers,body});
        if(!resp.ok||resp.redirected)continue;
        const chunks=parseGraphqlResponseText(await resp.text());
        if(window.__igdl_last_raw_timeline?.edges){
          conn=window.__igdl_last_raw_timeline;
          break;
        }
        for(const json of chunks){
          const c=json?.data?.xdt_api__v1__feed__user_timeline_graphql_connection;
          if(c&&Array.isArray(c.edges)){
            conn=unwrapRelayFragments(c);
            break;
          }
        }
        if(conn)break;
      }catch(e){}
    }
  }

  // 3. Fallback to initial embedded connection on page 1 if network query failed
  if(!conn&&!after&&window.__igdl_initial_timeline_conn?.edges){
    conn=window.__igdl_initial_timeline_conn;
  }

  if(!conn||!Array.isArray(conn.edges))return null;

  harvestFromRelayStore();

  // 4. Enrich every edge node with cached unmasked data and resolve incomplete carousels/videos/masked nodes!
  const enrichedEdges=[];
  for(const edge of conn.edges){
    let node=unwrapRelayFragments(edge?.node);
    if(!node)continue;
    let code=node.code||node.shortcode||"";
    let pk=cleanMediaPk(node.pk||node.id||node.media_id);
    if(!pk&&code)pk=shortcodeToId(code);
    if(!code&&pk)code=idToShortcode(pk);

    const cached=(code&&window.__igdl_media_map.get(code))||(pk&&window.__igdl_media_map.get(pk));
    if(cached){
      node=mergeMediaNodes(cached,node);
      code=node.code||node.shortcode||code;
      pk=cleanMediaPk(node.pk||node.id)||pk;
    }

    if(!isCompleteMediaNode(node,code)){
      try{
        const full=await window.__igdl_resolvePostByShortcode(code,pk);
        if(full){
          node=mergeMediaNodes(node,full);
        }
        await new Promise((r=>setTimeout(r,150)));
      }catch(e){}
    }
    storeMediaNode(node);
    enrichedEdges.push({node});
  }
  return{edges:enrichedEdges,page_info:conn.page_info};
};


function harvestStoryFromDom(){
  let activeDomMediaId="";
  let activeAssetNames=[];
  try{
    const container=document.querySelector('[id^="mount_"]')||document.body;
    const mediaEls=[...container.querySelectorAll("video, img")];
    const visibleEls=[];
    for(const el of mediaEls){
      const rect=el.getBoundingClientRect();
      if(rect.width>=160&&rect.height>=200&&rect.bottom>0&&rect.right>0){
        visibleEls.push({el,area:rect.width*rect.height});
      }
      const id=r(el);
      if(id&&isValidMediaPk(id))el.setAttribute("__igdl_id",id);
    }
    visibleEls.sort((a,b)=>b.area-a.area);
    for(const{el}of visibleEls){
      const id=el.getAttribute("__igdl_id")||r(el)||r(el.parentElement)||r(el.parentElement?.parentElement);
      if(id&&isValidMediaPk(id)&&!activeDomMediaId){
        activeDomMediaId=cleanMediaPk(id);
      }
      const srcs=[el.currentSrc,el.src,el.poster,...Array.from(el.querySelectorAll?.("source")||[]).map(s=>s.src)].filter(Boolean);
      for(const src of srcs){
        const m=String(src).match(/\/([^\/?#]+\.(?:jpg|jpeg|png|webp|mp4))(?:[?#]|$)/i);
        if(m&&m[1]&&!activeAssetNames.includes(m[1]))activeAssetNames.push(m[1]);
      }
    }
  }catch(e){}
  return{activeDomMediaId,activeAssetNames};
}

function getActiveStorySlideIndex(){
  try{
    const mount=document.querySelector('[id^="mount_"]')||document.body;
    const header=mount.querySelector("header")||mount.querySelector(".x6s0dn4.x78zum5.x1xmf6yo");
    if(!header)return -1;
    const root=header.parentElement||header;
    const rows=root.querySelectorAll("div");
    for(const row of rows){
      const children=Array.from(row.children);
      if(children.length>=2&&children.length<=100){
        const rects=children.map(c=>c.getBoundingClientRect());
        const sameRow=rects.every(rc=>rc.height>0&&rc.height<=8&&rc.width>=4&&Math.abs(rc.top-rects[0].top)<=4);
        if(sameRow){
          for(let idx=0;idx<children.length;idx++){
            const seg=children[idx];
            const inner=seg.querySelector("div[style*='width']")||seg.lastElementChild;
            if(!inner)continue;
            const st=inner.getAttribute("style")||"";
            const compWidth=inner.getBoundingClientRect().width;
            const parentWidth=rects[idx].width;
            if(st.includes("100%")&&Math.abs(compWidth-parentWidth)<=1.5)continue;
            return idx;
          }
        }
      }
    }
  }catch(e){}
  return -1;
}

function buildDomFallbackStoryItem(username,fallbackId=""){
  try{
    const mount=document.querySelector('[id^="mount_"]')||document.body;
    const vids=Array.from(mount.querySelectorAll("video")).filter(v=>{
      const rc=v.getBoundingClientRect();
      return rc.width>=160&&rc.height>=200;
    });
    for(const v of vids){
      const id=cleanMediaPk(v.getAttribute("__igdl_id")||r(v))||fallbackId||String(Date.now());
      const cached=id&&window.__igdl_media_map.get(id);
      if(cached&&(cached.video_versions?.length||cached.image_versions2?.candidates?.length))return cached;
      const srcs=[v.currentSrc,v.src,...Array.from(v.querySelectorAll?.("source")||[]).map(s=>s.src)].filter(u=>u&&u.startsWith("http"));
      if(srcs.length>0){
        return{
          pk:id,
          id,
          media_type:2,
          taken_at:Math.floor(Date.now()/1e3),
          user:{username:username||"instagram"},
          video_versions:[{url:srcs[0],width:v.videoWidth||1080,height:v.videoHeight||1920}]
        };
      }
    }
    const imgs=Array.from(mount.querySelectorAll("img")).filter(im=>{
      const rc=im.getBoundingClientRect();
      return rc.width>=160&&rc.height>=200;
    });
    imgs.sort((a,b)=>(b.getBoundingClientRect().width*b.getBoundingClientRect().height)-(a.getBoundingClientRect().width*a.getBoundingClientRect().height));
    if(imgs.length>0){
      const im=imgs[0];
      const id=cleanMediaPk(im.getAttribute("__igdl_id")||r(im))||fallbackId||String(Date.now());
      const cached=id&&window.__igdl_media_map.get(id);
      if(cached&&(cached.video_versions?.length||cached.image_versions2?.candidates?.length))return cached;
      let bestUrl=im.currentSrc||im.src||"";
      const srcset=im.getAttribute("srcset")||"";
      if(srcset){
        let bestW=0;
        for(const part of srcset.split(",")){
          const[u,wStr]=part.trim().split(/\s+/);
          const w=parseInt(wStr,10)||0;
          if(u&&u.startsWith("http")&&w>=bestW){bestW=w;bestUrl=u;}
        }
      }
      if(bestUrl&&bestUrl.startsWith("http")){
        return{
          pk:id,
          id,
          media_type:1,
          taken_at:Math.floor(Date.now()/1e3),
          user:{username:username||"instagram"},
          image_versions2:{candidates:[{url:bestUrl,width:im.naturalWidth||1080,height:im.naturalHeight||1920}]}
        };
      }
    }
  }catch(e){}
  return null;
}

window.__igdl_fetchStoryTray=async function(){
  scanEmbeddedJsonScripts();
  harvestFromRelayStore();
  const{headers,appId,claim}=getAuthHeaders();
  try{
    const r=await fetch("https://www.instagram.com/api/v1/feed/reels_tray/?is_following_feed=false",{
      credentials:"include",
      headers:{"x-ig-app-id":appId,"x-ig-www-claim":claim,"x-csrftoken":headers["X-CSRFToken"],"x-requested-with":"XMLHttpRequest"}
    });
    if(r.ok&&!r.redirected&&(r.headers.get("content-type")||"").includes("json")){
      const j=await r.json();
      walkAndHarvest(j,0);
      if(Array.isArray(j?.tray)&&j.tray.length>0)return j.tray;
    }
  }catch(e){}
  const synthesized=[];
  for(const[uname,uid]of window.__igdl_user_id_map.entries()){
    if(uname===uname.toLowerCase()){
      synthesized.push({id:uid,user:{username:uname,pk:uid}});
    }
  }
  return synthesized;
};

window.__igdl_resolveStoryReel=async function(req){
  scanEmbeddedJsonScripts();
  harvestFromRelayStore();
  const{activeDomMediaId,activeAssetNames}=harvestStoryFromDom();

  const pathMatch=location.pathname.match(/^\/?stories\/([^\/]+)(?:\/(\d+))?/i);
  const username=String(req?.username||(pathMatch&&pathMatch[1])||"").trim();
  const urlMediaId=String(req?.initial_media_id||(pathMatch&&pathMatch[2])||req?.media_id||"").trim();
  const isHighlight="highlights"===username.toLowerCase();
  const wantAll=Boolean(req?.all);

  let reelId=String(req?.reel_id||"").trim();
  if(isHighlight){
    if(!reelId&&urlMediaId)reelId=`highlight:${urlMediaId}`;
  }else if(username){
    if(!reelId)reelId=window.__igdl_user_id_map.get(username.toLowerCase())||"";
    if(!reelId){
      const cachedReel=window.__igdl_story_reels.get(username.toLowerCase());
      if(cachedReel?.id&&/^\d+$/.test(String(cachedReel.id)))reelId=String(cachedReel.id);
    }
    if(!reelId&&urlMediaId){
      const cachedItem=window.__igdl_media_map.get(cleanMediaPk(urlMediaId));
      const itemUid=extractExactMediaPk(cachedItem?.user||cachedItem?.owner)||
                    (String(cachedItem?.id||"").includes("_")?String(cachedItem.id).split("_")[1]:"");
      if(itemUid&&/^\d+$/.test(itemUid)){
        reelId=itemUid;
        recordUserMapping({username,pk:reelId});
      }
    }
  }

  const{headers,lsd,dtsg,userId,appId,claim}=getAuthHeaders();
  const restHeaders={"x-ig-app-id":appId,"x-ig-www-claim":claim,"x-csrftoken":headers["X-CSRFToken"],"x-requested-with":"XMLHttpRequest"};

  if(!isHighlight&&username&&!reelId){
    try{
      const r=await fetch(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(username)}`,{
        credentials:"include",
        headers:restHeaders
      });
      if(r.ok&&!r.redirected&&(r.headers.get("content-type")||"").includes("json")){
        const j=await r.json();
        walkAndHarvest(j,0);
        const u=j?.data?.user;
        const uid=extractExactMediaPk(u)||String(u?.pk||u?.id||"");
        if(/^\d+$/.test(uid)){
          reelId=uid;
          recordUserMapping({username,pk:uid,profile_pic_url:u?.profile_pic_url});
        }
      }
    }catch(e){}
  }

  if(!isHighlight&&username&&!reelId){
    try{
      await window.__igdl_fetchStoryTray();
      reelId=window.__igdl_user_id_map.get(username.toLowerCase())||"";
    }catch(e){}
  }

  const targetSlideId=isHighlight
    ? cleanMediaPk(req?.dom_media_id||(req?.media_id!==urlMediaId?req?.media_id:"")||activeDomMediaId)
    : cleanMediaPk(urlMediaId||req?.media_id||req?.dom_media_id||activeDomMediaId);

  if(reelId){
    try{
      const r=await fetch(`https://www.instagram.com/api/v1/feed/reels_media/?reel_ids=${encodeURIComponent(reelId)}`,{
        credentials:"include",
        headers:restHeaders
      });
      if(r.ok&&!r.redirected&&(r.headers.get("content-type")||"").includes("json")){
        const j=await r.json();
        walkAndHarvest(j,0);
        const rawReel=j?.reels?.[reelId]||j?.reels?.[reelId.replace(/^highlight:/,"")]||j?.reels_media?.[0]||Object.values(j?.reels||{})[0];
        if(rawReel)storeStoryReel(rawReel);
      }
    }catch(e){}
  }

  const getCachedReel=()=>((reelId&&window.__igdl_story_reels.get(reelId))||(urlMediaId&&window.__igdl_story_reels.get(urlMediaId))||(username&&!isHighlight&&window.__igdl_story_reels.get(username.toLowerCase()))||null);

  let reelEntry=getCachedReel();
  if((!reelEntry||0===reelEntry.itemsMap.size)&&reelId&&"function"==typeof window.require){
    const storyInfo=getRelayModuleInfo(
      ["PolarisStoriesV3ReelPageStandaloneQuery.graphql","PolarisStoriesV3ReelPageStandaloneQuery","PolarisStoriesV3ReelPageGalleryQuery.graphql","PolarisStoriesV3ReelPageGalleryQuery"],
      "PolarisStoriesV3ReelPageStandaloneQuery_instagramRelayOperation"
    );
    if(storyInfo.mod){
      try{
        const res=await window.require("CometRelay").fetchQuery(
          window.require("PolarisRelayEnvironment"),
          storyInfo.mod,
          {reel_ids_arr:[reelId],reel_ids:[reelId],initial_reel_id:reelId},
          {fetchPolicy:"network-only"}
        ).toPromise();
        if(res)walkAndHarvest(res,0);
        harvestFromRelayStore();
        reelEntry=getCachedReel();
      }catch(e){}
    }
    if((!reelEntry||0===reelEntry.itemsMap.size)&&storyInfo.docId){
      const body=new URLSearchParams({
        fb_api_req_friendly_name:"PolarisStoriesV3ReelPageStandaloneQuery",
        variables:JSON.stringify({reel_ids_arr:[reelId],reel_ids:[reelId],initial_reel_id:reelId,...storyInfo.pv}),
        doc_id:storyInfo.docId
      });
      lsd&&body.set("lsd",lsd);
      dtsg&&body.set("fb_dtsg",dtsg);
      userId&&body.set("av",userId);
      for(const ep of["/graphql/query","/api/graphql"]){
        try{
          const resp=await fetch(ep,{method:"POST",credentials:"include",headers,body});
          if(resp.ok&&!resp.redirected){
            parseGraphqlResponseText(await resp.text());
            reelEntry=getCachedReel();
            if(reelEntry&&reelEntry.itemsMap.size>0)break;
          }
        }catch(e){}
      }
    }
  }

  if(!wantAll&&targetSlideId){
    const hasInReel=reelEntry&&Array.from(reelEntry.itemsMap.keys()).some(k=>isMatchingMediaPk(k,targetSlideId));
    const cachedSingle=window.__igdl_media_map.get(targetSlideId);
    if(!hasInReel&&(!cachedSingle||!hasSingleMediaUrl(cachedSingle))){
      try{
        const r=await fetch(`https://www.instagram.com/api/v1/media/${targetSlideId}/info/`,{
          credentials:"include",
          headers:restHeaders
        });
        if(r.ok&&!r.redirected&&(r.headers.get("content-type")||"").includes("json")){
          const j=await r.json();
          if(j?.items?.[0]){
            storeMediaNode(j.items[0]);
            storeStoryReel({id:reelId||j.items[0].user?.pk||username,user:j.items[0].user||{username},items:[j.items[0]]});
            reelEntry=getCachedReel();
          }
        }
      }catch(e){}
    }
  }

  let allItems=reelEntry?Array.from(reelEntry.itemsMap.values()):[];
  let resolvedUser=reelEntry?.user||(username&&!isHighlight?{username}:null);

  if(!resolvedUser||!resolvedUser.username){
    const firstWithUser=allItems.find(it=>it?.user?.username||it?.owner?.username);
    const domUserEl=document.querySelector('[id^="mount_"] header a[href^="/"]')||document.querySelector('a[href]:has(>img[src]):not([href^="/stories/"])');
    const domUname=domUserEl?(domUserEl.getAttribute("href")||"").replace(/^\/|\/$/g,""):"";
    resolvedUser={
      username:resolvedUser?.username||firstWithUser?.user?.username||firstWithUser?.owner?.username||(!isHighlight&&username)||domUname||"instagram",
      profile_pic_url:resolvedUser?.profile_pic_url||firstWithUser?.user?.profile_pic_url||""
    };
  }

  let selectedItems=[];
  if(wantAll){
    selectedItems=allItems;
  }else{
    if(targetSlideId){
      selectedItems=allItems.filter(it=>isMatchingMediaPk(extractExactMediaPk(it),targetSlideId));
      if(0===selectedItems.length&&window.__igdl_media_map.has(targetSlideId)){
        selectedItems=[window.__igdl_media_map.get(targetSlideId)];
      }
    }
    if(0===selectedItems.length&&activeAssetNames.length>0&&allItems.length>0){
      for(const assetName of activeAssetNames){
        const matched=allItems.find(it=>{
          const cands=[
            ...(it.video_versions||[]),
            ...(it.image_versions2?.candidates||[]),
            it.video_url?{url:it.video_url}:null,
            it.display_url?{url:it.display_url}:null
          ].filter(Boolean);
          return cands.some(c=>String(c.url||"").includes(assetName));
        });
        if(matched){
          selectedItems=[matched];
          break;
        }
      }
    }
    if(0===selectedItems.length&&allItems.length>1){
      const slideIdx=getActiveStorySlideIndex();
      if(slideIdx>=0&&slideIdx<allItems.length){
        selectedItems=[allItems[slideIdx]];
      }
    }
    if(0===selectedItems.length&&allItems.length===1){
      selectedItems=[allItems[0]];
    }
  }

  if(0===selectedItems.length){
    const domItem=buildDomFallbackStoryItem(resolvedUser.username,targetSlideId||urlMediaId);
    if(domItem){
      selectedItems=[domItem];
    }else if(allItems.length>0){
      selectedItems=wantAll?allItems:[allItems[0]];
    }
  }

  return{
    user:resolvedUser,
    reel_id:reelId||urlMediaId||resolvedUser.username,
    all:wantAll,
    items:selectedItems
  };
};

setTimeout(scanEmbeddedJsonScripts,300);
setTimeout(scanEmbeddedJsonScripts,1200);
}(),!function e(){try{sessionStorage.setItem("__ig_app_id",window.require("PolarisConfig").getIGAppID())}catch(t){setTimeout(e,100)}}(),e(),function e(){const t="function"==typeof window.require?"1":"";t!==sessionStorage.getItem("__ig_has_require")&&sessionStorage.setItem("__ig_has_require","function"==typeof window.require?"1":""),t||setTimeout(e,1e3)}(),window.addEventListener("storage",(t=>{t.key&&!t.key.startsWith("__ig_")&&t.oldValue&&t.newValue&&("0"==t.oldValue||t.newValue.startsWith("hmac.")||t.key.includes("www"))&&e()}));const o={attributes:!0,childList:!0,subtree:!0},a=new MutationObserver(((e,t)=>{for(const t of e)t.addedNodes[0]&&t.addedNodes[0].querySelector&&s(t.addedNodes[0]),t.target&&t.target.querySelector&&s(t.target)}));!function e(){try{const e=document.querySelector("body");a.observe(e,o),s(e)}catch(t){setTimeout(e,50)}}()})())}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}(()=>{"use strict";var e,t,n,i,s,o;function a(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{d(n.next(e))}catch(e){s(e)}}function a(e){try{d(n.throw(e))}catch(e){s(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}d((n=n.apply(e,t||[])).next())}))}r(561),r(816),function(e){e.AccountImage="AccountImage",e.BulkPost="BulkPost",e.Hotkey="Hotkey",e.Post="Post",e.Story="Story",e.Home="Home",e.Explore="Explore",e.Channel="Channel",e.Tv="TV",e.Saved="Saved",e.Tagged="Tagged",e.Account="Account",e.Reels="Reels",e.HoverPost="HoverPost",e.ReelsFeed="ReelsFeed",e.PostSlider="PostSlider"}(e||(e={})),function(e){e[e.single=0]="single",e[e.bulk=1]="bulk",e[e.visit=2]="visit",e[e.bulkPost=3]="bulkPost"}(t||(t={})),function(e){e.default="log",e.warn="warn",e.error="error"}(n||(n={})),Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError,function(e){e.INSTA_API="PolarisInstapi",e.INSTA_AJAX="PolarisInstajax",e.COOKIES="PolarisCookies",e.CONFIG="PolarisConfig",e.MEDIA_CONSTS="PolarisMediaConstants",e.STORIES_STRINGS="PolarisStoriesStrings"}(i||(i={})),function(e){e.STORY_INIT="story_init",e.STORY_REELS_DATA_FETCH="story_reels_data_fetch",e.STORY_REELS_TRAY="story_reels_tray",e.STORY_DOWNLOAD="story_download",e.STORY_REEL_MEDIA="story_reel_media",e.STORY_REEL_FETCH="story_reel_fetch",e.STORY_UI_UPDATE="story_ui_update"}(s||(s={})),function(e){e.ADD_DOWNLOAD_BUTTON="add_download_button",e.REMOVE_DOWNLOAD_BUTTON="remove_download_button"}(o||(o={}));const d={method:"apiGet",url:"/api/v1/feed/reels_tray/",data:{query:{is_following_feed:!1}}},l={method:"apiGet",url:"/api/v1/feed/reels_media/",data:{query:{media_id:"",reel_ids:""}}};class u{static init(){if(!this._instances){this._instances={};for(const e in i)this._instances[i[e]]=this._getModule(e)}}static _getModule(e){if(window.require)try{return window.require(i[e])}catch(e){return n.error,null}}static getStoryReelsTray(){return a(this,void 0,void 0,(function*(){try{if(this._instances&&this._instances[i.INSTA_API]){const e=JSON.parse(JSON.stringify(d)),{data:t}=yield this._instances[i.INSTA_API][e.method](e.url,e.data);if(t&&t.tray){for(const r of t.tray)window.__igdl_storeStoryReel&&window.__igdl_storeStoryReel(r);return t.tray}}}catch(e){}return window.__igdl_fetchStoryTray?yield window.__igdl_fetchStoryTray():null}))}static getStoryReelMedia(e,t){return a(this,void 0,void 0,(function*(){try{if(this._instances&&this._instances[i.INSTA_API]){const r=JSON.parse(JSON.stringify(l));r.data.query.media_id=null==t?void 0:t.join(","),r.data.query.reel_ids=e.join(",");const{data:s}=yield this._instances[i.INSTA_API][r.method](r.url,r.data);if(s)return s}}catch(e){}return null}))}static getMediaTypes(){return this._instances[i.MEDIA_CONSTS]?this._instances[i.MEDIA_CONSTS].MediaTypes:null}static getViewStoryStringParts(e){var t,r,n,s;return this._instances[i.STORIES_STRINGS]?{subtitleText:null===(r=null===(t=this._instances[i.STORIES_STRINGS].viewStorySubtitleText(null==e?void 0:e.username))||void 0===t?void 0:t.$1)||void 0===r?void 0:r[0],viewStory:null===(s=null===(n=this._instances[i.STORIES_STRINGS].VIEW_STORY)||void 0===n?void 0:n.$1)||void 0===s?void 0:s[0]}:null}}u._instances=null;class c{constructor(){this._subscribers={},window.addEventListener("message",this.handleMessages.bind(this))}handleMessages(e){const t=e.data;if(!t)return;const r=t.type,n=t.payload;if(this._subscribers[r])for(const e of this._subscribers[r])e(n)}removeListener(e,t){var r,n;null===(r=this._subscribers[e])||void 0===r||r.splice(null===(n=this._subscribers[e])||void 0===n?void 0:n.findIndex((e=>e===t)),1)}onMessage(e,t){e in this._subscribers||(this._subscribers[e]=[]);const r=this._subscribers[e];return r.includes(t)||r.push(t),this.removeListener.bind(this,e,t)}sendMessage(e,t){const r={type:e,payload:t};window.postMessage(r)}}var _;!function(e){e.HOME="home",e.POST="post",e.EXPLORE="explore",e.STORY="story",e.CHANNEL="channel",e.TV="tv",e.SAVED="saved",e.TAGGED="tagged",e.ACCOUNT="account",e.REELS="reels",e.REELS_FEED="reels_feed"}(_||(_={}));class h{static parseUrlData(e,t){const r=e.split("/"),n=t.split("/"),i={};for(let e=0;e<r.length;e++){let t=r[e];if(!t||""===t.trim()||"{"!==t[0])continue;if(t=t.slice(1,-1),""===t.trim())continue;let s=t.startsWith("?"),o=s?t.slice(1):t;e<n.length?i[o]=n[e]:s||(i[o]=null)}return i}static parseType(e){if(this.isStoriesRoute(e))return _.STORY}static parseData(e){const t=this.parseType(e);if(!t)return null;const r=this.urlStructures[t];return this.parseUrlData(r,e)}}h.urlStructures={[_.STORY]:"/stories/{username}/{?initial_media_id}/"},h.isStoriesRoute=e=>/^\/?stories\/[a-zA-Z0-9._]{1,}(?:\/[\d]+)?\/?(?:[?#].*)?$/i.test(e);new class{constructor(){this.activeListeners={},this.messageHandler=new c;const e={[s.STORY_INIT]:this.init,[s.STORY_REELS_DATA_FETCH]:this.getReelsTrayData,[s.STORY_UI_UPDATE]:this.handleUIChanges,[s.STORY_REEL_FETCH]:this.getReelData};for(const t in e)e.hasOwnProperty(t)&&(this.activeListeners[t]=this.messageHandler.onMessage(t,e[t].bind(this)))}init(){u.init()}getReelsTrayData(){u.getStoryReelsTray().then((e=>{e&&this.messageHandler.sendMessage(s.STORY_REELS_TRAY,e)})).catch((e=>{}))}getReelData(req){window.__igdl_resolveStoryReel(req).then((res=>{const cleanRes=window.__igdl_cloneSafe?window.__igdl_cloneSafe(res):res;this.messageHandler.sendMessage(s.STORY_REEL_MEDIA,cleanRes||{user:{username:req?.username||"instagram"},reel_id:req?.reel_id||"",all:Boolean(req?.all),items:[]})})).catch((err=>{this.messageHandler.sendMessage(s.STORY_REEL_MEDIA,{user:{username:req?.username||"instagram"},reel_id:req?.reel_id||"",all:Boolean(req?.all),items:[]})}))}handleUIChanges({type:e}){var t;let r=h.parseData(location.pathname);switch(e){case o.ADD_DOWNLOAD_BUTTON:{if(document.getElementById("story-download-button"))return;const e=(()=>{var e;const t=document.querySelector('[id^="mount_"]');if(!t)return null;let r;const n=t.querySelectorAll('a[href]:has(>img[src]:not([alt*=" "])):not([href^="/stories/"])');r=n.length>0?n.item(n.length-1):t.querySelector('a[href]:has(>img[src]):not([href^="/stories/"])');let i=null!==(e=null==r?void 0:r.closest("header"))&&void 0!==e?e:null==r?void 0:r.closest(".x6s0dn4.x78zum5.x1xmf6yo");return(null==i?void 0:i.children[1])||(t.querySelector("header")?.children?.[1])||null})();if(!e)return;if(!r||"highlights"!==r.username&&!((e,t)=>{try{const r=u.getViewStoryStringParts(t);if(r&&r.viewStory&&r.subtitleText&&e.parentElement){const t=document.evaluate(`//div[@role='button' and .='${r.viewStory}']`,e.parentElement.parentElement||document.body,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null),n=document.evaluate(`//div[contains(., '${r.subtitleText}')]`,e.parentElement.parentElement||document.body,null,XPathResult.ANY_UNORDERED_NODE_TYPE,null);if((null==t?void 0:t.singleNodeValue)||(null==n?void 0:n.singleNodeValue))return!1}}catch(e){}return!0})(e,r))return;const t=document.createElement("div");t.id="story-download-button",t.style.display="flex";const n=document.createElement("span");n.classList.add("story-download-button"),n.title="Download current story",n.onclick=()=>{const e=h.parseData(location.pathname);e&&this.messageHandler.sendMessage(s.STORY_DOWNLOAD,Object.assign({all:!1},e))};const i=document.createElement("span");i.classList.add("story-download-button","story-download-all-button"),i.title="Download all stories",i.onclick=()=>{const e=h.parseData(location.pathname);e&&this.messageHandler.sendMessage(s.STORY_DOWNLOAD,Object.assign({all:!0},e))},t.append(n,i),e.children.length>1?e.children[1].prepend(t):e.insertBefore(t,e.children[1]||e.lastChild)}break;case o.REMOVE_DOWNLOAD_BUTTON:null===(t=document.getElementById("story-download-button"))||void 0===t||t.remove()}}}})()})();
//# sourceMappingURL=inject.js.map