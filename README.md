# s2e1

## Raspberry Pi, Korifi, and React 19

## Prerequisites
- Java 23
- Maven
- Npm


## Quickstart

!Backend Not Yet Implemented!
```bash
git clone https://github.com/stackoftheweek/s2e1.git
cd s2e1/backend
docker compose up -d
```
> Starts Ollama on Docker in the background
> http://localhost:11434
> You will get your shell back

```bash
./mvnw spring-boot:run
```
> You will NOT get your shell back
> http://localhost:8080
> Use ctrl-c to stop

In another shell
```bash
cd ../frontend
npm install
npm run dev
```
