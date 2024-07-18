# Javascript

## History of JS 


- JavaScript is a lightweight, interpreted programming language. 
- It is commonly used to create dynamic elements in web applications
- JavaScript was submitted to the ECMA for standardization.
- This led to the creation of the ECMAScript specification.


**Initial Release and naming:**
  ```
  Mocha -> LiveScript -> JavaScript
  ```
---

## ECMAScript

```
  ES1 -It supports primitive data types, arrays, objects, looping.

  ES2 - No new features. Only editoral changes.

  ES3 - Regex, Exception handling and switching.

  ES5 - Strict Mode, JSON, Map/ Filter, forEach array.

  ES6 - Introduction of Classes, Spread operator, Arrow functions. let and const keyword, async functions.
```



- ECMAScript is  a core language specification
- Javascript has features beyond ECMAScript.

---

## Browser Object Model

## 1. Window Object

- Window Object represents the browser's window.

### Window size properties

- 1. Window Width
        It determines the inner width of the browser window 

- 2. Window Height
        It determines the inner height of the browser window
     



![Screenshot 2024-07-17 154136](https://github.com/user-attachments/assets/13a1a8a6-ce84-4ec0-80d9-5b0dc2ff7d92)


- 3. Open()
        - Opens a new window

- 4. Close()
        - Closes the current window

      
![Screenshot 2024-07-17 160224](https://github.com/user-attachments/assets/980a1e50-1e8b-4c90-b368-bad062c2afa2)

---

## 2. Window Location
- It is used to get the current location (URL) and redirects to new location.
  
**window.location.href**
 - Returns the href (URL) of the current page

 ```
  <p id = "value"> </p>  
  <script>  
  document.getElementById("value").innerHTML = window.location.href;  
  </script>  
 ```
   
**window.location.hostname** 
 - Returns the domain name of the web host
   
```
<p id = "value"> </p>  
<script>  
document.getElementById("value").innerHTML = window.location.hostname;  
</script>  
```

**window.location.pathname**
 - Returns the pathname of the current page

```
<p id = "value"> </p>  
<script>  
document.getElementById("value").innerHTML = window.location.pathname;  
</script>  

```

**window.location.protocol**
 - Returns the web protocol used ( Example: http, https )

```
<p id = "value"> </p>  
<script>  
document.getElementById("value").innerHTML = window.location.protocol;  
</script>  
```
---

## 3. Window Screen
  - Tells information about user screen

**screen.width**
  - Returns the users screen width

**screen.height** 
  - Returns the users screen height

**screen.availWidth**
  - Returns the users screen width excluding interface feautures like taskbar.
    
**screen.availHeight** 
  - Returns the users screen height excluding interface feautures like taskbar.
    
**screen.pixelDepth**
  -  It returns the pixel depth of the screen.


```
  <p id = "value1"> </p>  
  <p id = "value2"> </p>  
  <p id = "value3"> </p>  
  <p id = "value4"> </p>  
  <p id = "value5"> </p>  
  <p id = "value6"> </p>  
  <script>  
  document.getElementById("value1").innerHTML = window.screen;  
  document.getElementById("value2").innerHTML = window.screen.width;  
  document.getElementById("value3").innerHTML = window.screen.height;  
  document.getElementById("value4").innerHTML = window.screen.availWidth;  
  document.getElementById("value5").innerHTML = window.screen.availHeight;  
  document.getElementById("value6").innerHTML = window.screen.pixelDepth;  
  </script>  

```

--- 

## 4. Window Navigator 
  -  Window  navigator contains information of visitors browser.

**cookieEnabled()**
  - Check whether cookie enabled or not.

**appName()**
  - Returns the application name.

**product()**
  - Returns the product name of the browser engine.

**platforrm()**
  - It returns the operating system name.

**langauge()**
  - It returns the language of the browser.

**javaEnabled()**
  - Check whether java enabled or not.


```
  <p id = "value1"> </p>  
  <p id = "value2"> </p>  
  <p id = "value3"> </p>  
  <p id = "value4"> </p>  
  <p id = "value5"> </p>  
  <p id = "value6"> </p>  

  <script>  
  document.getElementById("value1").innerHTML = navigator.cookieEnabled;  
  document.getElementById("value2").innerHTML = navigator.javaEnabled;  
  document.getElementById("value3").innerHTML = navigator.appName;  
  document.getElementById("value4").innerHTML = navigator.product;  
  document.getElementById("value5").innerHTML = navigator.platform;  
  document.getElementById("value6").innerHTML = navigator.language; 
  </script>  
```


---

## 5. Popup Alert
  - It is used to display alert message to the user.

**alert()**
  - Show popup to display something. Click OK to proceed.

  ```
    <script type="text/javascript">  
    function msg(){  
     alert("Hello Alert Box");  
    }  
    </script>  
    <input type="button" value="click" onclick="msg()"/>  
  ```

**confirm()**
  - Show popup to get user confirmation. Click OK or cancel to proceed.

  ```
  <script type="text/javascript">  
    function msg(){  
     confirm("Do you want to continue?");  
    }  
    </script>  
    <input type="button" value="click" onclick="msg()"/>  
  ```

**prompt()**
  - Show popup to get user input. Click OK to proceed.

- It returns the value entered by the user.

  ```
  <script type="text/javascript">  
    function msg(){  
     prompt("Enter your name:");  
    }  
    </script>  
    <input type="button" value="click" onclick="msg()"/>  
  ```
---

## 6. Timing Events
  - Timing events are used to execute a function after a specified time interval.


**setTimeout()**

  setTimeout(function, milliseconds)
  - Executes a function, after waiting a specified number of milliseconds.

  - clearTimeout() is used to clear the execution


  ```
  <script>  
  function msg()
  {  
      setTimeout(  
        function(){  
          alert("Welcome after 2 seconds")},2000);  
    }  
  </script>      
  <input type="button" value="click" onclick="msg()"/>  
  ```


**setInterval()**

  setInterval(function, milliseconds)
  - Same as setTimeout(), but repeats the execution of the function continuously.

  - clearInterval() is used to clear the execution


  ```
  <p id="demo"></p>

  <script>
  const element = document.getElementById("demo");

  setInterval(function() {element.innerHTML += "1"}, 1000);
  </script>
  ```

--- 

## 7. Cookie 

 - Cookies are used to store data on the client side.


**Cookie properties:**

  - Cookies are saved in name-value pairs.

  A cookie consists of the following components:
  - Name
  - Value
  - Zero or more attributes (name/value pairs). 
   
   Attributes store information such as the cookie's expiration, domain, and flags (such as Secure and HttpOnly).


**Creation:** - 

   ```js
    document.cookie = "username = Kanish; path=/admin";
  ```

**Deletion**

  ```js
    document.cookie = "username=;  path=/";
  ```

---

