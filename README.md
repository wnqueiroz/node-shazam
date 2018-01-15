# Curso: Node.js: Inovando com Javascript no backend | Alura

Esse repositório contempla os projetos e estudos abordados no curso [Node.js: Inovando com Javascript no backend](https://cursos.alura.com.br/course/node-js) da [Alura Cursos online de tecnologia](https://www.alura.com.br/)

### Building Image With Docker

On directory: 

```
docker build -t wnqueiroz/node-shazam .
```
### How to Run

Tool      | Command
--------- | -------
<img src="docker.png" alt="Docker" width="75"/>    | ```docker container run -d -it --name node-shazam -v $(pwd):/usr/src/app -w /usr/src/app -p 3000:3000 wnqueiroz/node-shazam npm test``` | test
<img src="docker.png" alt="Docker" width="75"/>    | ```docker container run -d -it --name node-shazam -v $(pwd):/usr/src/app -w /usr/src/app -p 3000:3000 wnqueiroz/node-shazam npm start``` | prod

Access with: `docker container exec -it node-shazam /bin/bash`