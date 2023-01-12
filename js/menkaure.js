//build image
buildImage(menkaureImage,
  "images/Cairo,_Gizeh,_Pyramid_of_Menkaure,_Egypt,_Oct_2005.jpg",
  "Pyramid of Menkaure",
  "CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=303308");

const para = `The pyramid of Menkaure is the smallest of the three pyramids of Giza and 
is assumed to be the tomb of the Fourth Dynasty Pharoah Menkaure.
In 1837 the remains of a wooden anthropoid coffin were found in the upper antechamber, 
which had Menkaure’s name inscribed and also contained human bones.
A year later on 13 October 1838, a British ship carrying a basalt sarcophagus, 
which contained the bones of a young woman, had sunk in the Mediterranean Sea.`;

//build paragraph
buildParagraph(menkaureDescription, "Overview", para);

const para2 = `It is assumed that Menkaure’s successor, Shepseskaf, completed the construction of the Pyramid Temple. 
Moreover, the excavation of the Valley Temple had uncovered a large number of statues of Menkaure alone and as a member of a group, 
which were all carved in a naturalistic style.
South of Menkaure’s pyramid lies the Queen’s Pyramids. It is assumed that these contain the wives and half-sisters of Menkaure.`;

//build second paragraph
buildParagraph(menkaureDescription, "Temples and Queen's Pyramids", para2);