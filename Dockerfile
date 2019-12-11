    FROM node:10.0-alpine

    RUN apk --update add tzdata \
        && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
        && echo "Asia/Shanghai" > /etc/timezone \
        && apk del tzdata

    RUN mkdir -p /usr/src/nodejs/

    WORKDIR /usr/src/nodejs/

    # add npm package

    COPY package.json /usr/src/nodejs/package.json

    RUN cd /usr/src/nodejs/

    RUN npm i

    # copy code

    COPY . /usr/src/nodejs/

    EXPOSE 8090

    CMD npm run dev