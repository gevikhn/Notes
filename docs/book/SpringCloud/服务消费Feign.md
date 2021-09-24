# OpenFeign
> Spring Cloud Feign是一套基于Netflix Feign实现的声明式服务调用客户端。它使得编写Web服务客户端变得更加简单。我们只需要通过创建接口并用注解来配置它既可完成对Web服务接口的绑定。它具备可插拔的注解支持，包括Feign注解、JAX-RS注解。它也支持可插拔的编码器和解码器。Spring Cloud Feign还扩展了对Spring MVC注解的支持，同时还整合了Ribbon和Eureka来提供均衡负载的HTTP客户端实现。

复制一份eureka-consumer工程，命名为eureka-consuner-feign
在`pom.xml`中添加依赖
``` pom.xml
    <!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-openfeign -->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-openfeign</artifactId>
    </dependency>
```
修改主类，添加`@EnableFeignClients`注解开启扫描Feigin客户端的功能
``` Java
@EnableDiscoveryClient
@EnableFeignClients
@SpringBootApplication
public class EurekaConsumerFeignApplication {
    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }

    public static void main(String[] args) {
        SpringApplication.run(EurekaConsumerFeignApplication.class, args);
    }

}
```
创建Feign客户端接口
``` DcClient
@FeignClient("eureka-client")
public interface DcClient {
    @GetMapping("/dc")
    String consumer();
}
```
修改Controller,通过Feign客户端来调用服务提供方的接口
``` Java
@RestController
public class DCController {

    @Autowired
    DcClient dcClient;

    @GetMapping("/consumer")
    public String dc(){
        return  dcClient.consumer();
    }
}
```