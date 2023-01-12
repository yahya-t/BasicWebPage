//build image
buildImage(khafreImage,
  "images/Pyramid_of_Khafre_and_Sphinx,_Giza,_Greater_Cairo,_Egypt.jpg",
  "Pyramid of Khafre",
  "By M1chu - Shot from my hotel, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=41245735");

const para = `The Pyramid of Khafre is the second largest of the three pyramids.
There have been multiple accounts of Khafre’s pyramid to have been opened or looted, 
which includes a record of Ramsses II ordering the removal of casing stones to build a temple in Heliopolis.
The burial chamber and the subsidiary chamber make up the two known chambers in Khafre’s pyramid. 
Unlike Khufu’s chambers, Khafre’s are all located on the base of the pyramid, with the burial chamber being carved out of bedrock.`;

//build paragraph
buildParagraph(khafreDescription, "Overview", para);

const para2 = `To the east of Khafre’s pyramid is a temple built out of megalithic blocks. 
Much of it is destroyed but it is in much better condition that Khufu’s. 
The remains indicate a grand temple with large, multiple sections for different purposes. 
There were over 50 life-sized statues of Khafre, which were likely removed by Ramesses II. 
The interior was made of granite and is well preserved.`;

//build second paragraph
buildParagraph(khafreDescription, "Temple", para2);