# This is the build container.
FROM node:12.6.0-alpine as build_container

# Copy the assets into the build container.
COPY ./ /colorsplash

# Set the working directory.
WORKDIR /colorsplash

# Build colorsplash.
RUN set -xe; \
    sed -i 's|"homepage": "http://.*"|"homepage": "http://localhost/"|g' package.json; \
    npm install; \
    npm run build; 

# This is the runtime image.
FROM alpine:3.10

# Build arguments.
ARG VCS_REF
ARG BUILD_DATE
ARG VERSION
ARG LANG="en_US.UTF-8"

# Labels / Metadata.
LABEL maintainer="James Brink, brink.james@gmail.com" \
    org.label-schema.build-date="${BUILD_DATE}" \
    org.label-schema.decription="Colorsplash" \
    org.label-schema.name="colorsplash" \
    org.label-schema.schema-version="1.0.0-rc1" \
    org.label-schema.vcs-ref="${VCS_REF}" \
    org.label-schema.vcs-url="https://github.com/utensils/colorsplash" \
    org.label-schema.vendor="Utensils" \
    org.label-schema.version="${VERSION}"

# Create our group & user.
RUN set -xe; \
    addgroup -g 1000 -S colorsplash; \
    adduser -u 1000 -S -h /colorsplash -s /bin/sh -G colorsplash colorsplash;

# Install zero-config http-server for static assets.
RUN set -xe; \
    apk add --update --no-cache lighttpd;

# Copy our docker-assets into the container.
COPY --chown=root:root ./docker-assets/ /

# Copy our build from the previous stage.
COPY --from=build_container --chown=colorsplash:colorsplash /colorsplash/build/ /colorsplash/

# Set our working directory.
WORKDIR /colorsplash

# Drop down to un-privileged user.
USER colorsplash

# Expose our http port.
EXPOSE 8080

# Set entrypoint
ENTRYPOINT [ "/usr/local/bin/docker-entrypoint.sh" ]