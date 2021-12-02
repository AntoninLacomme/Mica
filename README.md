# Mica

Mica est une infrastructure de serveur NodeJS pouvant ou non implémenter des WebSockets. Il suffit de le copier dans un nouveau projet et de faire hériter le serveur de l'application des classes ```MicaServer``` ou ```MicaServerIO```. Côté client, si l'on veut implémenter des WebSockets, il suffit de créer une classe héritant de ```MicaClientIO```.

Par défaut, une application héritant de Mica se lancera sur le port 8001.

D'un point de vue WebSocket, le serveur permet une identification des clients par un système d'ID. Par défaut, le serveur sait gérer les connexions et déconnexions.