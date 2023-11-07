REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY 

sudo yarn install 

sudo npm run build 

# 포트 번호
port_number=3002

# netstat 명령을 실행하여 포트 3002에 연결된 정보를 가져온 후, PID를 추출
pid=$(netstat -tnlp | grep "$port_number" | awk '{print $7}' | awk -F'/' '{print $1}')

forever stop 0
forever stop 0
kill -9 $pid

forever start ../build/app.js

forever start -c "npm start" .