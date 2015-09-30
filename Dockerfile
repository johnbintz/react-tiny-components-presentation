FROM john/nodebase

VOLUME /code
WORKDIR /code
COPY bin/docker-start /usr/local/bin/start
RUN chmod a+x /usr/local/bin/start
CMD /usr/local/bin/start
