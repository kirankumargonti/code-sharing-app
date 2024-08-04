export const themOptions = [
  {value: 'light', label: 'Light'},
  {value: 'vs-dark', label: 'Dark'},
]
export const languageOptions = [
  {value: 'typescript', label: 'TypeScript'},
  {value: 'javascript', label: 'JavaScript'},
  {value: 'css', label: 'CSS'},
  {value: 'less', label: 'LESS'},
  {value: 'scss', label: 'SCSS'},
  {value: 'json', label: 'JSON'},
  {value: 'html', label: 'HTML'},
  {value: 'xml', label: 'XML'},
  {value: 'php', label: 'PHP'},
  {value: 'csharp', label: 'C#'},
  {value: 'cpp', label: 'C++'},
  {value: 'razor', label: 'Razor'},
  {value: 'markdown', label: 'Markdown'},
  {value: 'diff', label: 'Diff'},
  {value: 'java', label: 'Java'},
  {value: 'vb', label: 'VB'},
  {value: 'coffeescript', label: 'CoffeeScript'},
  {value: 'handlebars', label: 'Handlebars'},
  {value: 'batch', label: 'Batch'},
  {value: 'pug', label: 'Pug'},
  {value: 'fsharp', label: 'F#'},
  {value: 'lua', label: 'Lua'},
  {value: 'powershell', label: 'PowerShell'},
  {value: 'python', label: 'Python'},
  {value: 'ruby', label: 'Ruby'},
  {value: 'sass', label: 'SASS'},
  {value: 'r', label: 'R'},
]

interface DefaultCodeSnippets {
  [key: string]: string
}

export const defaultCodeSnippets: DefaultCodeSnippets = {
  typescript: `
    export interface MyInterface {
      myProperty: string;
    }

    class MyClass {
      constructor() {}
    }
  `,
  javascript: `
    function myFunction() {
      console.log("Hello, world!");
    }
  `,
  css: `
    body {
      background-color: #f0f0f0;
    }
  `,
  less: `
    @color: #333;

    .myClass {
      color: @color;
    }
  `,
  scss: `
    $font-stack: Helvetica, sans-serif;
    $primary-color: #333;

    .myClass {
      font: 100% $font-stack;
      color: $primary-color;
    }
  `,
  json: `
    {
      "name": "John Doe",
      "age": 30,
      "city": "New York"
    }
  `,
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My First Heading</title>
      </head>
      <body>
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
      </body>
    </html>
  `,
  xml: `
    <?xml version="1.0"?>
    <note>
      <to>Tove</to>
      <from>Jani</from>
      <heading>Reminder</heading>
      <body>Don't forget me this weekend!</body>
    </note>
  `,
  php: `
    <?php
    echo "Hello, World!";
    ?>
  `,
  csharp: `
    using System;

    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello, World!");
        }
    }
  `,
  cpp: `
    #include <iostream>

    int main() {
        std::cout << "Hello, World!" << std::endl;
        return 0;
    }
  `,
  razor: `
    @{
        var message = "Hello, World!";
    }

    <div>@message</div>
  `,
  markdown: `
    # Header 1
    ## Header 2
    - List Item 1
    - List Item 2
  `,
  diff: `
    - file1.txt
    + file2.txt
    @@ -1,5 +1,6 @@
    - Line 1
    - Line 2
    - Line 3
    + Line 4
  `,
  java: `
    public class HelloWorld {
      public static void main(String[] args) {
        System.out.println("Hello, World!");
      }
    }
  `,
  vb: `
    Module Module1
      Sub Main()
          Console.WriteLine("Hello, World!")
      End Sub
    End Module
  `,
  coffeescript: `
    console.log "Hello, World!"
  `,
  handlebars: `
    {{#each items}}
      <li>{{this}}</li>
    {{/each}}
  `,
  batch: `
    @echo off
    echo Hello, World!
  `,
  pug: `
    doctype html
    html
      head
        title= pageTitle
      body
        h1 Hello #{username}
  `,
  fsharp: `
    let message = "Hello, World!"
    printfn "%s" message
  `,
  lua: `
    print("Hello, World!")
  `,
  powershell: `
    Write-Host "Hello, World!"
  `,
  python: `
    print("Hello, World!")
  `,
  ruby: `
    puts "Hello, World!"
  `,
  sass: `
    $font-stack: Helvetica, sans-serif;
    $primary-color: #333;

    .myClass {
      font: 100% $font-stack;
      color: $primary-color;
    }
  `,
  r: `
    cat("Hello, World!")
  `,
}
