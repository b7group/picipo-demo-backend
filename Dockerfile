# Rebuild the source code only when needed
FROM node:lts-alpine AS builder
ARG NFTPROFILE=production
ENV NODE_ENV=production
ENV NFTPROFILE ${NFTPROFILE}

RUN echo ${NFTPROFILE}
WORKDIR /app
COPY . .

RUN apk add gettext
RUN envsubst < config.js.${NFTPROFILE} \
    && envsubst < config.js.${NFTPROFILE} >./config/config.js \
    && cat ./config/config.js \
    && npm install

EXPOSE 10001
CMD ["node", "index.js"]
