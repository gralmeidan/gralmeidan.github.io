// I couldn't find an api for champion roles so I just casually scrape it off metasrc.com

const lines = document.querySelector("#content > div._qngo9y > div._9il59w > table > tbody").children
let data = {}

for(let i = 0; i < lines.length; i += 1){
  if(lines[i].children[0].children.length > 1){
    const name = lines[i].children[0].children[1].innerText
    const role = lines[i].children[1].children[0].innerText

    if(typeof data[name] === 'undefined'){
      data[name] = [role]
    } else {
      data[name] = [...data[name], role]
    }
  }
}

let result = JSON.stringify(data).replace('Nunu','Nunu & Willump')