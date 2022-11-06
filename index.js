import * as fs from 'fs/promises'
import path from 'path'
import {FileURLToPath } from 'url'
const _dirname = path.dirname(FileURLToPath(import.meta.url))

let dirs  = await fs.readdir('./')
let array = [] 


array = dirs.map(item=> item.split('-')[2])
array = array.map(item=> item+'.mp4')


for( let i=0; i < dirs.length ; i++){
    await fs.rename(path.join(_dirname,dirs[i]),path.join(_dirname,array[i]))
}
