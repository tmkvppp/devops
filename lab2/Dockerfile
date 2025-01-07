FROM python:3.9-slim

WORKDIR /app

COPY app.py /app

ENV GREETING="Hello, World!"

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

EXPOSE 8000

ENTRYPOINT ["python"]

CMD ["app.py"]
