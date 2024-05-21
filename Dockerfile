FROM ubuntu
WORKDIR /app/    

COPY public/ /app/public
COPY src/ /app/src
COPY src/components/ /app/src/components
COPY package.json /app/
COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]