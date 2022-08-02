let socialLink = document.getElementsByClassName('social-icon')
let linkedin = document.getElementById('linkedin');
let twitter = document.getElementById('twitter');
let instagram = document.getElementById('instagram');

socialLink.addEventListener('mouseover', () =>{
    linkedin.setAttribute('src', 'images/linkedin-icon.png')
    twitter.setAttribute('src', 'images/twitter-icon.png')
    instagram.setAttribute('src', 'images/instagram-icon.png')
})


socialLink.addEventListener('mouseout', () => {
	linkedin.setAttribute('src', 'images/linkedin-icon.png')
    twitter.setAttribute('src', 'images/twitter-icon.png')
    instagram.setAttribute('src', 'images/instagram-icon.png')
})



