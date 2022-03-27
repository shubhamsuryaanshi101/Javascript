var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' Author: ' + library[i].author + ",";
    if (library[i].readingStatus) {
      console.log("Book Name: " + book + " Status: Read");
    } else
    {
     console.log("Book Name: " + book + " Status: Unread");
    }
   }
   