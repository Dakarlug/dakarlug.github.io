# Migration & Backup du contenu  du site de Dakarlug.org

Pour sauvegarder les images , articles , site  , wiki de DakarlUG, j'ai 
commencé un certain  nombres de travail , afin de le finaliser , nous 
chercher des contributeurs pour finaliser l'hebergement du site /et 
seulement du site .


## Pour contribuer
Pour savoir comment contribuer , vous pouver lire le MD qui se trouve sur
git actuellement , vous pouvez le modifier.


### MARKDOWN .

Le script de scrapping du site de dakarlug est ecrit en js , et se touve 
actuellement ici .IL genere les fichiers markdown utilisé par sur le 
site http://dakarlug.github.io , vous pouvez modifier leurs structures
pour le moment , il ressemble a ca.

* https://github.com/Dakarlug/scrapper/blob/master/2013-09-18-journee-mondiale-des-logiciels-libres-edition-2013-dakar.md
* https://github.com/Dakarlug/scrapper/blob/master/2011-05-31-libre-design.md



git clone https://github.com/Dakarlug/scrapper.git 
cd  scrapper 
npm install request chario ....
node scrapper.js

* Todo
======
Modifier le script et https://github.com/Dakarlug/scrapper/blob/master/scrape.js et 
Ajouter dans les fichiers markdown les lien  de telechargment des fichiers 
pdf si ils existent. 




### SCRAPING 

Toutes les images, toutes les photos presentent sur le  site dakarlug.org 
sont actuellement sur git https://github.com/Dakarlug/site-datas 

* Todo
======
modifier le script https://github.com/Dakarlug/site-datas/blob/master/backup-link.js
afin de telecharger des elements qui ne sont pas present dans le dossier 
https://github.com/Dakarlug/site-datas/tree/master/datas





### TEMPLATING


Comme vous pouvez le voir le site de http://dakarlug.github.io/ minimaliste en boot
strap , je fais appel au integrarteur de bien vouloir travailler sur le 
template  afin de le rendre plus jolie et agreable a voir .

*https://github.com/Dakarlug/dakarlug.github.io/blob/master/_layouts/default.html


* Todo
======
Modifier le template par defaut (bootstrap) 
https://github.com/Dakarlug/dakarlug.github.io/blob/master/_layouts/default.html



Si vous avez des questions , vous pouvez envoyer sur la mailing liste ou 
ouvir un issue https://github.com/Dakarlug/dakarlug.github.io/issues


Dakarlug










 
