FROM python:3.9-alpine
# Устанавливаем Docker CLI внутрь контейнера
RUN apk add --no-cache docker-cli
RUN pip install flask
WORKDIR /app
COPY server.py .
CMD ["python", "server.py"]