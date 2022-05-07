FROM node:16
WORKDIR /app
COPY . .
RUN npx nrm use taobao
RUN npm i -g pnpm
RUN pnpm i --prefer-offline
RUN pnpm run build
FROM nginx:alpine
LABEL MAINTAINER="WanderRabbits@1749094641@qq.com"
COPY ./docker/nginx/nginx.conf /etc/nginx/
COPY --from=0 /app/dist /usr/share/nginx/html
RUN echo "-------------------- 当前nginx配置 --------------------"
RUN cat /etc/nginx/nginx.conf
RUN ls -al /usr/share/nginx/html
EXPOSE 8080
# 注：CMD不同于RUN，CMD用于指定在容器启动时所要执行的命令，而RUN用于指定镜像构建时所要执行的命令。
#    RUN指令创建的中间镜像会被缓存，并会在下次构建中使用。如果不想使用这些缓存镜像，可以在构建时指定--no-cache参数，如：docker build --no-cache

# 使用daemon off的方式将nginx运行在前台保证镜像不至于退出
CMD ["nginx", "-g", "daemon off;"]
