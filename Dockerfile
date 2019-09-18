FROM node:10.16-alpine as build

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json /app/
RUN npm ci --dev

COPY . /app/
RUN npm run build -- --prod && ls -lhR dist/


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
RUN ls -lhR /usr/share/nginx/html

#COPY entry.sh /usr/local/bin

#ENTRYPOINT  ["entry.sh"]
