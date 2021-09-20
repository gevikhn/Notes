
# IO
用户程序进行IO读写依赖read,write两个系统调用  
read系统调用:


<center>

```mermaid
graph TB
用户程序 --调用--> A["系统调用: read"]
A --> 内核缓存
内核缓存 --> 应用程序的进程缓冲区
```
</center>
write系统调用：  

aaa
<center>

```mermaid
graph TB
用户程序 --调用--> A["系统调用: write"]
A --> 应用程序的进程缓冲区
应用程序的进程缓冲区 --> 内核缓存
```
</center>


***
<a style="color:red">应用程序的IO操作实际上并不是物理设备级别的读写，而是缓存的复制</a>

<kbd>read</kbd> ``&`` <kbd>write</kbd> 两个系统调用都不负责内核缓冲区和物理设备之间的交换
所有底层的读写操作，是由操作系统内核完成的


