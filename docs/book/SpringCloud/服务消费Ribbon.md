# 服务消费(Ribbon)

> 在[服务消费](服务消费.md)中，通过`LoadBalancerClient`接口来获取某个服务的实例，并根据实例信息来发起服务接口消费请求，通过手动的去编写服务选取、链接拼接，这些有点太过繁琐，

## Ribbon
SpringCloud Ribbon是Netflix Ribbon实现的一套客户端负载均衡工具。它是基于HTTP和TCP的客户端负载均衡器，可以通过在客户端中配置ribbonServerList来设置服务端列表去轮询访问以达到均衡负载的作用。
> 当Ribbon与Eureka联合使用时，ribbonServerList会被DiscoveryEnabledNIWSServerList重写，扩展成从Eureka注册中心中获取服务实例列表。同时它也会用NIWSDiscoveryPing来取代IPing，它将职责委托给Eureka来确定服务端是否已经启动。
> 
> 而当Ribbon与Consul联合使用时，ribbonServerList会被ConsulServerList来扩展成从Consul获取服务实例列表。同时由ConsulPing来作为IPing接口的实现。

在使用Spring Cloud Ribbon的时候，不论是与Eureka还是Consul结合，都会在引入Spring Cloud Eureka或Spring Cloud Consul依赖的时候通过自动化配置来加载上述所说的配置内容，所以我们可以快速在Spring Cloud中实现服务间调用的负载均衡
***
## 开始配置Ribbon
复制eureka-consumer项目，命名为eureka-consumer-ribbon，在`pom.xml`文件中引入依赖
``` pom.xml
<!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-netflix-ribbon -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
    <version>2.2.9.RELEASE</version>
</dependency>
```
<font color=red>注意！</font>这里将会出现问题
修改主类，为`RestTemplate`添加`@LoadBalanced`注解
``` Java
@EnableDiscoveryClient
@SpringBootApplication
public class EurekaConsumerribbonApplication {
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }

    public static void main(String[] args) {
        SpringApplication.run(EurekaConsumerribbonApplication.class, args);
    }

}
```
修改Controller，移除`LoadBalancerClient`相关代码
``` Java
@RestController
public class DCController {

    @Autowired
    RestTemplate restTemplate;

    @GetMapping("/consumer")
    public String dc(){

        return restTemplate.getForObject("http://eureka-client/dc",String.class);
    }
}
```
## 启动服务
依次开启eureka-server,eureka-client,eureka-consumer-ribbon,访问<http://localhost:9001/consumer>
<font color=red>发现错误！</font>
```
java.lang.IllegalStateException: No instances available for eureka-client
	at org.springframework.cloud.netflix.ribbon.RibbonLoadBalancerClient.execute(RibbonLoadBalancerClient.java:119) ~[spring-cloud-netflix-ribbon-2.2.9.RELEASE.jar:2.2.9.RELEASE]
	at org.springframework.cloud.netflix.ribbon.RibbonLoadBalancerClient.execute(RibbonLoadBalancerClient.java:99) ~[spring-cloud-netflix-ribbon-2.2.9.RELEASE.jar:2.2.9.RELEASE]
	at org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor.intercept(LoadBalancerInterceptor.java:56) ~[spring-cloud-commons-3.0.3.jar:3.0.3]
	at org.springframework.http.client.InterceptingClientHttpRequest$InterceptingRequestExecution.execute(InterceptingClientHttpRequest.java:93) ~[spring-web-5.3.9.jar:5.3.9]
	at org.springframework.http.client.InterceptingClientHttpRequest.executeInternal(InterceptingClientHttpRequest.java:77) ~[spring-web-5.3.9.jar:5.3.9]
........
```

原因是导入的`spring-cloud-starter-netflix-eureka-client`包中已经包含Ribbon,移除Ribbon依赖即可。
最终的`pom.xml`文件
``` pom/xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.5.4</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>eureka-consumer-ribbon</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>eureka-consumer-ribbon</name>
    <description>eureka-consumer-ribbon</description>
    <properties>
        <java.version>1.8</java.version>
        <spring-cloud.version>2020.0.3</spring-cloud.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```