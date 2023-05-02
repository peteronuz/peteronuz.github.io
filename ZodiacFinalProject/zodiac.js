function zodiacs()
{
	"use strict";

	var textrows,
	randomresult,
	result;


	textrows="Here is your Horoscope: ";
	document.getElementById("textrow1").innerHTML=textrows;
	var hs=document.getElementById("horoscope").value;
	 var horo=[
               "Ares, god of War \n \nAries people are natural leaders, strong-willed and creative. They are ambitious over-achievers with fiery personalities. They are loyal and often support the underdog, but sometimes they can be stubborn, and may jump in feet first without checking all the facts. ",
	 		   "Aphrodite, goddess of Love and Beauty \n \nTaurus people have strength and stamina. That can work for or against them and those around them as they have staying power to see things through, but may not know when it is time to give ground or even quit. They are great listeners and are patient, practical and efficient and value simplicity and functionality.",
	 		   "Athena, goddess of Wisdom and Military Victory \n \nFlexibility, balance and adaptability describe the Gemini personality. Their responses can be difficult to predict and they may be prone to mood swings, but they can also be generous, affectionate and imaginative. Safe to assume that their behavior will always be unexpected.",
	 		   "Artemis, goddess of the Moon \n \nCancer people are traditionalists, loving a simple home life. They will usually be composed, but that hides a turmoil of moods going on under the surface. They are easily hurt and can be prone to depression, but they are loyal, sympathetic friends and carers.",
	 		   "Apollo, god of the Sun and Light \n \nLeo people are exuberant and powerful. Born leaders, they will not hesitate to let you know what they think and that they are right. Which they usually are. They can be brave and intuitive, but may come across as pushy and overbearing. Their bossiness often hides a sensitive soul and an underlying insecurity.",
	 		   "Hermes, god of Communication and Trickery\n \nVirgos are charmers. They will listen so well you will find yourself telling them your deepest secrets and fears. They have a strong sense of right and wrong and have analytical intuitive characters. They can be short tempered and self-serving.",
	 		   "Dionysus, god of Wine and Ecstasy\n \nLibras believe in balance. They like to surround themselves with harmony and beauty. They are very active people, but can overreach themselves and run out of steam rather quickly. They are very caring and can be shy if not treated gently.",
	 		   "Hades, god of Underworld\n \nScorpios are cool and confident. They can take on big projects and bold enterprises and achieve anything they put their mind to. However, they can be secretive and single minded and will never forget or forgive a perceived act of treachery",
			   "Zeus, god of the Sky and Thunder \n \nThe Sagittarius person is a philosopher. They are able to focus and can be quite intense, but they are not patient and expect quick results. Because of their energetic and compassionate character, they are loyal friends but shy away from commitment.",
		       "Pan, rules over Forest and Woodlands\n \nCapricorns are practical and intellectual. They like to maintain order and stability and are very systematic in their approach. They are patient and will persevere in the face of failure but can be known to dwell on the negative for an extended time.",
		       "Prometheus, god of Forethought\n \nQuiet and unassuming, Aquarius people will use unusual methods to achieve their goals. They will take up any cause and are honest, loyal and highly intelligent. However, they can be prone to laziness and can get lost in philosophical musings.",
		       "Poseidon, god of the Sea\n \nPisces people are knowledge gatherers, but they like to keep a low profile. They are unselfish and happy to stay out of the limelight. However they can be overcautious and sometimes gullible, and people may take advantage of their trusting, caring nature."


	 		];
	 		 var src=["HELMET.png","BIRDIE.png","OWL.png","BOW.png","HARP.png","SHOE-FLY.png","GRAPES.png","SKULL.png","FIST.png","HORNS.png","FIREHAND.png","TRIDENT.png"];

	 	
	 		  
	
	if(hs=="Aries")
	{
		
			 var re=horo[0];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[0];
	 		  document.getElementById('img_horo').appendChild(img);

	}
	else if(hs=="Taurus")
	{
		var re=horo[1];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[1];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Gemini")
	{
		var re=horo[2];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[2];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Cancer")
	{
		var re=horo[3];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[3];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Leo")
	{
		var re=horo[4];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[4];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Virgo")
	{
		var re=horo[5];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[5];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Libra")
	{
		var re=horo[6];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[6];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Scorpio")
	{
		var re=horo[7];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[7];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Sagittarius")
	{
		var re=horo[8];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[8];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Capricorn")
	{
		var re=horo[9];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[9];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Aquarius")
	{
		var re=horo[10];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[10];
	 		  document.getElementById('img_horo').appendChild(img);
	}
	else if(hs=="Pisces")
	{
		var re=horo[11];
		 	  result=re;
		 	  var img = document.createElement('img');
		 	  img.src =src[11];
	 		  document.getElementById('img_horo').appendChild(img);
	}	
	
	document.getElementById("textrow2").innerHTML=result;
	document.getElementById("restartbtn").style.visibility="visible";
}


//https://www.youtube.com/watch?v=lPRZgrSoOY0