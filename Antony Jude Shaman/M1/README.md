# MILESTONE 1

## Table of Contents

1. [Internet](#internet)
2. [How does the Internet work?](#how-does-the-internet-work)
3. [Proxy](#proxy)
   - [Forward Proxy](#forward-proxy)
   - [Reverse Proxy](#reverse-proxy)
   - [Anonymous Proxy](#anonymous-proxy)
4. [Status Codes](#status-codes)
5. [Networks](#networks)
   - [P2P (Peer-to-Peer)](#p2p-peer-to-peer)
   - [C-S (Client-Server)](#c-s-client-server)
6. [Protocols](#protocols)
   - [TCP/IP](#tcp/ip)
   - [UDP](#udp)
7. [HTTP](#http)
8. [Domain Names and DNS](#domain-names-and-dns)
   - [Flow of finding the IP address of a domain](#flow-of-finding-the-ip-address-of-a-domain)
   - [Record Types](#record-types)
9. [Types of Hosting](#types-of-hosting)
10. [Browsers](#browsers)
11. [Web Servers](#web-servers)
12. [How browsers work?](#how-browsers-work)
13. [Browser Engines](#browser-engines)
14. [V8 Engine](#v8-engine)

## Internet

The Internet is a global network of connected computers that allows people to share information and communicate with each other.

## How does the Internet work?

1. **Packet Switching**: Information is broken into small "packets" and sent across the network, then reassembled at the destination. But slower than circuit switching. It uses a virtual connection.
2. **Protocols**: Rules that computers follow to communicate, like TCP/IP and HTTP.
3. **IP Addresses**: Unique addresses for each device on the network.

### Proxy

A middleman server between the client and the server. Provides anonymity to both client and server.

1. **Forward Proxy** - Requests from client sent to the Proxy and it acts as a client with the server.
2. **Reverse Proxy** - Mainly acts as a load balancer to send the client request to the server based on the defined rules/conditions.
3. **Anonymous Proxy** - Provides anonymity for the client.

### Status Codes

- **200** - OK.
- **201** - Created.
- **204** - Created but no response.

- **301** - Moved permanently.
- **302** - Found.

- **400** - Bad request.
- **401** - Unauthorized.
- **404** - Not found.
- **405** - Method not allowed.

- **500** - Internal server error.

### Networks

- **P2P (Peer-to-Peer)**: Computers connect directly to share files or information.
- **C-S (Client-Server)**: One central computer (server) provides services to other computers (clients).

### Protocols

- **TCP/IP**: Helps in transmission of data over the network. Reliable and secure.
- **UDP**: Faster than TCP but less reliable; good for real time and streaming.

### HTTP

- **POST** - to create with a request body.
- **GET** - to read information, no request body. But supports search Params.
- **PUT** - to update information.
- **DELETE** - to delete data.

### Domain Names and DNS

- **Domain Names**: Human-readable addresses for websites.
- **DNS (Domain Name System)**: Translates domain names into IP addresses.
- **DNS Resolver**: Your computer's way of asking "Where is this website?"
- **Nameservers**: Computers that hold the directory of domain names and IP addresses.
- **DNS Caching**: Remembering recent lookups to speed things up.

#### Flow of finding the IP address of a domain:

- Client req -> search in browser cache -> search in OS cache -> Reach Nameservers for the IP -> redirects to TLD Nameserver -> directs to Authoritative Nameserver.

_The steps are carried on if the IP address is not found the current step._

#### Record Types

- **A** - IPv4 address.
- **AAAA** - IPv6 address.
- **CNAME** - Canonical Name of the domain

### Types of Hosting

- Shared Hosting - sharing the same server for all the applications.
- VPS (Virtual Private Server) - Cloud or local hosting but with limited resources and no scalability.
- Dedicated Hosting - Separate server for an application.
- Cloud Hosting - Hosting in Cloud service providers with unlimited scalability.

### Browsers

- **Chrome**: Developed by Google.
- **Firefox**: Developed by Mozilla.
- **Safari**: Developed by Apple.
- **Edge**: Developed by Microsoft.

### Web Servers

- **Apache**: Open-source web server.
- **Nginx**: Open-source web server.

### How browsers work?

1. **User Interface**: Browser UI.
2. **Browser Engine**: Communicates between UI and rendering engine.
3. **Rendering Engine**: Displays the requested content.
4. **Networking**: Handles network calls.
5. **UI Backend**: Draws basic widgets.
6. **JavaScript Interpreter**: Parses and executes JS code.
7. **Data Storage**: Local storage, cookies, etc.

### Browser Engines

- **Blink**: Chrome, Opera. Forked from Webkit.
- **Gecko**: Firefox.
- **Webkit**: Safari.

### V8 Engine

- **V8**: Chrome's JS engine, developed by Google.
- **Node.js**: Uses V8 engine to run JS code outside the browser.
