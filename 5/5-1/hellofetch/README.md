# Vue 3 + Vite


# JSON
หรือ Java Script Object Notation เป็น object ใน javascript ที่ ถูกเขียนให้ key เป็น double quote และ value เหมือนกับ java object


```json
{
  "notes": [
    {
      "name": "Save",
      "id": 1
    },
    {
      "name": "That",
      "id": 2
    },
    {
      "name": "Hello",
      "id": 3
    }
  ]
}
```


## Extra: fake server (json server)	## Extra: fake server (json server)


ในการทดสอบ json เราสามารถนำไฟล์ json ที่ถูกเขียนไปทดสอบบน server โดยผ่าน json server ได้ตามลิงค์ข้างล่าง

- [json-server](https://github.com/typicode/json-server)

### วิธีการ install json server

```
npm install -g json-server
```

**note:** -g คือ global สามารถอ้าง json-server ไปได้ทุก module ของไฟล์ ที่สามารถทดสอบบนเว็ป server ได้ ไม่จำเป็นต้องมีก็ได้ โดยค่าเริ่มต้นเป็น local ต้อง implement dependency ไว้เพื่อให้ node รู้จัก dependency นี้

### วิธีการนำไฟล์เข้าไป run ผ่าน rest api แบบ gobal

```
json-server --watch db.json --port 5000
```
run ไฟล์ db.json บน port 5000

### วิธีการนำไฟล์เข้าไป run ผ่าน rest api แบบ local มี 2 วิธี

1. ใช้ dependency ของ package.json ในการ run

package.json
```json
{
  "name": "xxxxxx",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "backend": "json-server --watch ./data/db.json --port 5000"
  },
  "dependencies": {
    "json-server": "^0.17.0",
    "vue": "^3.2.25"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.2.0",
    "vite": "^2.8.0"
  }
}
```

ใช้คำสั่งในการ run ฝั่ง backend
```
npm run backend
```

2. ใช้ npx ใน run

inspire by [stack](https://stackoverflow.com/questions/55547572/json-server-is-not-recognized-as-an-internal-or-external-command)

```
npx json-server --watch db.json --port 5000
```


# Fetch api	# Fetch api
เป็นเรียกข้อมูลที่เป็น json เข้ามาเป็น data structure เข้ามาใช้ในการทดสอบ ผ่านการ request แล้ว fetch ใช้ asynchronous ทำการ response ข้อมูล json ฝั่ง backend เข้ามาทดสอบ

ลักษณะของ fetch api
```js
const fetchResponsePromise = fetch(url [, init])
```

fetch มีลักษณะเป็น asynchronous เวลาไปเรียกจะ return เป็น Promise นิยมใช้กันในรูปของการ response ข้อมูล 


url คือ ลิงค์ที่ฝั่ง backend นำข้อมูลในรูป json

[, init] เป็น องค์ประกอบและคุณสมบัติเริ่มต้น ของข้อมูลที่ใช้ในการทดสอบ โดยค่า default เป็น get


# CRUD on Client side	# CRUD on Client side


## Create (POST)	## Create (POST)
```js
let createdNote = async (newNote) => {
  let res = await fetch("http://localhost:5000/notes/", {
    method: 'POST',
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify({name: newNote})
  })
  if(res.status === 201){
    const addNote = await res.json();
    notes.value.push(addNote)
    console.log("add successful")
  } else {
    console.log("error by status " + res.status)
  }
}
```



ผล return ถ้าหาก add สำเร็จ จะ return 201 created ถ้าหาก add แล้วเกิดการ error จะ return 404 not found ถ้าหาก add ข้อมูลบน url ซ้ำจะ return 409 conflict
## Read (GET)	## Read (GET)
```js

```


ผล return ถ้าหาก select เจอและไม่ error จะ return 200 OK ถ้าหาก select แล้วหาไม่เจอจะ return 404 not found


## Update (PUT)	## Update (PUT)
```js
const editingNote = ref({})
let toEditMode = (updatedNote) => {
  editingNote.value = updatedNote
  console.log(editingNote.value)
}

let updatedNote = async (editingNote) => {
  let res = await fetch("http://localhost:5000/notes/" + editingNote.id ,{
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      name: editingNote.name
    })
  })
  if(res.status === 200) {
    const editedNote = await res.json()
    notes.value = notes.value.map((note)=>
      note.id === editedNote.id
      ? {...note, name: editedNote.name}
      : note
    )
    console.log(editedNote.id + " has been update")
  } else {
    console.log("error by status " + res.status)
  }
}
```

ผล return ถ้าหาก update ได้และไม่ error จะ return 200 OK ถ้าหา id ไม่เจอจะ
return 404 not found ถ้าหาจะ update ข้อมูล บน json ทุกตัว จะ return 405 method not allow

**note:** dev ต้องป้องกันไม่ให้ user สร้าง object แล้วไป update ค่า บ่อย ๆ ทำให้ต้องมีการเปลี่ยน ค่าส่วนใหญ่ ถ้าข้อมูลมีลักษณะเป็น props

```vue
<script setup>
import {computed} from 'vue'
let props = defineProps({
    currentNote: {
        type: Object,
        default: {}
    }
})
let newNote = computed(()=>{
    return {
        id: props.currentNote.id,
        name: props.currentNote.name
    }
})
</script>
```


## Delete (DELETE)	## Delete (DELETE)
```js
let removedNote = async (id) => {
  let res = await fetch("http://localhost:5000/notes/" + id, {
    method: 'DELETE'
  })
  if(res.status === 200) {
    notes.value = notes.value.filter((note)=>note.id !== id)
    console.log("id "+ id + " delete success")
  } else {
    console.log("error by status " + res.status)
  }
}
```


ผล return ถ้าหาก delete ได้และไม่ error จะ return 200 OK ถ้าหา id ไม่เจอจะ
return 404 not found ถ้าหาจะ delete ข้อมูล บน json ทุกตัว จะ return 405 method not allow
