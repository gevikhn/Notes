(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{480:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"消息驱动的微服务-rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息驱动的微服务-rabbitmq"}},[t._v("#")]),t._v(" 消息驱动的微服务：RabbitMQ")]),t._v(" "),a("blockquote",[a("p",[t._v("Spring Cloud Stream 是一个用于构建基于消息的微服务应用框架，使用 Spring Integration 与 Broker 进行连接。\nSpring Cloud Stream 提供了消息中间件的统一抽象，推出了 publish-subscribe、consumer groups、partition 这些统一的概念。\nSpring Cloud Stream 内部有两个概念：Binder 和 Binding。")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Binder，跟消息中间件集成的组件，用来创建对应的 Binding。各消息中间件都有自己的 Binder 具体实现。")])]),t._v(" "),a("li",[a("p",[t._v("Binding，包括 Input Binding 和 Output Binding。Binding 在消息中间件与应用程序提供的 Provider 和 Consumer 之间提供了一个桥梁，实现了开发者只需使用应用程序的 Provider 或 Consumer 生产或消费数据即可，屏蔽了开发者与底层消息中间件的接触。")])])]),t._v(" "),a("h2",{attrs:{id:"构建生产者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建生产者"}},[t._v("#")]),t._v(" 构建生产者")]),t._v(" "),a("ul",[a("li",[t._v("在pom.xml中引入依赖")])]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("starter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rabbit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ul",[a("li",[t._v("application.yml配置文件")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("producer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("application\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Spring Cloud Stream 配置项，对应 BindingServiceProperties 类")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Binder 配置项，对应 BinderProperties Map")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("binders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rabbit001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rabbit "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 Binder 的类型")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 Binder 的环境配置")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是 RabbitMQ 类型的时候，则对应的是 RabbitProperties 类")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rabbitmq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RabbitMQ 服务的地址")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RabbitMQ 服务的端口")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" guest "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RabbitMQ 服务的账号")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" guest "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RabbitMQ 服务的密码")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Binding 配置项，对应 BindingProperties Map")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bindings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("output")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目的地。这里使用 RabbitMQ Exchange")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application/json "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 内容格式。这里使用 JSON")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("binder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rabbit001 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置使用的 Binder 名字")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18080")]),t._v("\n")])])]),a("ol",[a("li",[a("code",[t._v("spring.cloud.stream")]),t._v("为 Spring Cloud Stream 配置项，对应 BindingServiceProperties 类")]),t._v(" "),a("li",[a("code",[t._v("spring.cloud.stream.binders")]),t._v("为 Binder 配置项，对应 BinderProperties Map。其中 key 为 Binder 的名字\n在此创建了一个名为rabbit001的binder\n"),a("ul",[a("li",[a("code",[t._v("type")]),t._v(": Binder 的类型。设置为 rabbit，表示使用 Spring Cloud Stream RabbitMQ 提供的 Binder 实现")]),t._v(" "),a("li",[a("code",[t._v("environment")]),t._v(":Binder 的环境。因为 Spring Cloud Steam RabbitMQ 底层使用的是 spring-rabbit，所以在使用 RabbitMQ 类型的时候，则对应的是 RabbitProperties 类")])])]),t._v(" "),a("li",[a("code",[t._v("spring.cloud.stream.bindings")]),t._v("为 Binding 配置项，对应 BindingProperties Map。其中，key 为 Binding 的名字。要注意，虽然说 Binding 分成 Input 和 Output 两种类型，但是在配置项中并不会体现出来，而是要在稍后搭配 @Input 还是 @Output 注解，才会有具体的区分。\n在此配置一个名为"),a("code",[t._v("demo01-output")]),t._v("的binding\n"),a("ul",[a("li",[a("code",[t._v("destination")]),t._v("：目的地。在 RabbitMQ 中，使用 "),a("code",[t._v("Exchange")]),t._v(" 作为目的地，默认为 "),a("code",[t._v("Topic")]),t._v(" 类型")]),t._v(" "),a("li",[a("code",[t._v("content-type")]),t._v("：内容格式。这里使用 JSON 格式，因为稍后我们将发送消息的类型为 POJO，使用 JSON 进行序列化")]),t._v(" "),a("li",[a("code",[t._v("binder")]),t._v("：使用的 Binder 名字。这里我们设置为 "),a("code",[t._v("rabbit001")])])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建MySource接口")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySource")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Output")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageChannel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo01Output")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("创建Controller")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/demo01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SendController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySource")]),t._v(" mySource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <X>")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/send"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <1> 创建 Message")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <2> 创建 Spring Message 对象")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" springMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withPayload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ciallo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <3> 发送消息")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mySource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo01Output")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("springMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[send][发送成功]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在主类上添加"),a("code",[t._v("@EnableBinding(MySource.class)")]),t._v("注解")])])]),t._v(" "),a("h2",{attrs:{id:"构建消费者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建消费者"}},[t._v("#")]),t._v(" 构建消费者")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("引入依赖，与生产者依赖相同")])]),t._v(" "),a("li",[a("p",[t._v("配置文件")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\napplication"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("application\ncloud"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    # "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Spring")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cloud")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),t._v(" 配置项，对应 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BindingServiceProperties")]),t._v(" 类\n    stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    # "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Binder")]),t._v(" 配置项，对应 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BinderProperties")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),t._v("\n    binders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        rabbit001"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" rabbit # 设置 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Binder")]),t._v(" 的类型\n        environment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" # 设置 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Binder")]),t._v(" 的环境配置\n            # 如果是 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RabbitMQ")]),t._v(" 类型的时候，则对应的是 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RabbitProperties")]),t._v(" 类\n            spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            rabbitmq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v(" # "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RabbitMQ")]),t._v(" 服务的地址\n                port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5672")]),t._v(" # "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RabbitMQ")]),t._v(" 服务的端口\n                username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" guest # "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RabbitMQ")]),t._v(" 服务的账号\n                password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" guest # "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RabbitMQ")]),t._v(" 服务的密码\n    # "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Binding")]),t._v(" 配置项，对应 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BindingProperties")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),t._v("\n    bindings"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        destination"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" input # 目的地。这里使用 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RabbitMQ")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exchange")]),t._v("\n        content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("json # 内容格式。这里使用 JSON\n        group"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" demo01"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("DEMO"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("TOPIC"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v(" # 消费者分组\n        binder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" rabbit001  # 设置使用的 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Binder")]),t._v(" 名字\n\nserver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\nport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" # 随机端口，方便启动多个消费者\n\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("group")]),t._v(":消费者分组")]),t._v(" "),a("blockquote",[a("p",[t._v("消费者组（Consumer Group）：同一类 Consumer 的集合，这类 Consumer 通常消费同一类消息且消费逻辑一致。消费者组使得在消息消费方面，实现负载均衡和容错的目标变得非常容易。要注意的是，消费者组的消费者实例必须订阅完全相同的 Topic。")])])])])])]),t._v(" "),a("p",[t._v("对于消费队列的消费者，会有两种消费模式：集群消费（Clustering）和广播消费（Broadcasting）。")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("集群消费（Clustering）：集群消费模式下,相同 Consumer Group 的每个 Consumer 实例平均分摊消息。")]),t._v(" "),a("li",[t._v("广播消费（Broadcasting）：广播消费模式下，相同 Consumer Group 的每个 Consumer 实例都接收全量的消息")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建消费者类")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableBinding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SinkReceiver")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SinkReceiver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@StreamListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("INPUT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("receive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Received: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("p",[a("strong",[t._v("已经能够在多实例环境下，保证同一消息只被同一个组内的一个消费者实例进行接收和处理")]),t._v("\n对于一些特殊场景，除了要保证单一实例消费之外，还希望那些具备相同特征的消息都能够被同一个实例进行消费")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("消息分区\n在消费者工程的配置文件中添加以下配置")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bindings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partitioned"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nspring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instanceCount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nspring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instanceIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[a("code",[t._v("spring.cloud.stream.bindings.input.consumer.partitioned")]),t._v("：通过该参数开启消费者分区功能；")]),t._v(" "),a("p",[a("code",[t._v("spring.cloud.stream.instanceCount")]),t._v("：该参数指定了当前消费者的总实例数量；")]),t._v(" "),a("p",[a("code",[t._v("spring.cloud.stream.instanceIndex")]),t._v("：该参数设置当前实例的索引号，从0开始，最大值为"),a("code",[t._v("spring.cloud.stream.instanceCount")]),t._v("参数 - 1。我们试验的时候需要启动多个实例，可以通过运行参数来为不同实例设置不同的索引值("),a("code",[t._v("spring.cloud.stream.instanceIndex = ${INDEX:0}")]),t._v(")")]),t._v(" "),a("p",[t._v("在生产者的配置文件中也做出稍许更改")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bindings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("producer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partitionKeyExpression"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("payload\nspring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bindings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("producer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partitionCount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),a("p",[a("code",[t._v("spring.cloud.stream.bindings.output.producer.partitionKeyExpression")]),t._v("：通过该参数指定了分区键的表达式规则，我们可以根据实际的输出消息规则来配置SpEL来生成合适的分区键(设置为"),a("code",[t._v("payload")]),t._v("会根据具体消息动态选择分组，也可以直接指定分区)；")]),t._v(" "),a("p",[a("code",[t._v("spring.cloud.stream.bindings.output.producer.partitionCount")]),t._v("：该参数指定了消息分区的数量。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);